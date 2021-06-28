const Discord = require('discord.js');
const db = require("../../db.json");
const emojis = require("../../emojis.json");
const fs = require('fs');

const default_embeds_color = "#90c53f";
error_color = "#fc1c03"

const error_embed = new Discord.MessageEmbed();
error_embed.setColor(`${error_color}`);
error_embed.setAuthor("MultiJS", "http://adloteam.42web.io/adloteam/MultiJS/MULTI.png");
error_embed.setTitle(`${emojis["no"]} | Erreur !`);
error_embed.setFooter("MultiJS - Created by Adloya");
error_embed.setTimestamp();

function SaveDBs() { // Fonction pour sauvegarder la base de données
    fs.writeFile("./db.json", JSON.stringify(db, null, 4), (err) => {
        if (err) {
            error_embed.addFields(
                {name: `Une erreur est survenue : `, value: `${err}`}
            )
            message.channel.send(error_embed);
            error_embed.fields = [];
        }
    });
}

module.exports.help = {
    name: 'config',
    description: 'Change la configuration du bot sur votre serveur',
    category: 'administration'
}
module.exports.run = async (client, message, args) => {
    if(message.member.hasPermission("ADMINISTRATOR")) {
        let arg = message.content.trim().split(/ +/g)
        console.log(arg)
        if(!arg[1]){
            error_embed.addFields(
                { name: 'Une erreur est survenue : ', value: 'Vous devez indiquer une section à configurer' }
            );
            message.channel.send(error_embed);
            error_embed.fields = [];
        }
        else if(arg[1] == "prefix"){
            if(!arg[2]){
                error_embed.addFields(
                    { name: 'Une erreur est survenue : ', value: 'Vous devez indiquer un prefix' }
                );
                message.channel.send(error_embed);
                error_embed.fields = [];
            }
            else{
                db[message.guild.id]["prefix"] = arg[2];
                SaveDBs();
                const prefix_embed = new Discord.MessageEmbed();
                prefix_embed.setColor(`${default_embeds_color}`);
                prefix_embed.setAuthor("MultiJS", "http://adloteam.42web.io/adloteam/MultiJS/MULTI.png");
                prefix_embed.setDescription("Changement du préfix");
                prefix_embed.setFooter("MultiJS - Created by Adloya");
                prefix_embed.setTitle(`${emojis["yes"]} | Préfixe changé !`);
                prefix_embed.setTimestamp();
                prefix_embed.addFields(
                    { name: 'Le prefix suivant a bien été sauvegardé: ', value: '``' + arg[2] + '``'}
                );
                message.channel.send(prefix_embed)
                await message.react("✅");
            }
        }
    }
}