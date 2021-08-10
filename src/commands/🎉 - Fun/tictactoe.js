const Discord = require('discord.js');
const { tictactoe } = require('reconlx')
const db = require("../../db.json");
const language = require("../../lists/language.json");


module.exports = {
    name: 'tictactoe',
    description: 'Play TicTacToe. That\'s it.',
    category: '🎉 - Fun',
    run: async(client, message, args) => {
        on = 0

    
    if(on != 1){
        message.channel.send("This command was disabled because of discord.js v13's changes, it will be back but different")
        return;
    }
        const guildLang = db[message.guild.id]["language"]
        const member = message.mentions.members.first()
        if(!member)  return  message.channel.send(`${language[guildLang]["SpecifyOpponent"]}`)

        new tictactoe({
            player_two: member,
            message: message
        })
    }
}