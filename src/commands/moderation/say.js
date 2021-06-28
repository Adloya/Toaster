const Discord = require('discord.js');
const emojis = require("../../emojis.json");


error_color = "#fc1c03"

const error_embed = new Discord.MessageEmbed();
error_embed.setColor(`${error_color}`);
error_embed.setAuthor("MultiJS", "http://adloteam.42web.io/adloteam/MultiJS/MULTI.png");
error_embed.setTitle(`${emojis["no"]} | Erreur !`)
error_embed.setFooter("MultiJS - Created by Adloya");
error_embed.setTimestamp();

module.exports.help = {
    name: 'say',
    description: 'Fait parler le bot',
    category: 'moderation'
}
module.exports.run = (client, message, args) => {
    if(message.member.hasPermission("MANAGE_MESSAGES")){
        let sendMessage = message.content.substring(6);
        if(!sendMessage){
            error_embed.addFields(
                { name: "Une erreur est survenue :", value: "Vous n'avez pas spécifié de message a envoyer" }
            )
            message.channel.send(error_embed);
            error_embed.spliceFields();
            return;
        }

        message.channel.bulkDelete(1);
        message.channel.send(sendMessage);
    }
    else{
        error_embed.addFields(
            { name: "Une erreur est survenue :", value: "Vous n'avez pas les permissions requises pour effectuer cette action" }
        );
        message.channel.send(error_embed);
        error_embed.spliceFields();
    }
}