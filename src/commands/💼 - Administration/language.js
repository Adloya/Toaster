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
    name: 'language',
    description: 'Changes the bot\'s language on your server',
    category: '💼 - Administration',
    aliases: ['lang'],
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
                    { name: `${language[guildLang]["ErrorBasic"]}`, value: 'Specify the language' }
                );
                message.channel.send(error_embed);
                error_embed.fields = [];
            }else{
                if(arg[1] === "English"){
                    db[message.guild.id]["language"] = "English"
                    SaveDBs();
                }
                else if(arg[1] === "French"){
                    db[message.guild.id]["language"] = "French"
                    SaveDBs();
                }
                // else if(arg[1] === "Polish"){
                //     db[message.guild.id]["language"] = "Polish"
                //     SaveDBs();
                // }
                // else if(arg[1] === "Italian"){
                //     db[message.guild.id]["language"] = "Italian"
                //     SaveDBs();
                // }
                // else if(arg[1] === "Spanish"){
                //     db[message.guild.id]["language"] = "Spanish"
                //     SaveDBs();
                // }
                // else if(arg[1] === "Romanian"){
                //     db[message.guild.id]["language"] = "Romanian"
                //     SaveDBs();
                // }
                
                else if(arg[1] === "list"){
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
                        { name: `${language[guildLang]["ErrorBasic"]}`, value: `${language[guildLang]["LangDoesntExist1"]}` + '``language list``' + `${language[guildLang]["LangDoesntExist1.2"]}` }
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
                    lang_embed.setTitle(`📜 | Language :`);
                    lang_embed.setTimestamp();
                    lang_embed.addFields(
                        {name: `${language[guildLang]["LanguageHasBeenSet"]} `, value: db[message.guild.id]["language"]}
                    )
                    message.channel.send(lang_embed);
                    lang_embed.fields = [];
            }
        }
    }
}