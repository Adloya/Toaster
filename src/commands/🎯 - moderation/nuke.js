const Discord = require('discord.js');
const emojis = require("../../lists/emojis.json")


error_color = "#fc1c03"

const error_embed = new Discord.MessageEmbed()
    .setColor(`${error_color}`)
    .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
    .setTitle(`${emojis["no"]} | Erreur !`)
    .setFooter("Toaster - Created by Adloya")
    .setTimestamp();

module.exports = {
    name: 'nuke',
    description: 'Efface tous les messages chargés',
    category: '🎯 | moderation',
    run: async (client, message, args) => {
        if(message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results).catch(error => {
                    error_embed.addFields(
                        {
                            name: "Une erreur est survenue :",
                            value: "Une erreur m'empêche de nuker ce salon, il s'agit sûrement de la limitation de discord (https://support.discord.com/hc/en-us/community/posts/360040900231-Allow-bots-to-bulk-delete-messages-over-two-weeks-old)"
                        },
                        {
                            name: "Un moyen de contrepasser cette limitation :",
                            value: "Cliquez droit sur ce salon, et dupliquez le, puis supprimez l'ancien."
                        },
                        {
                            name: "Erreur :",
                            value: `\`\`${error}\`\``
                        }
                    );
                    message.channel.send(error_embed);
                    error_embed.fields = [];
                });
                message.channel.send('Salon purgé !');
            })
        }
    }
}