const Discord = require('discord.js');
const default_embeds_color = "#90c53f";

error_color = "#fc1c03"

const error_embed = new Discord.MessageEmbed()
    .setColor(`${error_color}`)
    .setAuthor("MultiJS", "http://adloteam.42web.io/adloteam/MultiJS/MULTI.png")
    .setTitle(" <:No:850422336007831562> | Erreur !")
    .setFooter("MultiJS - Created by Adloya")
    .setTimestamp();

module.exports.help = {
    name: 'ban',
    description: 'Bannit un membre',
    category: 'moderation'
}
module.exports.run = (client, message, args) =>{
    if(message.member.hasPermission("BAN_MEMBERS")) {
        let arg = message.content.trim().split(/ +/g);

        user = message.mentions.members.first();
        if (arg[2]) {
            reason = arg[2];
        } else {
            reason = "Aucune raison donnée"
        }
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            error_embed.addFields(
                {
                    name: "Une erreur est survenue :",
                    value: "Je n'ai pas les permissions requises pour effectuer cette action"
                }
            );
            message.channel.send(error_embed);
            error_embed.fields = [];
        }

        if (!user) {
            error_embed.addFields(
                {
                    name: "Une erreur est survenue :",
                    value: "Utilisateur non trouvé / Vous n'avez pas mentionné d'utilisateur"
                }
            );
            message.channel.send(error_embed);
            error_embed.fields = [];
        } else {
            message.guild.members.ban(user.id);
            const ban_embed = new Discord.MessageEmbed()
                .setColor(`${default_embeds_color}`)
                .setAuthor("MultiJS", "http://adloteam.42web.io/adloteam/MultiJS/MULTI.png")
                .setDescription("Bannissement d'un membre")
                .setFooter("MultiJS - Created by Adloya")
                .setTitle("Ban")
                .setTimestamp()
                .addFields(
                    {name: 'L\'utilisateur suivant a été banni : ', value: user}
                );
            message.channel.send(ban_embed)
        }
    }
        else{
            error_embed.addFields(
                { name: "Une erreur est survenue :", value: "Vous n'avez pas les permissions requises pour effectuer cette action" }
            );
            message.channel.send(error_embed);
            error_embed.fields = [];
        }
}