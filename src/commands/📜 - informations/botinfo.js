const Discord = require('discord.js');
const db = require("../../db.json");
const default_embeds_color = "#90c53f";
const language = require("../../lists/language.json");


module.exports = {
    name: 'botinfo',
    description: 'Shows the bot\'s informations',
    category: '📜 | informations',
    run: async (client, message, args) => {
        const guildLang = db[message.guild.id]["language"]

        let totalservers = client.guilds.cache.size;
        const botinfo_embed = new Discord.MessageEmbed()
        .setColor(default_embeds_color)
        .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
        .setFooter("Toaster - Created by Adloya")
        .setTimestamp()
        .setTitle("🪧 | Toaster - Informations")
        .addFields(
                {name: `${language[guildLang]["MemUsed"]}`, value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`, inline: true},
                {name: "Uptime", value: `${Math.floor(client.uptime / 1000 / 60).toString()} minutes`, inline: true},
                {name: `\u200b`, value: `\u200b`},
                {name: `${language[guildLang]["Servers"]}`, value: `${client.guilds.cache.size.toString()} serveurs`, inline: true},
                {name: `${language[guildLang]["Channels"]}`, value: `${client.channels.cache.size.toString()} salons`, inline: true},
                {name: `${language[guildLang]["Users"]}`, value: `${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)}`, inline: true},
                {name: `\u200b`, value: `\u200b`},
                {name: "Discord.js", value: "discord.js@12.5.3", inline: true},
                {name: `${language[guildLang]["UsefulLinks"]}`, value: `\`\`` + db[message.guild.id]["prefix"] + "links``", inline: true}
            )
            message.channel.send(botinfo_embed);
    }
}