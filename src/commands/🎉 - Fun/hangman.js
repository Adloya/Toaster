const Discord = require('discord.js');
const { hangman } = require('reconlx')
const db = require("../../db.json");
const language = require("../../lists/language.json");
const emojis = require("../../lists/emojis.json")


module.exports = {
    name: 'hangman',
    description: 'The hangman game...On discord...With a bot...What a strange command !',
    category: '🎉 - Fun',
    run: async(client, message, args) => {
        on = 0

    
    if(on != 1){
        message.channel.send("This command was disabled because of discord.js v13's changes, it will be back but different, it will not have some packages.")
    }

        const guildLang = db[message.guild.id]["language"]

        const error_embed = new Discord.MessageEmbed();
        error_embed.setColor(`${error_color}`);
        error_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
        error_embed.setTitle(`${emojis["no"]} | ${language[guildLang]["Error"]}`)
        error_embed.setFooter("Toaster - Created by Adloya");
        error_embed.setTimestamp();

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`${language[guildLang]["MissingPermission"]}`)
        if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
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