const Discord = require('discord.js');
const owner_id = "381360415646416896"
const child = require('child_process');

// [1] Activer / [0] désactiver la commande
const enabled = "0";

const owner_only_embed = new Discord.MessageEmbed()
    .setColor(`${error_color}`)
    .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
    .setTitle(" <:No:850422336007831562> | Réservé au développeur du bot !")
    .setFooter("Toaster - Created by Adloya")
    .setTimestamp()
    .addField("Seul le développeur du bot peut éxécuter cette commande", "Eh oui !");

module.exports = {
    name: 'cmd',
    description: 'cmd',
    category: '🧑‍💻 | developer',
    run: async (client, message, args) => {
        if(message.author.id === owner_id && enabled === "1") {
            const command = args.join(" ");
            if(!command) return message.reply("Spécifiez une commande à éxécuter");
            child.exec(command, (err, res) => {
                if (err) return console.log(err);
                valuef = res.slice(0, 2000)
                if (!res.slice(0, 2000)) {
                    valuef = "Shell : Ok"
                }
                message.channel.send(valuef, { code: "js"})
            })
        }else{
            if(message.author.id !== owner_id) {
                message.channel.send(owner_only_embed);
                return;
            }else{
                if(enabled === "0"){
                    console.log("La commande développeur 'cmd' est désactivée !")
                    return;
                }else{
                    console.log("Une erreur inconnue est survenue dans la commande développeur 'cmd'")
                    return;
                }
            }
        }

    }
}