const Discord = require('discord.js');
const db = require("../../db.json");
const default_embeds_color = "#90c53f";
const emojis = require("../../lists/emojis.json")



error_color = "#fc1c03"

const error_embed = new Discord.MessageEmbed();
error_embed.setColor(`${error_color}`);
error_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
error_embed.setTitle(`${emojis["no"]} | Erreur !`)
error_embed.setFooter("Toaster - Created by Adloya");
error_embed.setTimestamp();


module.exports.help = {
    name: 'clear',
    description: 'Efface un nombre donné de messages',
    category: 'moderation'
}
module.exports.run = (client, message, args) => {
    if(message.member.hasPermission('MANAGE_MESSAGES')){
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
             error_embed.addFields(
                { name: "Une erreur est survenue :", value: "Vous n'avez pas les permissions requises pour éxécuter cette commande" }
            )
            message.channel.send(error_embed);
            error_embed.spliceFields();
            return;
        }else{
            if (!args[0]) {
                error_embed.addFields(
                    { name: "Une erreur est survenue :", value: "Veuillez spécifier un nombre de messages à supprimer" }
                )
                message.channel.send(error_embed);
                error_embed.spliceFields();
                return; 
            }else{
                if (isNaN(args[0])) {
                    error_embed.addFields(
                        { name: "Une erreur est survenue :", value: "Le nombre de messages spécifié est invalide" }
                    )
                    message.channel.send(error_embed);
                    error_embed.spliceFields();
                    return;
                }else{
                
                if (parseInt(args[0]) <= 0 || parseInt(args[0]) >= 99) {
                    error_embed.addFields(
                        { name: "Une erreur est survenue :", value: "Le nombre de messages à supprimer doit être compris entre 1 et 99. (pour effacer + faites ``" + db[message.guild.id]["prefix"] + "nuke``)" }
                    )
                    message.channel.send(error_embed);
                    error_embed.spliceFields();
                    return;
                }else{
                    message.channel.bulkDelete(parseInt(args[0]) + 1).catch(error => {
                        error_embed.addFields(
                            {
                                name: "Une erreur est survenue :",
                                value: "Une erreur m'empêche de supprimer certains messages de ce salon, il s'agit sûrement de la limitation de discord (https://support.discord.com/hc/en-us/community/posts/360040900231-Allow-bots-to-bulk-delete-messages-over-two-weeks-old)"
                            },
                            {
                                name: "Un moyen de contrepasser cette limitation :",
                                value: "Supprimer manuellement les messages"
                            },
                            {
                                name: "Erreur :",
                                value: `\`\`${error}\`\``
                            }
                        );
                        message.channel.send(error_embed);
                        error_embed.fields = [];
                        return;
                    })

                    const clear_embed = new Discord.MessageEmbed();
                    
                    clear_embed.setColor(`${default_embeds_color}`);
                    clear_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
                    clear_embed.setDescription("Supprime un nombre donné de messages");
                    clear_embed.setTitle(`${emojis["yes"]} | Messages supprimés !`);
                    clear_embed.setFooter("Toaster - Created by Adloya");
                    clear_embed.setTimestamp();
                    clear_embed.addFields(
                        { name: "Vous avez supprimé :", value: ` ${args[0]} message(s)` },
                        { name: "Ce message disparaitera dans : ", value: `5 secondes`}
                    );

                    message.channel.send(clear_embed).then(msg => {
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