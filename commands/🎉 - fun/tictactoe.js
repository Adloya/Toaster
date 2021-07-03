const Discord = require('discord.js');
const { tictactoe } = require('reconlx')

module.exports = {
    name: 'tictactoe',
    description: 'Tic tac toe !',
    category: '🎉 | fun',
    run: async(client, message, args) => {
        const member = message.mentions.members.first()
        if(!member)  return  message.channel.send('Spécifiez un adversaire en le mentionnant')

        new tictactoe({
            player_two: member,
            message: message
        })
    }
}