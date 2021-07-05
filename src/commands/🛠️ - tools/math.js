const Discord = require('discord.js');
const colors = require('../../lists/colors.json');
const default_embeds_color = colors["default_embed"];
const math = require('mathjs')
const db = require("../../db.json");
const language = require("../../lists/language.json");



module.exports = {
    name: 'math',
    description: 'Solving your calculation',
    category: '🛠️ | tools',
    run: async (client, message, args) => {
        const guildLang = db[message.guild.id]["language"]
        try {
            math_embed = new Discord.MessageEmbed()
                .addFields(
                    {name: `${language[guildLang]["Calculation"]} :`, value: args.join(" ")},
                    {name: `${language[guildLang]["Answer"]} :`, value: math.evaluate(args.join(" "))}
                )
                .setColor(`${default_embeds_color}`)
                .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
                .setDescription(`${language[guildLang]["ResolveTitle"]}`)
                .setFooter("Toaster - Created by Adloya")
                .setTitle(`🔢 | ${language[guildLang]["Calculation"]}`)
                .setTimestamp()
            message.channel.send(math_embed);
        }catch (err){
            message.channel.send(`${language[guildLang]["InvalidArg"]}`)
        }
    }
}