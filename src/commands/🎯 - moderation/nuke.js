const Discord = require('discord.js');
const emojis = require("../../lists/emojis.json")
const colors = require('../../lists/colors.json');
const error_color = colors["error_embed"];


const error_embed = new Discord.MessageEmbed()
    .setColor(`${error_color}`)
    .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
    .setTitle(`${emojis["no"]} | Erreur !`)
    .setFooter("Toaster - Created by Adloya")
    .setTimestamp();

module.exports = {
    name: 'nuke',
    description: 'Delete all loaded messages in the channel',
    category: '🎯 | moderation',
    aliases: ['clearall'],
    run: async (client, message, args) => {
        if(message.member.hasPermission("MANAGE_MESSAGES")) {
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
                    message.channel.send(error_embed);
                    error_embed.fields = [];
                    return;
                });
                message.channel.send('Salon purgé !');
            })
        }
    }
}