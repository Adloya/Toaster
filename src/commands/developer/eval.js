const Discord = require('discord.js');
const owner_id = "381360415646416896";
const db = require("../../db.json");

// [1] Activer / [0] désactiver la commande
const enabled = "0";

const owner_only_embed = new Discord.MessageEmbed()
    .setColor(`${error_color}`)
    .setAuthor("MultiJS", "http://adloteam.42web.io/adloteam/MultiJS/MULTI.png")
    .setTitle(" <:No:850422336007831562> | Réservé au développeur du bot !")
    .setFooter("MultiJS - Created by Adloya")
    .setTimestamp()
    .addField("Seul le développeur du bot peut éxécuter cette commande", "Eh oui !");

module.exports.help = {
    name: 'eval',
    description: 'eval',
    category: 'developer'
}
module.exports.run = (client, message, args) => {
    if(message.author.id === owner_id && enabled === "1"){
        // const {member, channel, content} = message;

        const result = eval(args.join(" "));
        if(result === ""){
            message.channel.send("Veuillez spécifier du code")
        }else{
            console.log(result);
            message.channel.send("```javascript\n" + result + "```")
        }
    }else{
        if(message.author.id !== owner_id) {
            message.channel.send(owner_only_embed);
            return;
        }else{
            if(enabled === "0"){
                console.log("La commande développeur 'eval' est désactivée !")
                return;
            }else{
                console.log("Une erreur inconnue est survenue dans la commande développeur 'eval'")
                return;
            }
        }
    }
}