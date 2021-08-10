const Discord = require('discord.js');
const emojis = require("../../lists/emojis.json")
const colors = require('../../lists/colors.json');
const error_color = colors["error_embed"];

const db = require("../../db.json");
const language = require("../../lists/language.json");



const error_embed = new Discord.MessageEmbed()
    .setColor(`${error_color}`)
    .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
    .setTitle(`${emojis["no"]} | Erreur !`)
    .setFooter("Toaster - Created by Adloya")
    .setTimestamp();

module.exports = {
    name: 'nuke',
    description: 'Deletes all loaded messages in the channel',
    category: '🎯 - Moderation',
    aliases: ['clearall'],
    run: async (client, message, args) => {
        const guildLang = db[message.guild.id]["language"]

        if(message.member.permissions.has("MANAGE_MESSAGES")) {
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
                    message.channel.messages.fetch().then((results) => {
                        message.channel.bulkDelete(results).catch(error => {
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
                        });
                        message.channel.send('👍');
                    })
                }
            }
        }
    }
}