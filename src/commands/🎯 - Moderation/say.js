const Discord = require('discord.js');
const emojis = require("../../lists/emojis.json")
const db = require("../../db.json");
const language = require("../../lists/language.json");

const colors = require('../../lists/colors.json');
const error_color = colors["error_embed"];

const error_embed = new Discord.MessageEmbed();
error_embed.setColor(`${error_color}`);
error_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
error_embed.setTitle(`${emojis["no"]} | Erreur !`)
error_embed.setFooter("Toaster - Created by Adloya");
error_embed.setTimestamp();

module.exports = {
    name: 'say',
    description: 'The bot is talking ! WOAW',
    category: '🎯 - Moderation',
    aliases: ['repeat', 'echo'],
    run: async (client, message, args) => {
        const guildLang = db[message.guild.id]["language"]
        
        if(message.member.permissions.has("MANAGE_MESSAGES")){
            // if (!message.guild.me.permissions.has("SEND_MESSAGES")) {
            //     error_embed.addFields(
            //         {
            //             name: `${language[guildLang]["ErrorBasic"]}`,
            //             value: `${language[guildLang]["BotMissingPermission"]} (SEND_MESSAGES)`
            //         }
            //     );
            //     message.channel.send({embeds : [error_embed]});
            //     error_embed.fields = [];
            // }else{
                let sendMessage = message.content.substring(6);
                if(!sendMessage || !args){
                    error_embed.addField(`${language[guildLang]["ErrorBasic"]}`, `${language[guildLang]["MessageNotSpecified"]}`)
                    message.channel.send({embeds : [error_embed]});
                    error_embed.fields = [];
                    return;
                }

                message.channel.bulkDelete(1);
                message.channel.send(sendMessage);
                
                // }
        }else{
            error_embed.addField(`${language[guildLang]["ErrorBasic"]}`, `${language[guildLang]["MissingPermission"]} (MANAGE_MESSAGES)`);
            message.channel.send({embeds : [error_embed]});
            error_embed.fields = [];
        }
    }
}