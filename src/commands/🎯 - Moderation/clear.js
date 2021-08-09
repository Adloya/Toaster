const Discord = require('discord.js');
const db = require("../../db.json");
const colors = require('../../lists/colors.json');
const default_embeds_color = colors["default_embed"];
const error_color = colors["error_embed"];
const emojis = require("../../lists/emojis.json")
const language = require("../../lists/language.json");


module.exports = {
    name: 'clear',
    description: 'Deletes a given amount of messages',
    category: '🎯 - Moderation',
    run: async (client, message, args) => {
        const guildLang = db[message.guild.id]["language"]

        const error_embed = new Discord.MessageEmbed();
        error_embed.setColor(`${error_color}`);
        error_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
        error_embed.setTitle(`${emojis["no"]} | ${language[guildLang]["Error"]}`)
        error_embed.setFooter("Toaster - Created by Adloya");
        error_embed.setTimestamp();


        if(message.member.permissions.has('MANAGE_MESSAGES')){
            if (!message.member.permissions.has('MANAGE_MESSAGES')) {
                error_embed.addFields(
                    { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["MissingPermission"]} (MANAGE_MESSAGES)` }
                )
                message.channel.send({embeds : [error_embed]});
                error_embed.spliceFields();
                return;
            }else{
                if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
                    error_embed.addFields(
                        {
                            name: `${language[guildLang]["ErrorBasic"]}`,
                            value: `${language[guildLang]["BotMissingPermission"]} (MANAGE_MESSAGES)`
                        }
                    );
                    message.channel.send({embeds : [error_embed]});
                    error_embed.fields = [];
                }else{
                    if (!args[0]) {
                        error_embed.addFields(
                            { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["SpecifyMsgNumber"]}` }
                        )
                        message.channel.send({embeds : [error_embed]});
                        error_embed.spliceFields();
                        return; 
                    }else{
                        if (isNaN(args[0])) {
                            error_embed.addFields(
                                { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["IncorrectMsgAmount"]}` }
                            )
                            message.channel.send({embeds : [error_embed]});
                            error_embed.spliceFields();
                            return;
                        }else{
                        
                        if (parseInt(args[0]) <= 0 || parseInt(args[0]) >= 99) {
                            error_embed.addFields(
                                { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["NotBetween1&99"]}` }
                            )
                            message.channel.send({embeds : [error_embed]});
                            error_embed.spliceFields();
                            return;
                        }else{
                            message.channel.bulkDelete(parseInt(args[0]) + 1).catch(error => {
                                error_embed.addFields(
                                    {
                                        name: `${language[guildLang]["ErrorBasic"]}`
    ,
                                        value: `${language[guildLang]["DiscordLimitationBulkDel"]}`
                                    },
                                    {
                                        name: "Error :",
                                        value: `\`\`${error}\`\``
                                    }
                                );
                                message.channel.send({embeds : [error_embed]});
                                error_embed.fields = [];
                                return;
                            })

                            const clear_embed = new Discord.MessageEmbed();
                            
                            clear_embed.setColor(`${default_embeds_color}`);
                            clear_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
                            clear_embed.setDescription(`${language[guildLang]["ClearDesc"]}`);
                            clear_embed.setTitle(`${emojis["yes"]} | ${language[guildLang]["MessagesDeleted"]}`);
                            clear_embed.setFooter("Toaster - Created by Adloya");
                            clear_embed.setTimestamp();
                            clear_embed.addFields(
                                { name: `${language[guildLang]["YouHaveDeleted"]}`, value: ` ${args[0]} message(s)` },
                                { name: `${language[guildLang]["MessageWillDisapear"]}`, value: `5 ${language[guildLang]["Seconds"]}`}
                            );

                            message.channel.send({embeds : [clear_embed]}).then(msg => {
                                setTimeout(() => {
                                    msg.delete();
                                }, 5000);
                            });
                        }
                    }
                }
                }
                }
            }
        }
    }