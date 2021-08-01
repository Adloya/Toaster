const Discord = require('discord.js');
const owner_id = "381360415646416896";
const db = require("../../db.json");
const language = require("../../lists/language.json");

module.exports = {
    name: 'reload',
    description: 'reload',
    category: '🧑‍💻 - Developer',
    run: async (client, message, args) => {
        const guildLang = db[message.guild.id]["language"]

        const owner_only_embed = new Discord.MessageEmbed()
            .setColor(`${error_color}`)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setTitle(` <:No:850422336007831562> | ${language[guildLang]["ReservedForBDev"]}`)
            .setFooter("Toaster - Created by Adloya")
            .setTimestamp()
            .addField(`${language[guildLang]["ReservedForBDev"]}`, ";)");
            
        if(message.author.id === owner_id){
            message.channel.send("``OK.``")
            await message.react("👍");
            process.exit();
        }else{
            message.channel.send(owner_only_embed);
            return;
        }
    }
}