const Discord = require('discord.js');
const db = require("../../db.json");
const emojis = require("../../lists/emojis.json")
const fs = require('fs');
const language = require("../../lists/language.json");


const colors = require('../../lists/colors.json');
const default_embeds_color = colors["default_embed"];
const error_color = colors["error_embed"];


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
    description: 'Changes the bot\'s configuration on your server',
    category: '💼 | administration',
    run: async(client, message, args) => {
        const guildLang = db[message.guild.id]["language"]
        
        const error_embed = new Discord.MessageEmbed();
        error_embed.setColor(`${error_color}`);
        error_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
        error_embed.setTitle(`${emojis["no"]} | ${language[guildLang]["Error"]} !`);
        error_embed.setFooter("Toaster - Created by Adloya");
        error_embed.setTimestamp();


        if(message.member.hasPermission("ADMINISTRATOR")) {
            let arg = message.content.trim().split(/ +/g)
            if(!arg[1]){
                error_embed.addFields(
                    { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["SpecifyConfig1"]}` + ` \`\`config list\`\` ` + `${language[guildLang]["SpecifyConfig1.2"]}` }
                );
                message.channel.send(error_embed);
                error_embed.fields = [];
                return;
            }
            else if(arg[1] == "prefix"){
                if(!arg[2]){
                    error_embed.addFields(
                        { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["SpecifyConfig2"]}` }
                    );
                    message.channel.send(error_embed);
                    error_embed.fields = [];
                    return;
                }
                else{
                    db[message.guild.id]["prefix"] = arg[2];
                    SaveDBs();
                    const prefix_embed = new Discord.MessageEmbed();
                    prefix_embed.setColor(`${default_embeds_color}`);
                    prefix_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
                    prefix_embed.setDescription(`${language[guildLang]["ChangePrefixTitle"]}`);
                    prefix_embed.setFooter("Toaster - Created by Adloya");
                    prefix_embed.setTitle(`${emojis["yes"]} | ${language[guildLang]["PrefixUpdatedTitle"]}`);
                    prefix_embed.setTimestamp();
                    prefix_embed.addFields(
                        { name: `${language[guildLang]["PrefixUpdatedSuccess"]}`, value: '``' + arg[2] + '``'}
                    );
                    message.channel.send(prefix_embed)
                    await message.react("✅");
                    prefix_embed.fields = [];
                }
            }
            else if(arg[1] == "anti-link"){
                if(!arg[2]){
                    error_embed.addFields(
                        { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["SpecifyConfig3"]}` }
                    );
                    message.channel.send(error_embed);
                    error_embed.fields = [];
                    return;
                }else{
                    if(arg[2] === "on"){
                            db[message.guild.id]["anti-link"] = "on";
                            SaveDBs();
                            const antilinks_embed = new Discord.MessageEmbed();
                            antilinks_embed.setColor(`${default_embeds_color}`);
                            antilinks_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
                            antilinks_embed.setDescription(`${language[guildLang]["ActivatingAntiLink"]}`);
                            antilinks_embed.setFooter("Toaster - Created by Adloya");
                            antilinks_embed.setTitle(`${emojis["yes"]} | ${language[guildLang]["Activated"]} !`);
                            antilinks_embed.setTimestamp();
                            antilinks_embed.addFields(
                                { name: `${language[guildLang]["AntiLinkStatus"]}`, value: `${language[guildLang]["Activated"]}`}
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
                            antilinks_embed.setDescription(`${language[guildLang]["DisablingAntiLink"]}`);
                            antilinks_embed.setFooter("Toaster - Created by Adloya");
                            antilinks_embed.setTitle(`${emojis["no"]} | ${language[guildLang]["Disabled"]} !`);
                            antilinks_embed.setTimestamp();
                            antilinks_embed.addFields(
                                { name: `${language[guildLang]["AntiLinkStatus"]}`, value: `${language[guildLang]["Disabled"]}`}
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
                            antilinks_embed.setDescription(`${language[guildLang]["AntiLinkStatus"]}`);
                            antilinks_embed.setFooter("Toaster - Created by Adloya");
                            antilinks_embed.setTitle(`${emojis["no"]} | ${language[guildLang]["Disabled"]} !`);
                            antilinks_embed.setTimestamp();
                            antilinks_embed.addFields(
                                { name: `${language[guildLang]["AntiLinkStatus"]}`, value: `${language[guildLang]["Disabled"]}`}
                            );
                            message.channel.send(antilinks_embed)
                            antilinks_embed.fields = [];
                        }
                        if(db[message.guild.id]["anti-link"] === "on"){
                            const antilinks_embed = new Discord.MessageEmbed();
                            antilinks_embed.setColor(`${default_embeds_color}`);
                            antilinks_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
                            antilinks_embed.setDescription(`${language[guildLang]["AntiLinkStatus"]}`);
                            antilinks_embed.setFooter("Toaster - Created by Adloya");
                            antilinks_embed.setTitle(`${emojis["yes"]} | ${language[guildLang]["Activated"]} !`);
                            antilinks_embed.setTimestamp();
                            antilinks_embed.addFields(
                                { name: `${language[guildLang]["AntiLinkStatus"]}`, value: `${language[guildLang]["Activated"]}`}
                            );
                            message.channel.send(antilinks_embed)
                            antilinks_embed.fields = [];
                        }
                    }
                    if(arg[2] != "on" && arg[2] != "off" && arg[2] != "status"){
                        error_embed.addFields(
                            { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["InvalidArgument"]} (on / off / status)` }
                        );
                        message.channel.send(error_embed);
                        error_embed.fields = [];
                        return;
                    }
                }
            }
            // else if(arg[1] == "anti-join"){
            //     if(!arg[2]){
            //         error_embed.addFields(
            //             { name: `${language[guildLang]["ErrorBasic"]}`, value: 'Précisez si vous voulez activer l\'anti-join, le désactiver ou voir son état (off / on / status)' }
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
                configlist_embed.setDescription(`${language[guildLang]["ListSettings"]}`);
                configlist_embed.setFooter("Toaster - Created by Adloya");
                configlist_embed.setTitle(`📜 | ${language[guildLang]["ListSettings"]} :`);
                configlist_embed.setTimestamp();
                configlist_embed.addFields(
                    { name: 'prefix', value: `Changes the server prefix (\`\`` + db[message.guild.id]["prefix"] + "config prefix [new préfix]``)"},
                    { name: 'anti-link', value: 'Enables/Disables the Anti-Link plugin (``' + db[message.guild.id]["prefix"] + "config anti-link [on/off/status]``)"},
                    { name: 'language', value: 'Changes the language (``' + db[message.guild.id]["prefix"] + "config language [language]``)"},
                    { name: 'list', value: 'Gives a list of all settings you can change (``' + db[message.guild.id]["prefix"] + "config list``)"}
                );
                message.channel.send(configlist_embed);
                configlist_embed.fields = [];
            }
            else if(arg[1] == "language"){
                if(!arg[2]){
                    error_embed.addFields(
                        { name: `${language[guildLang]["ErrorBasic"]}`, value: 'Specify the language' }
                    );
                    message.channel.send(error_embed);
                    error_embed.fields = [];
                }else{
                    if(arg[2] === "English"){
                        db[message.guild.id]["language"] = "English"
                        SaveDBs();
                    }
                    else if(arg[2] === "French"){
                        db[message.guild.id]["language"] = "French"
                        SaveDBs();
                    }
                    // if(arg[2] === "Polish"){
                    //     db[message.guild.id]["language"] = "Polish"
                    //     SaveDBs();
                    // }
                    // if(arg[2] === "Italian"){
                    //     db[message.guild.id]["language"] = "Italian"
                    //     SaveDBs();
                    // }
                    // if(arg[2] === "Spanish"){
                    //     db[message.guild.id]["language"] = "Spanish"
                    //     SaveDBs();
                    // }
                    // if(arg[2] === "Romanian"){
                    //     db[message.guild.id]["language"] = "Romanian"
                    //     SaveDBs();
                    // }
                    else if(arg[2] === "list"){
                        const lang_embed = new Discord.MessageEmbed();
                        lang_embed.setColor(`${default_embeds_color}`);
                        lang_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
                        lang_embed.setDescription(`${language[guildLang]["ListSettings"]}`);
                        lang_embed.setFooter("Toaster - Created by Adloya");
                        lang_embed.setTitle(`📜 | ${language[guildLang]["ListSettings"]} :`);
                        lang_embed.setTimestamp();
                        lang_embed.addFields(
                            { name: 'French', value: `FRANCE FRENCH`},
                            { name: 'English', value: 'US/UK ENGLISH' },
                        );
                        message.channel.send(lang_embed);
                        lang_embed.fields = [];
                        return;
                    }
                    else{
                        error_embed.addFields(
                            { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["LangDoesntExist1"]}` + '``config language list``' + `${language[guildLang]["LangDoesntExist1.2"]}` }
                        );
                        message.channel.send(error_embed);
                        error_embed.fields = [];
                        return;
                    }
                    const lang_embed = new Discord.MessageEmbed();
                    lang_embed.setColor(`${default_embeds_color}`);
                    lang_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
                    lang_embed.setDescription("Language");
                    lang_embed.setFooter("Toaster - Created by Adloya");
                    lang_embed.setTitle(`📜 | Changement de la langue :`);
                    lang_embed.setTimestamp();
                    lang_embed.addFields(
                        {name: `${language[guildLang]["LanguageHasBeenSet"]} `, value: db[message.guild.id]["language"]}
                    )
                    message.channel.send(lang_embed);
                    lang_embed.fields = [];
                }
            }
            else{
                error_embed.addFields(
                    { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["OptionDoesntExist1"]}` + '``config list``' + `${language[guildLang]["OptionDoesntExist1.2"]}` }
                );
                message.channel.send(error_embed);
                error_embed.fields = [];
                return;
            }
        }
    }
}