const Discord = require('discord.js');
const colors = require('../../lists/colors.json');
const default_embeds_color = colors["default_embed"];
const error_color = colors["error_embed"];
const db = require("../../db.json");
const language = require("../../lists/language.json");
const emojis = require("../../lists/emojis.json")


module.exports = {
    name: 'unlock',
    description: 'Unlocks a channel',
    category: '🎯 - Moderation',
    usage: "[this_channel/channel**] **#channel @role",
    run: (client, message, args) =>{
        // on = 0

    
        // if(on != 1){
        //     message.channel.send("This command was disabled because of discord.js v13's changes, it will be back but different, it will not have some packages.")
        // }
        let arg = message.content.trim().split(/ +/g);
        const guildLang = db[message.guild.id]["language"]
        const error_embed = new Discord.MessageEmbed();
        error_embed.setColor(`${error_color}`);
        error_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
        error_embed.setTitle(`${emojis["no"]} | ${language[guildLang]["Error"]}`);
        error_embed.setFooter("Toaster - Created by Adloya");
        error_embed.setTimestamp();

        if (!message.member.permissions.has('MANAGE_CHANNELS') || !message.member.permissions.has('MANAGE_ROLES')) {
            error_embed.addFields(
                { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["MissingPermission"]}` }
            );
            message.channel.send({embeds : [error_embed]});
            error_embed.fields = [];
            return;
        }else{
            if (!message.guild.me.permissions.has("MANAGE_CHANNELS") || !message.member.permissions.has('MANAGE_ROLES')) {
                error_embed.addFields(
                    { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["BotMissingPermission"]}` }
                );
                message.channel.send({embeds : [error_embed]});
                error_embed.fields = [];
                return;
            }else{
                if(!arg[1]){
                error_embed.addFields(
                    { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["NoArg1UnLock"]}` }
                );
                message.channel.send({embeds : [error_embed]});
                error_embed.fields = [];
                return;
            }
            if(!message.mentions.roles.first()){
                error_embed.addFields(
                    { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["SpecifyRole"]}` }
                );
                message.channel.send({embeds : [error_embed]});
                error_embed.fields = [];
                return;
            }
                else{
                    if(arg[1] === "this_channel"){
                        if(!arg[2]){
                            error_embed.addFields(
                                { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["SpecifyRole"]}` }
                            );
                            message.channel.send({embeds : [error_embed]});
                            error_embed.fields = [];
                            return;
                        }
                        else{
                            role = message.mentions.roles.first()
                            const channel_og_name = message.channel.name.replace('🔐', '')
                            message.channel.permissionOverwrites.edit(role, { 
                                SEND_MESSAGES: true,
                                ADD_REACTIONS: true,
                            })
                            .catch(error => {
                                message.channel.send("ERROR : " + error);
                                return;
                            })
                            message.channel.setName(`${channel_og_name}`);
                            const unlock_embed = new Discord.MessageEmbed()
                                .setColor(`${default_embeds_color}`)
                                .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
                                .setFooter(`Toaster - Created by Adloya | ${language[guildLang]["EndNoteUnLock"]}`)
                                .setTitle("🔐 | Lock !")
                                .setTimestamp()
                                .addFields(
                                    { name: `${emojis["yes"]} ${language[guildLang]["UnLocked"]}`, value: `${language[guildLang]["ChannelUnLockedPt1"]}` + message.channel + `${language[guildLang]["ChannelUnLockedPt2"]}` + role + `${language[guildLang]["ChannelUnLockedEnd"]}`}
                                );
                            message.channel.send(unlock_embed)
                            return;
                        }
                    }
                    else {
                        if(arg[1] === "channel"){
                            if(!arg[2]){
                                error_embed.addFields(
                                    { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["SpecifyChannelMention"]}` }
                                );
                                message.channel.send({embeds : [error_embed]});
                                error_embed.fields = [];
                                return;
                            }
                            if(!arg[3]){
                                error_embed.addFields(
                                    { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["SpecifyRole"]}` }
                                );
                                message.channel.send({embeds : [error_embed]});
                                error_embed.fields = [];
                                return;
                            }
                            if(!message.mentions.channels.first()){
                                error_embed.addFields(
                                    { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["SpecifyChannelMention"]}` }
                                );
                                message.channel.send({embeds : [error_embed]});
                                error_embed.fields = [];
                                return;
                            }
                            if(!message.mentions.roles.first()){
                                error_embed.addFields(
                                    { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["SpecifyRole"]}` }
                                );
                                message.channel.send({embeds : [error_embed]});
                                error_embed.fields = [];
                                return;
                            }
                            else{
                                role = message.mentions.roles.first()
                                channeltolock = message.mentions.channels.first()
                                channel_og_name = channeltolock.name.replace('🔐', '')
                                channeltolock.permissionOverwrites.edit(role, { 
                                    SEND_MESSAGES: true
                                })
                                .catch(error => {
                                    message.channel.send("ERROR : " + error);
                                    return;
                                })
                                channeltolock.setName(`${channel_og_name}`);
                                const lock_embed = new Discord.MessageEmbed()
                                    .setColor(`${default_embeds_color}`)
                                    .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
                                    .setFooter(`Toaster - Created by Adloya | ${language[guildLang]["EndNoteLock"]}`)
                                    .setTitle("🔐 | Lock !")
                                    .setTimestamp()
                                    .addFields(
                                        { name: `${emojis["yes"]} ${language[guildLang]["UnLocked"]}`, value: `${language[guildLang]["ChannelUnLockedPt1"]}` + channeltolock + `${language[guildLang]["ChannelUnLockedPt2"]}` + role + `${language[guildLang]["ChannelUnLockedEnd"]}`}
                                    );
                                message.channel.send({embeds : [lock_embed]})
                                return;                            
                            }
                        }
                    }
                }
            }
        }
    }
}