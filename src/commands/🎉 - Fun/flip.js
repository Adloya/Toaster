const Discord = require('discord.js');
const colors = require('../../lists/colors.json');
const default_embeds_color = colors["default_embed"];

const db = require("../../db.json");
const language = require("../../lists/language.json");


module.exports = {
    name: 'flip',
    description: 'Flips a coin',
    category: '🎉 - Fun',
    run: async(client, message) => {
        const guildLang = db[message.guild.id]["language"]

        const choices = ["Heads", "Tails"]
        let flipped = choices[Math.floor(Math.random() * choices.length)]
        console.log(flipped)

        if(flipped === "Heads"){
            flippedtxt = `${language[guildLang]["Heads"]}`
        }else{
            if(flipped === "Tails"){
                flippedtxt = `${language[guildLang]["Tails"]}`
            }else{
                if(flipped !== "Tails" && flipped !== "Heads"){
                    console.log("Euh? W h a t ?")
                }
            }
        }


        const flip_embed = new Discord.MessageEmbed()
            .setColor(`${default_embeds_color}`)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setFooter("Toaster - Created by Adloya")
            .setTitle(language[guildLang]["FlipCoinTitle"])
            .setTimestamp()
            .addFields(
                {name: "\u200b", value: flippedtxt}
            );

        if(flipped === "Heads"){
            flip_embed.setThumbnail('https://cdn.discordapp.com/attachments/871427749816971284/871427993623482428/heads.png')
        }else{
            if(flipped === "Tails"){
                flip_embed.setThumbnail('https://cdn.discordapp.com/attachments/871427749816971284/871427995804528670/tails.png')
            }
        }

            message.channel.send(flip_embed)
    }
}