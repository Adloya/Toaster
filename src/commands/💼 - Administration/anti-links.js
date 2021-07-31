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
    name: 'anti-links',
    description: 'Enables / Disables the anti-links system on your server',
    category: '💼 - Administration',
    aliases: ['anti-link', 'antilink', 'antilinks'],
    usage: '[on/off/status]',
    
    run: async(client, message, args) => {
        let arg = message.content.trim().split(/ +/g)

        const guildLang = db[message.guild.id]["language"]
        
        const error_embed = new Discord.MessageEmbed();
        error_embed.setColor(`${error_color}`);
        error_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
        error_embed.setTitle(`${emojis["no"]} | ${language[guildLang]["Error"]}`);
        error_embed.setFooter("Toaster - Created by Adloya");
        error_embed.setTimestamp();


        if(message.member.hasPermission("ADMINISTRATOR")) {

            if(!arg[1]){
                error_embed.addFields(
                    { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["SpecifyConfig3"]}` }
                );
                message.channel.send(error_embed);
                error_embed.fields = [];
                return;
            }else{
                if(arg[1] === "on"){
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
                if(arg[1] === "off"){
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
                if(arg[1] === "status"){
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
                if(arg[1] != "on" && arg[1] != "off" && arg[1] != "status"){
                    error_embed.addFields(
                        { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["InvalidArgument"]} (on / off / status)` }
                    );
                    message.channel.send(error_embed);
                    error_embed.fields = [];
                    return;
                }
            }
        }
    }
}