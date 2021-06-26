const Discord = require('discord.js');
const { hangman } = require('reconlx')

module.exports.help = {
    name: 'hangman',
    description: 'Le jeu du pendu sur discord, avec un bot',
    category: 'fun'
}
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Vous n\'avez pas les permissions nescessaires pour effectuer cette action')
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    if (!channel) return message.channel.send('Spécifiez un salon')
    const word = args.slice(1).join(" ")
    if (!word) return message.channel.send('Spécifiez un mot à deviner')

    const hang = new hangman({
        message: message,
        word: word,
        client: client,
        channelID: channel.id,
    })

    hang.start();
}