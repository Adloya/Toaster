const Discord = require('discord.js');
const default_embeds_color = "#90c53f";


module.exports = {
    name: 'suggest',
    description: "With this command you can suggest a functionnality to the bot owner (@Adloya#1873)",
    category: '🛠️ | tools',    run: async(client, message, args) => {
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