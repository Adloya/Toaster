const Discord = require('discord.js');
const request = require('request')


module.exports = {
    name: 'dog',
    description: 'Here is a dog pic for you 🐶',
    category: '🎉 - Fun',
    run: async(client, message, args) => {
        request('http://random.dog/woof', (error, response, body) => {
            message.channel.send(`http://random.dog/${body}`).catch(err => console.error(err.stack))
        })
    }
}