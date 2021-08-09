const Discord = require('discord.js');
const SnakeGame = require('snakecord');
const db = require("../../db.json");
const language = require("../../lists/language.json");
const emojis = require("../../lists/emojis.json")


const snakeGame = new SnakeGame({

    title: 'Toaster - Snake',

    color: "GREEN",

    timestamp: false,

    gameOverTitle: "Game Over !"

});

module.exports = {
    name: 'snake',
    description: 'Enables you to play snake like in the Discord 404 page',
    category: '🎉 - Fun',
    run: async(client, message, args) => {

        on = 0

    
    if(on != 1){
        message.channel.send("This command was disabled because of discord.js v13's changes, it will be back but different")
    }

        const guildLang = db[message.guild.id]["language"]

        const error_embed = new Discord.MessageEmbed();
        error_embed.setColor(`${error_color}`);
        error_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
        error_embed.setTitle(`${emojis["no"]} | ${language[guildLang]["Error"]}`)
        error_embed.setFooter("Toaster - Created by Adloya");
        error_embed.setTimestamp();

        if (!message.guild.me.permissions.has("ADD_REACTIONS")) {
            error_embed.addFields(
                {
                    name: `${language[guildLang]["ErrorBasic"]}`,
                    value: `${language[guildLang]["BotMissingPermission"]}`
                }
            );
            message.channel.send({embeds : [error_embed]});
            error_embed.fields = [];
        }
        return snakeGame.newGame(message);
    }
}