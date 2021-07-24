const Discord = require('discord.js');
const SnakeGame = require('snakecord');
const db = require("../../db.json");
const language = require("../../lists/language.json");

const snakeGame = new SnakeGame({

    title: 'Toaster - Snake',

    color: "GREEN",

    timestamp: false,

    gameOverTitle: "Game Over !"

});

module.exports = {
    name: 'snake',
    description: 'Playing snake like in the Discord 404 page',
    category: '🎉 | fun',
    run: async(client, message, args) => {
        const guildLang = db[message.guild.id]["language"]

        const error_embed = new Discord.MessageEmbed();
        error_embed.setColor(`${error_color}`);
        error_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
        error_embed.setTitle(`${emojis["no"]} | ${language[guildLang]["Error"]}`)
        error_embed.setFooter("Toaster - Created by Adloya");
        error_embed.setTimestamp();

        if (!message.guild.me.hasPermission("ADD_REACTIONS")) {
            error_embed.addFields(
                {
                    name: `${language[guildLang]["ErrorBasic"]}`,
                    value: `${language[guildLang]["BotMissingPermission"]}`
                }
            );
            message.channel.send(error_embed);
            error_embed.fields = [];
        }
        return snakeGame.newGame(message);
    }
}