const Discord = require('discord.js');
const db = require("../../db.json");
const emojis = require("../../lists/emojis.json")
const fs = require('fs');

const default_embeds_color = "#90c53f";
error_color = "#fc1c03"

const error_embed = new Discord.MessageEmbed();
error_embed.setColor(`${error_color}`);
error_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
error_embed.setTitle(`${emojis["no"]} | Erreur !`);
error_embed.setFooter("Toaster - Created by Adloya");
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

module.exports = {
    name: 'config',
    description: 'Change la configuration du bot sur votre serveur',
    category: '💼 | administration',
    run: async(client, message, args) => {
        if(message.member.hasPermission("ADMINISTRATOR")) {
            let arg = message.content.trim().split(/ +/g)
            console.log(arg)
            if(!arg[1]){
                error_embed.addFields(
                    { name: 'Une erreur est survenue : ', value: 'Vous devez indiquer une section à configurer (faites ``config list`` pour avoir la liste des sections)' }
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
                    prefix_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
                    prefix_embed.setDescription("Changement du préfix");
                    prefix_embed.setFooter("Toaster - Created by Adloya");
                    prefix_embed.setTitle(`${emojis["yes"]} | Préfixe changé !`);
                    prefix_embed.setTimestamp();
                    prefix_embed.addFields(
                        { name: 'Le prefix suivant a bien été sauvegardé: ', value: '``' + arg[2] + '``'}
                    );
                    message.channel.send(prefix_embed)
                    await message.react("✅");
                    prefix_embed.fields = [];
                }
            }
            else if(arg[1] == "anti-link"){
                if(!arg[2]){
                    error_embed.addFields(
                        { name: 'Une erreur est survenue : ', value: 'Précisez si vous voulez activer l\'anti-link, le désactiver ou voir son état (off / on / status)' }
                    );
                    message.channel.send(error_embed);
                    error_embed.fields = [];
                }else{
                    if(arg[2] === "on"){
                            db[message.guild.id]["anti-link"] = "on";
                            SaveDBs();
                            const antilinks_embed = new Discord.MessageEmbed();
                            antilinks_embed.setColor(`${default_embeds_color}`);
                            antilinks_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
                            antilinks_embed.setDescription("Activation de l'anti-lien");
                            antilinks_embed.setFooter("Toaster - Created by Adloya");
                            antilinks_embed.setTitle(`${emojis["yes"]} | Activé !`);
                            antilinks_embed.setTimestamp();
                            antilinks_embed.addFields(
                                { name: 'Status de l\'anti-lien : ', value: '``Activé``'}
                            );
                            message.channel.send(antilinks_embed)
                            await message.react("✅");
                            antilinks_embed.fields = [];
                    }
                    if(arg[2] === "off"){
                            db[message.guild.id]["anti-link"] = "off";
                            SaveDBs();
                            const antilinks_embed = new Discord.MessageEmbed();
                            antilinks_embed.setColor(`${default_embeds_color}`);
                            antilinks_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
                            antilinks_embed.setDescription("Désactivation de l'anti-lien");
                            antilinks_embed.setFooter("Toaster - Created by Adloya");
                            antilinks_embed.setTitle(`${emojis["no"]} | Désactivé !`);
                            antilinks_embed.setTimestamp();
                            antilinks_embed.addFields(
                                { name: 'Status de l\'anti-lien : ', value: '``Désactivé``'}
                            );
                            message.channel.send(antilinks_embed)
                            await message.react("✅");
                            antilinks_embed.fields = [];
                    }
                    if(arg[2] === "status"){
                        if(db[message.guild.id]["anti-link"] === "off") {
                            const antilinks_embed = new Discord.MessageEmbed();
                            antilinks_embed.setColor(`${default_embeds_color}`);
                            antilinks_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
                            antilinks_embed.setDescription("Status de l'anti-lien");
                            antilinks_embed.setFooter("Toaster - Created by Adloya");
                            antilinks_embed.setTitle(`${emojis["no"]} | Désactivé !`);
                            antilinks_embed.setTimestamp();
                            antilinks_embed.addFields(
                                { name: 'Status de l\'anti-lien : ', value: '``Désactivé``'}
                            );
                            message.channel.send(antilinks_embed)
                            antilinks_embed.fields = [];
                        }
                        if(db[message.guild.id]["anti-link"] === "on"){
                            const antilinks_embed = new Discord.MessageEmbed();
                            antilinks_embed.setColor(`${default_embeds_color}`);
                            antilinks_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
                            antilinks_embed.setDescription("Status de l'anti-lien");
                            antilinks_embed.setFooter("Toaster - Created by Adloya");
                            antilinks_embed.setTitle(`${emojis["yes"]} | Activé !`);
                            antilinks_embed.setTimestamp();
                            antilinks_embed.addFields(
                                { name: 'Status de l\'anti-lien : ', value: '``Activé``'}
                            );
                            message.channel.send(antilinks_embed)
                            antilinks_embed.fields = [];
                        }
                    }
                    if(arg[2] != "on" && arg[2] != "off" && arg[2] != "status"){
                        error_embed.addFields(
                            { name: 'Une erreur est survenue : ', value: 'Argument invalide (on / off / status)' }
                        );
                        message.channel.send(error_embed);
                        error_embed.fields = [];
                    }
                }
            }
            // else if(arg[1] == "anti-join"){
            //     if(!arg[2]){
            //         error_embed.addFields(
            //             { name: 'Une erreur est survenue : ', value: 'Précisez si vous voulez activer l\'anti-join, le désactiver ou voir son état (off / on / status)' }
            //         );
            //         message.channel.send(error_embed);
            //         error_embed.fields = [];
            //     }else{
            //         if(arg[2] === "on"){
            //             db[message.guild.id]["anti-join"] = "on"
            //             SaveDBs();
            //             const antijoin_embed = new Discord.MessageEmbed();
            //             antijoin_embed.setColor(`${default_embeds_color}`);
            //             antijoin_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
            //             antijoin_embed.setDescription("Activation de l'anti-join");
            //             antijoin_embed.setFooter("Toaster - Created by Adloya");
            //             antijoin_embed.setTitle(`${emojis["yes"]} | Activé !`);
            //             antijoin_embed.setTimestamp();
            //             antijoin_embed.addFields(
            //                 { name: 'Status de l\'anti-join : ', value: '``Activé``'}
            //             );
            //             message.channel.send(antijoin_embed)
            //             antijoin_embed.fields = [];                
            //         }
            //         if(arg[2] === "off"){
            //             db[message.guild.id]["anti-join"] = "off"
            //             SaveDBs();
            //             const antijoin_embed = new Discord.MessageEmbed();
            //             antijoin_embed.setColor(`${default_embeds_color}`);
            //             antijoin_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
            //             antijoin_embed.setDescription("Désactivation de l'anti-join");
            //             antijoin_embed.setFooter("Toaster - Created by Adloya");
            //             antijoin_embed.setTitle(`${emojis["no"]} | Désactivé !`);
            //             antijoin_embed.setTimestamp();
            //             antijoin_embed.addFields(
            //                 { name: 'Status de l\'anti-join : ', value: '``Désactivé``'}
            //             );
            //             message.channel.send(antijoin_embed)
            //             antijoin_embed.fields = [];  
            //         }
            //         if(arg[2] === "status"){
            //             if(db[message.guild.id]["anti-join"] === "on"){
            //                 const antijoin_embed = new Discord.MessageEmbed();
            //                 antijoin_embed.setColor(`${default_embeds_color}`);
            //                 antijoin_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
            //                 antijoin_embed.setDescription("Status de l'anti-join");
            //                 antijoin_embed.setFooter("Toaster - Created by Adloya");
            //                 antijoin_embed.setTitle(`${emojis["yes"]} | Activé !`);
            //                 antijoin_embed.setTimestamp();
            //                 antijoin_embed.addFields(
            //                     { name: 'Status de l\'anti-join : ', value: '``Activé``'}
            //                 );
            //                 message.channel.send(antijoin_embed)
            //                 antijoin_embed.fields = [];
            //             }
            //             if(db[message.guild.id]["anti-join"] === "off"){
            //                 const antijoin_embed = new Discord.MessageEmbed();
            //                 antijoin_embed.setColor(`${default_embeds_color}`);
            //                 antijoin_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
            //                 antijoin_embed.setDescription("Status de l'anti-join");
            //                 antijoin_embed.setFooter("Toaster - Created by Adloya");
            //                 antijoin_embed.setTitle(`${emojis["no"]} | Désactivé !`);
            //                 antijoin_embed.setTimestamp();
            //                 antijoin_embed.addFields(
            //                     { name: 'Status de l\'anti-join : ', value: '``Désavtivé``'}
            //                 );
            //                 message.channel.send(antijoin_embed)
            //                 antijoin_embed.fields = [];
            //             }
            //         }
            //     }
            //     SaveDBs();
            // }
            else if(arg[1] == "list"){
                const configlist_embed = new Discord.MessageEmbed();
                configlist_embed.setColor(`${default_embeds_color}`);
                configlist_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
                configlist_embed.setDescription("Liste des sections à configurer");
                configlist_embed.setFooter("Toaster - Created by Adloya");
                configlist_embed.setTitle(`📜 | Liste des sections à configurer :`);
                configlist_embed.setTimestamp();
                configlist_embed.addFields(
                    { name: 'prefix', value: 'Change le préfixe du serveur (``' + db[message.guild.id]["prefix"] + "config prefix [nouveau préfixe]``)"},
                    { name: 'anti-link', value: 'Active/Désactive l\'anti-lien du bot sur ce serveur (``' + db[message.guild.id]["prefix"] + "config anti-link [on/off/status]``)"},
                    { name: 'list', value: 'Donne la liste des sections à configurer (``' + db[message.guild.id]["prefix"] + "config list``)"}
                );
                message.channel.send(configlist_embed);
                antilinks_embed.fields = [];
            }
            else if(arg[1] == "language"){
                if(!arg[2]){
                    error_embed.addFields(
                        { name: 'Une erreur est survenue : ', value: 'Précisez la langue' }
                    );
                    message.channel.send(error_embed);
                    error_embed.fields = [];
                }else{
                    if(arg[2] === "English"){
                        db[message.guild.id]["language"] = "English"
                        SaveDBs();
                        console.log(db[message.guild.id]["language"])
                    }
                    if(arg[2] === "French"){
                        db[message.guild.id]["language"] = "French"
                        SaveDBs();
                        console.log(db[message.guild.id]["language"])
                    }
                    if(arg[2] === "Polish"){
                        db[message.guild.id]["language"] = "Polish"
                        SaveDBs();
                        console.log(db[message.guild.id]["language"])
                    }
                    if(arg[2] === "Italian"){
                        db[message.guild.id]["language"] = "Italian"
                        SaveDBs();
                        console.log(db[message.guild.id]["language"])
                    }
                    if(arg[2] === "Spanish"){
                        db[message.guild.id]["language"] = "Spanish"
                        SaveDBs();
                        console.log(db[message.guild.id]["language"])
                    }
                    if(arg[2] === "Romanian"){
                        db[message.guild.id]["language"] = "Romanian"
                        SaveDBs();
                        console.log(db[message.guild.id]["language"])
                    }
                    if(arg[2] === "CanadianFR"){
                        db[message.guild.id]["language"] = "CanadianFR"
                        SaveDBs();
                        console.log(db[message.guild.id]["language"])
                    }
                    const lang_embed = new Discord.MessageEmbed();
                    lang_embed.setColor(`${default_embeds_color}`);
                    lang_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
                    lang_embed.setDescription("Language");
                    lang_embed.setFooter("Toaster - Created by Adloya");
                    lang_embed.setTitle(`📜 | Changement de la langue :`);
                    lang_embed.setTimestamp();
                    lang_embed.addFields(
                        {name: "Language has been set to : ", value: db[message.guild.id]["language"]}
                    )
                    message.channel.send(lang_embed);
                    lang_embed.fields = [];
                }
            }
            else{
                error_embed.addFields(
                    { name: 'Une erreur est survenue : ', value: 'Cette section n\'existe pas. (faites ``config list`` pour avoir la liste des sections)' }
                );
                message.channel.send(error_embed);
                error_embed.fields = [];
            }
        }
    }
}