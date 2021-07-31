const Discord = require('discord.js');
const colors = require('../../lists/colors.json');
const default_embeds_color = colors["default_embed"];
const error_color = colors["error_embed"];
const emojis = require("../../lists/emojis.json")
const db = require("../../db.json");
const language = require("../../lists/language.json");


module.exports = {
    name: 'kick',
    description: 'Kick a member',
    category: '🎯 - Moderation',
    run: (client, message, args) =>{
        const guildLang = db[message.guild.id]["language"]

        const error_embed = new Discord.MessageEmbed()
            .setColor(`${error_color}`)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setTitle(`${emojis["no"]} | ${language[guildLang]["Error"]}`)
            .setFooter("Toaster - Created by Adloya")
            .setTimestamp();

        if(message.member.hasPermission("KICK_MEMBERS")){
            let arg = message.content.trim().split(/ +/g);

            user = message.mentions.members.first();
            if(arg[2]) {
                reason = arg[2];
            }else{
                reason = "Aucune raison donnée"
            }

            if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
                error_embed.addFields(
                    { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["BotMissingPermission"]} (KICK_MEMBERS)` }
                );
                message.channel.send(error_embed);
                error_embed.fields = [];
            }

            if(!user) {
                error_embed.addFields(
                    {
                        name: `${language[guildLang]["ErrorBasic"]}`
,
                        value: `${language[guildLang]["UsrNotFoundOrUsrNotIndicated"]}`
                    }
                );
                message.channel.send(error_embed);
                error_embed.fields = [];
            }
                else{
                    user.kick().catch((err) => {
                        error_embed.addFields(
                            { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["AdminOrHigher"]}` }
                        );
                        message.channel.bulkDelete(1);
                        message.channel.send(error_embed);
                        error_embed.fields = [];
                        return;
                    });
                    const kick_embed = new Discord.MessageEmbed()
                        .setColor(`${default_embeds_color}`)
                        .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
                        .setDescription(`${language[guildLang]["MemberKickDesc"]}`)
                        .setFooter("Toaster - Created by Adloya")
                        .setTitle(`${emojis["yes"]} | ${language[guildLang]["MemberKickTitle"]} !`)
                        .setTimestamp()
                        .addFields(
                            { name: `${language[guildLang]["MemberKick"]}`, value: user }
                        );
                    message.channel.send(kick_embed)
                }
            }
        else{
            error_embed.addFields(
                { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["MissingPermissions"]} (KICK_MEMBERS)` }
            );
            message.channel.send(error_embed);
            error_embed.fields = [];
        }
    }
}