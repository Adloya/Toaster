const Discord = require('discord.js');
const { hangman } = require('reconlx')
const db = require("../../db.json");
const language = require("../../lists/language.json");

module.exports = {
    name: 'hangman',
    description: 'The hangman game...On discord...With a bot...What a strange command !',
    category: '🎉 | fun',
    run: async(client, message, args) => {
        const guildLang = db[message.guild.id]["language"]

        const error_embed = new Discord.MessageEmbed();
        error_embed.setColor(`${error_color}`);
        error_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
        error_embed.setTitle(`${emojis["no"]} | ${language[guildLang]["Error"]}`)
        error_embed.setFooter("Toaster - Created by Adloya");
        error_embed.setTimestamp();

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${language[guildLang]["MissingPermission"]}`)
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            error_embed.addFields(
                {
                    name: `${language[guildLang]["ErrorBasic"]}`,
                    value: `${language[guildLang]["BotMissingPermission"]}`
                }
            );
            message.channel.send(error_embed);
            error_embed.fields = [];
        }
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if (!channel) return message.channel.send(`${language[guildLang]["SpecifyChannelMention"]}`)
        const word = args.slice(1).join(" ")
        if (!word) return message.channel.send(`${language[guildLang]["SpecifyWord"]}`)

        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })

        hang.start();
    }
}