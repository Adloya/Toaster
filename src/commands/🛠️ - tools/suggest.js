const Discord = require('discord.js');
const colors = require('../../lists/colors.json');
const default_embeds_color = colors["default_embed"];
const error_color = colors["error_embed"];
const db = require("../../db.json");
const language = require("../../lists/language.json");


module.exports = {
    name: 'suggest',
    description: "With this command you can suggest a functionnality to the bot owner (@Adloya#1873)",
    category: '🛠️ | tools',    
    run: async(client, message, args) => {
        const guildLang = db[message.guild.id]["language"]

        const destinationChannel = "860538535203438592"

        const query = args.join(" ");
        if(!query) return message.reply(`${language[guildLang]["SpecifySuggestion"]}`);

        const sgEmbed = new Discord.MessageEmbed()
            .setColor(`${default_embeds_color}`)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setDescription(`${language[guildLang]["SuggestDesc"]}`)
            .setFooter("Toaster - Created by Adloya")
            .setTitle(`❗ | ${language[guildLang]["SuggestSimple"]}`)
            .setTimestamp()
            .addFields(
                {name: 'User : ', value: message.author.toString(), inline: true},
                {name: 'Server ', value: message.guild.name, inline: true},
                {name: 'Suggestion : ', value: query, inline: true}
            );
        client.channels.cache.get(destinationChannel).send(sgEmbed);
        message.channel.send(`${language[guildLang]["SuggestionSent"]}`);
        message.channel.send(sgEmbed);
    }
}