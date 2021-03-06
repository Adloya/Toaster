const Discord = require('discord.js');
const colors = require('../../lists/colors.json');
const default_embeds_color = colors["default_embed"];
const db = require("../../db.json");
const language = require("../../lists/language.json");
const emojis = require("../../lists/emojis.json");


const error_embed = new Discord.MessageEmbed()
    .setColor(`${error_color}`)
    .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
    .setTitle(`${emojis["no"]} | Erreur !`)
    .setFooter("Toaster - Created by Adloya")
    .setTimestamp();


module.exports = {
    name: 'slowmode',
    description: 'Sets the slow mode at a certain value',
    category: '🎯 - Moderation',
    aliases: ['slow', "slow-mode"],
    usage: "[Duration]",
    run: async (client, message, args) => {
    const guildLang = db[message.guild.id]["language"]
    if (!message.member.permissions.has('MANAGE_CHANNELS')) {
        error_embed.addField(`${language[guildLang]["ErrorBasic"]}`, `${language[guildLang]["MissingPermission"]} (MANAGE_MESSAGES)`);
        message.channel.send({embeds : [error_embed]});
        error_embed.fields = [];
        return;
        }else{
            if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) {
                error_embed.addField(`${language[guildLang]["ErrorBasic"]}`, `${language[guildLang]["BotMissingPermission"]} (MANAGE_MESSAGES)`)
                message.channel.send({embeds : [error_embed]});
                error_embed.fields = [];
                return;
            }else{
                // console.log("OK.")

                let duration = args[0];

                if(!args[0] || !duration){
                    error_embed.addFields(
                        {
                            name: `${language[guildLang]["ErrorBasic"]}`,
                            value: `${language[guildLang]["MissingArg"]}`
                        }
                    );
                    message.channel.send({embeds : [error_embed]});
                    error_embed.fields = [];
                    return;
                }else{
                    if(isNaN(duration)){
                        error_embed.addFields(
                            {
                                name: `${language[guildLang]["ErrorBasic"]}`,
                                value: `${language[guildLang]["SmDurationNotSpecified"]}`
                            }
                        );
                        message.channel.send({embeds : [error_embed]});
                        error_embed.fields = [];
                        return;
                    }else{
                        if(duration === "0" || duration === "off"){
                            duration = 0
                            durationtxt = language[guildLang]["Disabled"]
                        }else{
                            durationtxt = `${duration}s`
                        }
                        message.channel.setRateLimitPerUser(duration);
                        const slow_embed = new Discord.MessageEmbed()
                            .setColor(`${default_embeds_color}`)
                            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
                            .setDescription(`${language[guildLang]["SlowmodeDesc"]}`)
                            .setFooter("Toaster - Created by Adloya")
                            .setTitle("😴 | Slowmode !")
                            .setTimestamp()
                            .addField(`${language[guildLang]["Slowmode1"]}`, `${durationtxt}`);
                            message.channel.send({embeds : [slow_embed]});
                        }
                }
            }
        }
    }
}