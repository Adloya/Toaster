const Discord = require('discord.js');
const request = require('request')


module.exports = {
    name: 'dog',
    description: 'Une photo de chien',
    category: '🎉 | fun',
    run: async(client, message, args) => {
        request('http://random.dog/woof', (error, response, body) => {
            message.channel.send(`http://random.dog/${body}`).catch(err => console.error(err.stack))
        })
    }
}