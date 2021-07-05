const Discord = require('discord.js');
const { tictactoe } = require('reconlx')
const db = require("../../db.json");
const language = require("../../lists/language.json");


module.exports = {
    name: 'tictactoe',
    description: 'Play TicTacToe. That\'s it.',
    category: '🎉 | fun',
    run: async(client, message, args) => {
        const guildLang = db[message.guild.id]["language"]
        const member = message.mentions.members.first()
        if(!member)  return  message.channel.send(`${language[guildLang]["SpecifyOpponent"]}`)

        new tictactoe({
            player_two: member,
            message: message
        })
    }
}