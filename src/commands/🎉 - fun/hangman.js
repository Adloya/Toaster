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
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${language[guildLang]["MissingPermission"]}`)
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