const Discord = require('discord.js');
const default_embeds_color = "#90c53f";
const emojis = require("../../lists/emojis.json")
const db = require("../../db.json");
const language = require("../../lists/language.json");


error_color = "#fc1c03"

module.exports = {
    name: 'ban',
    description: 'Bans a member',
    category: '🎯 | moderation',
    run: (client, message, args) =>{
        const guildLang = db[message.guild.id]["language"]

        const error_embed = new Discord.MessageEmbed()
            .setColor(`${error_color}`)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setTitle(`${emojis["no"]} | ${language[guildLang]["Error"]} !`)
            .setFooter("Toaster - Created by Adloya")
            .setTimestamp();

        if(message.member.hasPermission("BAN_MEMBERS")) {
            let arg = message.content.trim().split(/ +/g);

            user = message.mentions.members.first();
            if (arg[2]) {
                reason = arg[2];
            } else {
                reason = "Aucune raison donnée / No reason specified"
            }
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
                error_embed.addFields(
                    {
                        name: `${language[guildLang]["ErrorBasic"]}`,
                        value: `${language[guildLang]["BotMissingPermission"]}`
                    }
                );
                message.channel.send(error_embed);
                error_embed.fields = [];
            }

            if (!user) {
                error_embed.addFields(
                    {
                        name: `${language[guildLang]["ErrorBasic"]}`,
                        value: `${language[guildLang]["UsrNotFoundOrUsrNotIndicated"]}`
                    }
                );
                message.channel.send(error_embed);
                error_embed.fields = [];
            } else {
                message.guild.members.ban(user.id).catch((err) => {
                    error_embed.addFields(
                        { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["AdminOrHigher"]}` }
                    );
                    message.channel.bulkDelete(1);
                    message.channel.send(error_embed);
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
                    .addFields(
                        {name: `${language[guildLang]["UserWasBanned"]}`, value: user}
                    );
                if(arg[2]){
                    ban_embed.addField("Raison :" `${arg[2]}`)
                }
                message.channel.send(ban_embed)
            }
        }
            else{
                error_embed.addFields(
                    { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["ErrorBasic"]}` }
                );
                message.channel.send(error_embed);
                error_embed.fields = [];
            }
        }
}