const Discord = require('discord.js');
const default_embeds_color = require('../../lists/colors.json');
const emojis = require("../../lists/emojis.json");
const db = require("../../db.json");
const language = require("../../lists/language.json");
const { create } = require('sourcebin');

module.exports = {
    name: 'sourcebin',
    description: "Publish code to sourceb.in",
    aliases: ['sbin', 'sbin-upload', 'sourcebin-upload'],
    usage: "//[lang=[language]] [code]",
    category: '🛠️ - Utilities',    run: async(client, message, args) => {
        const guildLang = db[message.guild.id]["language"];
        
        const content = args.join(" ");
        if(!content) return message.reply(`${language[guildLang]["MissingArg"]} (Code to upload)`);

        create([
            {
                name: `Code by ${message.author.username}`,
                content,
            }
        ],
        {
            title: `Code by ${message.author.username}`,
            description: `Uploaded on Sourcebin by the Toaster Discord bot`
        }).then((value) => {
            message.channel.send(`${value.url}`);
        });
    }
}