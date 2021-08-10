const Discord = require('discord.js');
const colors = require('../../lists/colors.json');
const default_embeds_color = colors["default_embed"];
const math = require('mathjs')
const db = require("../../db.json");
const language = require("../../lists/language.json");



module.exports = {
    name: 'math',
    description: 'Solving your calculation',
    category: '🛠️ - Utilities',
    run: async (client, message, args) => {
        const guildLang = db[message.guild.id]["language"]
        if(!args[1]){
            message.channel.send(language[guildLang]["MissingArg"])
            return
        }
        try {
            math_embed = new Discord.MessageEmbed()
                .addField(`${language[guildLang]["Calculation"]} :`, args.join(" "))
                .addField(`${language[guildLang]["Answer"]} : `, `${math.evaluate(args.join(" "))}`)
                .setColor(`${default_embeds_color}`)
                .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
                .setDescription(`${language[guildLang]["ResolveTitle"]}`)
                .setFooter("Toaster - Created by Adloya")
                .setTitle(`🔢 | ${language[guildLang]["Calculation"]}`)
                .setTimestamp()
            message.channel.send({embeds : [math_embed]});
        }catch (err){
            message.channel.send(`Verrify your arguments and retry (${err})`)
        }
    }
}