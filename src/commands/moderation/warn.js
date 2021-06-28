const Discord = require('discord.js');
const db = require("../../db.json");
const default_embeds_color = "#90c53f";
const fs = require('fs');
const emojis = require("../../emojis.json");

error_color = "#fc1c03"

const error_embed = new Discord.MessageEmbed();
error_embed.setColor(`${error_color}`);
error_embed.setAuthor("MultiJS", "http://adloteam.42web.io/adloteam/MultiJS/MULTI.png");
error_embed.setTitle(`${emojis["no"]} | Erreur !`)
error_embed.setFooter("MultiJS - Created by Adloya");
error_embed.setTimestamp();

module.exports.help = {
    name: 'warn',
    description: 'Warn un membre du serveur.',
    category: 'moderation'
}
module.exports.run = (client, message, args) => {
    function SaveDBs() { // Fonction pour sauvegarder la base de données
        fs.writeFile("../db.json", JSON.stringify(db, null, 4), (err) => {
            if (err) {
                error_embed.addFields(
                    {name: "Une erreur est survenue :", value: "Erreur inconnue."}
                )
                message.channel.send(error_embed);
                error_embed.spliceFields();
                return;
            }
        });
    }
    if(message.member.hasPermission("BAN_MEMBERS")) {
        if(!message.mentions.users.first()) return;
        user = message.mentions.users.first().id;
        const warn_embed = new Discord.MessageEmbed();
        warn_embed.setColor(`${default_embeds_color}`);
        warn_embed.setAuthor("MultiJS", "http://adloteam.42web.io/adloteam/MultiJS/MULTI.png");
        warn_embed.setDescription("Avertit un utilisateur");
        warn_embed.setTitle(`${emojis["yes"]} | Membre averti !`);
        warn_embed.setFooter("MultiJS - Created by Adloya");
        warn_embed.setTimestamp();

        warn_embed.addFields(
        { name: user + 'a reçu un avertissement, il en a maintenant :', value: db[message.guild.id]["warn"][user] },
    );
        const finalwarn_embed = new Discord.MessageEmbed();
        finalwarn_embed.setColor(`${default_embeds_color}`);
        finalwarn_embed.setAuthor("MultiJS", "http://adloteam.42web.io/adloteam/MultiJS/MULTI.png");
        finalwarn_embed.setDescription("Le warn de trop.... :/");
        finalwarn_embed.setTitle(`${emojis["yes"]} | Membre averti !`);
        finalwarn_embed.setFooter("MultiJS - Created by Adloya");
        finalwarn_embed.setTimestamp();

        finalwarn_embed.addFields(
        { name: user + `${user} a été warn une fois de trop.`, value: "Il a été banni." },
    );
        if(db[message.guild.id]['warn'][user] == 2){
            db[message.guild.id]["warn"][user] = "0";
            message.channel.send(finalwarn_embed);
            message.guild.members.ban(user);
        }
        else {
            if(!db[message.guild.id]["warn"][user]){
                db[message.guild.id]["warn"][user] = 1;
                SaveDBs();
                message.channel.send(warn_embed);
            }
            else{
                db[message.guild.id]["warn"][user]++;
                SaveDBs();
                message.channel.send(warn_embed);
            }
        
        }
    }
    SaveDBs();
}