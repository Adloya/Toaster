const Discord = require('discord.js');
const default_embeds_color = "#90c53f";
const emojis = require("../../lists/emojis.json")


error_color = "#fc1c03"

const error_embed = new Discord.MessageEmbed()
    .setColor(`${error_color}`)
    .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
    .setTitle(`${emojis["no"]} | Erreur !`)
    .setFooter("Toaster - Created by Adloya")
    .setTimestamp();

module.exports = {
    name: 'ban',
    description: 'Bannit un membre',
    category: '🎯 | moderation',
    run: (client, message, args) =>{
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
                    .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
                    .setDescription("Bannissement d'un membre")
                    .setFooter("Toaster - Created by Adloya")
                    .setTitle(`${emojis["yes"]} | Membre banni !`)
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
}