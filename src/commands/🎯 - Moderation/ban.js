const Discord = require('discord.js');
const colors = require('../../lists/colors.json');
const default_embeds_color = colors["default_embed"];
const error_color = colors["error_embed"];

const emojis = require("../../lists/emojis.json")
const db = require("../../db.json");
const language = require("../../lists/language.json");


module.exports = {
    name: 'ban',
    description: 'Bans a member',
    category: '🎯 - Moderation',
    run: (client, message, args) =>{
        const guildLang = db[message.guild.id]["language"]

        const error_embed = new Discord.MessageEmbed()
            .setColor(`${error_color}`)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setTitle(`${emojis["no"]} | ${language[guildLang]["Error"]}`)
            .setFooter("Toaster - Created by Adloya")
            .setTimestamp();

        if(message.member.permissions.has("BAN_MEMBERS")) {
            let arg = message.content.trim().split(/ +/g);

            user = message.mentions.members.first();
            if (arg[2]) {
                reason = arg[2];
            } else {
                reason = "Aucune raison donnée / No reason specified"
            }
            if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
                error_embed.addFields(
                    {
                        name: `${language[guildLang]["ErrorBasic"]}`,
                        value: `${language[guildLang]["BotMissingPermission"]} (BAN_MEMBERS)`
                    }
                );
                message.channel.send({embeds : [error_embed]});
                error_embed.fields = [];
            }

            if (!user) {
                error_embed.addFields(
                    {
                        name: `${language[guildLang]["ErrorBasic"]}`,
                        value: `${language[guildLang]["UsrNotFoundOrUsrNotIndicated"]}`
                    }
                );
                message.channel.send({embeds : [error_embed]});
                error_embed.fields = [];
            } else {
                message.guild.members.ban(user.id).catch((err) => {
                    error_embed.addField(`${language[guildLang]["ErrorBasic"]}`, `${language[guildLang]["AdminOrHigher"]}`);
                    message.channel.bulkDelete(1);
                    message.channel.send({embeds : [error_embed]});
                    error_embed.fields = [];
                    return;
                });
                const ban_embed = new Discord.MessageEmbed()
                    .setColor(`${default_embeds_color}`)
                    .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
                    .setDescription(`${language[guildLang]["MemberBannedDesc"]}`)
                    .setFooter("Toaster - Created by Adloya")
                    .setTitle(`${emojis["yes"]} | ${language[guildLang]["MemberBanned"]} !`)
                    .setTimestamp()
                    .addField(`${language[guildLang]["UserWasBanned"]}`, `${user}`)
                if(arg[2]){
                    ban_embed.addField("Raison :" `${arg[2]}`)
                }
                message.channel.send({embeds : [ban_embed]});
            }
        }
            else{
                error_embed.addFields(`${language[guildLang]["ErrorBasic"]}`, `${language[guildLang]["MissingPermission"]} (BAN_MEMBERS)`);
                message.channel.send({embeds : [error_embed]});
                error_embed.fields = [];
            }
        }
}