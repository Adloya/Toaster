const Discord = require('discord.js');
const owner_id = "381360415646416896";
const db = require("../../db.json");
const language = require("../../lists/language.json");
const emojis = require("../../lists/emojis.json")


// [1] Activer / [0] désactiver la commande
const enabled = "1";

module.exports = {
    name: 'eval',
    description: 'eval',
    category: '🧑‍💻 | developer',
    run: async (client, message, args) => {
        const guildLang = db[message.guild.id]["language"]

        const owner_only_embed = new Discord.MessageEmbed()
            .setColor(`${error_color}`)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setTitle(` <:No:850422336007831562> | ${language[guildLang]["ReservedForBDev"]}`)
            .setFooter("Toaster - Created by Adloya")
            .setTimestamp()
            .addField(`${language[guildLang]["ReservedForBDev"]}`, ";)");
            
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
}