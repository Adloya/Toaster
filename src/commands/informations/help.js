const Discord = require('discord.js');
const db = require("../../db.json");
const default_embeds_color = "#90c53f";

module.exports.help = {
    name: 'help',
    description: "Affiche la liste des commandes OU Affiche des informations sur une commande spécifique",
    category: 'informations'
}
module.exports.run = (client, message) => {
    const args = message.content.slice(db[message.guild.id]["prefix"].length).trim().split(' ')
    const cmd = args[1];
    let p = db[message.guild.id]["prefix"];
    helpemb = new Discord.MessageEmbed()
        .setColor(default_embeds_color)
        .setAuthor("MultiJS", "http://adloteam.42web.io/adloteam/MultiJS/MULTI.png")
        .setDescription("Afficher la liste des commandes disponibles / Afficher des informations sur une commande spécifique")
        .setFooter("MultiJS - Created by Adloya")
        .setTimestamp();

        if(cmd === "clear"){
            helpemb.setTitle("Ban")
            helpemb.addFields(
                {name: "Catégorie :", value: "💼 | Administration"},
                {name: "Description :", value: "Configure le bot"},
                {name: "Utilisation :", value: `\`\`${p}config [paramètre]\`\``},
                {name: "Permission :", value: "\`\`ADMINISTRATOR\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "ban"){
            helpemb.setTitle("Ban")
            helpemb.addFields(
                {name: "Catégorie :", value: "🎯 | Moderation"},
                {name: "Description :", value: "Bannit un membre"},
                {name: "Utilisation :", value: `\`\`${p}ban [Membre] [Raison?]\`\``},
                {name: "Permission :", value: "\`\`BAN_MEMBERS\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "clear"){
            helpemb.setTitle("Clear")
            helpemb.addFields(
                {name: "Catégorie :", value: "🎯 | Moderation"},
                {name: "Description :", value: "Supprime un certain nombre de messages"},
                {name: "Utilisation :", value: `\`\`${p}clear [nombre de messages à supprimer]\`\``},
                {name: "Permission :", value: "\`\`MANAGE_MESSAGES\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "nuke"){
            helpemb.setTitle("Nuke")
            helpemb.addFields(
                {name: "Catégorie :", value: "🎯 | Moderation"},
                {name: "Description :", value: "Supprime tous les messages chargés dans le salon"},
                {name: "Utilisation :", value: `\`\`${p}nuke\`\``},
                {name: "Permission :", value: "\`\`MANAGE_MESSAGES\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "say"){
            helpemb.setTitle("Say")
            helpemb.addFields(
                {name: "Catégorie :", value: "🎯 | Moderation"},
                {name: "Description :", value: "Fait parler le bot"},
                {name: "Utilisation :", value: `\`\`${p}say [Message]\`\``},
                {name: "Permission :", value: "\`\`MANAGE_MESSAGES\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "warn"){
            helpemb.setTitle("Warn")
            helpemb.addFields(
                {name: "Catégorie :", value: "🎯 | Moderation"},
                {name: "Description :", value: "Avertit un membre (Au bout de 3 avertissements, un ban)"},
                {name: "Utilisation :", value: `\`\`${p}warn [Membre]\`\``},
                {name: "Permission :", value: "\`\`BAN_MEMBERS\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "help"){
            helpemb.setTitle("Help")
            helpemb.addFields(
                {name: "Catégorie :", value: "🪧 | Informations"},
                {name: "Description :", value: "Affiche la liste des commandes / Affiche des informations sur une commande spécifique"},
                {name: "Utilisation :", value: `\`\`${p}help [Commande] OU ${p}help\`\``},
                {name: "Permission :", value: "\`\`Aucune\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "links"){
            helpemb.setTitle("Links")
            helpemb.addFields(
                {name: "Catégorie :", value: "🪧 | Informations"},
                {name: "Description :", value: "Affiche les liens utiles du bot"},
                {name: "Utilisation :", value: `\`\`${p}links\`\``},
                {name: "Permission :", value: "\`\`Aucune\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "members"){
            helpemb.setTitle("Members")
            helpemb.addFields(
                {name: "Catégorie :", value: "🪧 | Informations"},
                {name: "Description :", value: "Affiche le nombre de membres du serveur"},
                {name: "Utilisation :", value: `\`\`${p}members\`\``},
                {name: "Permission :", value: "\`\`Aucune\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "ping"){
            helpemb.setTitle("Ping")
            helpemb.addFields(
                {name: "Catégorie :", value: "⚙️ | Tools"},
                {name: "Description :", value: "Affiche le délai entre vous et discord.js"},
                {name: "Utilisation :", value: `\`\`${p}ping\`\``},
                {name: "Permission :", value: "\`\`Aucune\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "serverinfo"){
            helpemb.setTitle("Serverinfo")
            helpemb.addFields(
                {name: "Catégorie :", value: "🪧 | Informations"},
                {name: "Description :", value: "Affiche les informations du serveur"},
                {name: "Utilisation :", value: `\`\`${p}serverinfo\`\``},
                {name: "Permission :", value: "\`\`Aucune\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "botinfo"){
            helpemb.setTitle("botinfo")
            helpemb.addFields(
                {name: "Catégorie :", value: "🪧 | Informations"},
                {name: "Description :", value: "Affiche les informations du bot"},
                {name: "Utilisation :", value: `\`\`${p}botinfo\`\``},
                {name: "Permission :", value: "\`\`Aucune\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "userinfo"){
            helpemb.setTitle("Userinfo")
            helpemb.addFields(
                {name: "Catégorie :", value: "🪧 | Informations"},
                {name: "Description :", value: "Affiche les informations sur un utilisateur OU vos informations"},
                {name: "Utilisation :", value: `\`\`${p}userinfo [membre] OU ${p}userinfo\`\``},
                {name: "Permission :", value: "\`\`Aucune\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "meme"){
            helpemb.setTitle("Meme")
            helpemb.addFields(
                {name: "Catégorie :", value: "🎉 | Fun"},
                {name: "Description :", value: "Vous donne le sourire avec un joli petit meme !"},
                {name: "Utilisation :", value: `\`\`${p}meme\`\``},
                {name: "Permission :", value: "\`\`Aucune\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "poll"){
            helpemb.setTitle("Poll")
            helpemb.addFields(
                {name: "Catégorie :", value: "🎯 | Modération"},
                {name: "Description :", value: "Crée un sondage"},
                {name: "Utilisation :", value: `\`\`${p}poll [question]\`\``},
                {name: "Permission :", value: "\`\`MANAGE_MESSAGES\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "snake"){
            helpemb.setTitle("Snake")
            helpemb.addFields(
                {name: "Catégorie :", value: "🎉 | Fun"},
                {name: "Description :", value: "Vous pouvez jouer à snake !"},
                {name: "Utilisation :", value: `\`\`${p}snake\`\``},
                {name: "Permission :", value: "\`\`Aucune\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "hangman"){
            helpemb.setTitle("Hangman")
            helpemb.addFields(
                {name: "Catégorie :", value: "🎉 | Fun"},
                {name: "Description :", value: "Jouer au pendu. Sur discord. Avec un bot. *De plus en plus bizarre*"},
                {name: "Utilisation :", value: `\`\`${p}hangman [salon] [mot à deviner]\`\``},
                {name: "Permission :", value: "Pour définir le mot à deviner : \`\`MANAGE_MESSAGES\`\`, Pour répondre : \`\`Aucune\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "tictactoe"){
            helpemb.setTitle("TicTacToe")
            helpemb.addFields(
                {name: "Catégorie :", value: "🎉 | Fun"},
                {name: "Description :", value: "Le morpion !"},
                {name: "Utilisation :", value: `\`\`${p}tictactoe [Votre adversaire]\`\``},
                {name: "Permission :", value: "\`\`Aucune\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "math"){
            helpemb.setTitle("Maths")
            helpemb.addFields(
                {name: "Catégorie :", value: "⚙️ | Tools"},
                {name: "Description :", value: "Une calculatrice simplifiée"},
                {name: "Utilisation :", value: `\`\`${p}math [calcul]\`\``},
                {name: "Permission :", value: "\`\`Aucune\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "bug-report"){
            helpemb.setTitle("bug-report")
            helpemb.addFields(
                {name: "Catégorie :", value: "⚙️ | Tools"},
                {name: "Description :", value: "Permet de signaler un bug au créateur du bug"},
                {name: "Utilisation :", value: `\`\`${p}bug-report [Décrivez le bug le plus précisément possible]\`\``},
                {name: "Permission :", value: "\`\`Aucune\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "suggest"){
            helpemb.setTitle("suggest")
            helpemb.addFields(
                {name: "Catégorie :", value: "⚙️ | Tools"},
                {name: "Description :", value: "Permet de suggérer une fonctionnalité"},
                {name: "Utilisation :", value: `\`\`${p}suggest [Suggestion]\`\``},
                {name: "Permission :", value: "\`\`Aucune\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "dog" || cmd === "cat"){
            helpemb.setTitle("Cat / Dog")
            helpemb.addFields(
                {name: "Catégorie :", value: "🎉️ | Fun"},
                {name: "Description :", value: "Une photo de chat / chien"},
                {name: "Utilisation :", value: `\`\`${p}cat / ${p}dog\`\``},
                {name: "Permission :", value: "\`\`Aucune\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(cmd === "kick"){
            helpemb.setTitle("Kick")
            helpemb.addFields(
                {name: "Catégorie :", value: "🎯 | Modération"},
                {name: "Description :", value: "Expulse un membre"},
                {name: "Utilisation :", value: `\`\`${p}kick [membre] [raison?]\`\``},
                {name: "Permission :", value: "\`\`KICK_MEMBERS\`\`"}
            )
            message.channel.send(helpemb)
        }
        else if(!cmd){
            helpemb.setTitle("Liste des commandes")
            helpemb.addFields(
                // {name: "🧑‍💻 | Développeur", value: `\`\`${p}reload\`\``},
                {name: "💼 | Administration", value: `\`\`${p}config\`\``},
                {name: "🎯 | Modération", value: `\`\`${p}ban\`\`, \`\`${p}kick\`\`, \`\`${p}clear\`\`, \`\`${p}nuke\`\`, \`\`${p}say\`\`, \`\`${p}warn\`\`, \`\`${p}poll\`\``},
                {name: "⚙️ | Outils", value: `\`\`${p}ping\`\`,  \`\`${p}math\`\`, \`\`${p}bug-report\`\`, \`\`${p}suggest\`\``},
                {name: "🎉 | Fun", value: `\`\`${p}meme\`\`, \`\`${p}snake\`\`, \`\`${p}hangman\`\`,\`\`${p}tictactoe\`\`,\`\`${p}cat\`\`,\`\`${p}dog\`\``},
                {name: "🪧 | Informations", value: `\`\`${p}help\`\`, \`\`${p}links\`\`, \`\`${p}members\`\`,\`\`${p}serverinfo\`\`, \`\`${p}userinfo\`\``}
            )
            message.channel.send(helpemb)
        }
}