const Discord = require('discord.js');
const db = require('../../db.json');
const language = require('../../lists/language.json');

module.exports = {
    name: 'tst',
    description: 'testLangs',
    category: '🧑‍💻 | developer',
    run: async(client, message, args) => {
        const guildLang = db[message.guild.id]["language"]
        console.log("executed")
        console.log(language[guildLang]["Test"]);
        message.channel.send(language[guildLang]["Test"]);
    }
}