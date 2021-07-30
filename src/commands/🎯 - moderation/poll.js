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
    name: 'poll',
    description: 'Create a poll',
    category: '🎯 | moderation',
    aliases: ['sondage'],
    run: async (client, message, args) => {
    const guildLang = db[message.guild.id]["language"]

        if (!message.guild.me.hasPermission("ADD_REACTIONS")) {
            error_embed.addFields(
                {
                    name: `${language[guildLang]["ErrorBasic"]}`,
                    value: `${language[guildLang]["BotMissingPermission"]} (ADD_REACTIONS)`
                }
            );
            message.channel.send(error_embed);
            error_embed.fields = [];
        }else{
            if(args.join(" ") === " " || args.join(" ") === "" || args.join(" ") === " ") {
                error_embed.addFields(
                    {
                        name: `${language[guildLang]["ErrorBasic"]}`,
                        value: `${language[guildLang]["PollNotSpecified"]}`
                    }
                );
                message.channel.send(error_embed);
                error_embed.fields = [];
            }else{
                embed = new Discord.MessageEmbed();
                embed.setColor(`${default_embeds_color}`);
                embed.setAuthor(`${language[guildLang]["PollBy"]}` + message.author.username, message.author.displayAvatarURL());
                embed.setTitle(`${language[guildLang]["Poll"]}`);
                embed.setFooter("Toaster - Created by Adloya");
                embed.setTimestamp();
                embed.setDescription(args.join(" "))
                embed.addField(`${language[guildLang]["RespondToThePoll"]}`,
                    `
                    🟢 - Yes / Oui
                    🟠 - Don't know / Ne sais pas
                    🔵 - Neutral / Neutre
                    🔴 - No / Non
                    `
                )
                const poll = await message.channel.send(embed);
                await poll.react("🟢");
                await poll.react("🟠");
                await poll.react("🔵");
                await poll.react("🔴");
            }
        }
    }
}