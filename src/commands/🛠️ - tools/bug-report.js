const Discord = require('discord.js');
const colors = require('../../lists/colors.json');
const default_embeds_color = colors["default_embed"];
const error_color = colors["error_embed"];
const db = require("../../db.json");
const language = require("../../lists/language.json");


module.exports = {
    name: 'bug-report',
    description: "Report a bug to the bot owner (@Adloya#1873)",
    category: '🛠️ | tools',
    aliases: ['bug', 'report-bug'],
    run: async(client, message, args) => {
        const guildLang = db[message.guild.id]["language"]

        const destinationChannel = "860538535203438592"

        const query = args.join(" ");
        if(!query) return message.reply(`${language[guildLang]["SpecifyBug"]}`);

        const reportEmbed = new Discord.MessageEmbed()
            .setColor(`${default_embeds_color}`)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setDescription(`${language[guildLang]["ReportBug"]}`)
            .setFooter("Toaster - Created by Adloya")
            .setTitle(`❗ | ${language[guildLang]["ReportBug"]}`)
            .setTimestamp()
            .addFields(
                {name: 'User : ', value: message.author.toString(), inline: true},
                {name: 'Server : ', value: message.guild.name, inline: true},
                {name: 'Bug : ', value: query, inline: true}
            );
        client.channels.cache.get(destinationChannel).send(reportEmbed);
        message.channel.send(`${language[guildLang]["ReportSent"]}`);
        message.channel.send(reportEmbed);
    }
}