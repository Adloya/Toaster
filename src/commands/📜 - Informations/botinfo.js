const Discord = require('discord.js');
const db = require("../../db.json");
const colors = require('../../lists/colors.json');
const default_embeds_color = colors["default_embed"];
const language = require("../../lists/language.json");
const packagejson = require("../../package.json")


module.exports = {
    name: 'botinfo',
    description: 'Shows the bot\'s informations',
    category: '📜 - Informations',
    aliases: ['toasterinfo', 'bi'],
    run: async (client, message, args) => {
        const guildLang = db[message.guild.id]["language"]

        let totalservers = client.guilds.cache.size;
        const botinfo_embed = new Discord.MessageEmbed()
        .setColor(default_embeds_color)
        .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
        .setFooter("Toaster - Created by Adloya")
        .setTimestamp()
        .setTitle("🪧 | Toaster - Informations")

        .addField('System', [
            `> ⚡ | __${language[guildLang]["MemUsed"]}__ : **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB**`,
            `> ⏱️ | __Uptime__ : **${Math.floor(client.uptime / 1000 / 60).toString()} minutes**`
        ])
        .addField('Stats', [
            `> 🗃️ | __${language[guildLang]["Servers"]}__ : **${client.guilds.cache.size.toString()}**`,
            `> 📇 | __${language[guildLang]["Channels"]}__ : **${client.channels.cache.size.toString()}**`,
            `> 👨‍👦 | __${language[guildLang]["Users"]}__ : **${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)}**`
        ])
        .addField('Other', [
            `> 📡 | __Discord.js__ : **${packagejson.dependencies['discord.js']}**`,
            `> 🤖 | __Toaster__ : **${packagejson.version}**`
        ])
            message.channel.send(botinfo_embed);
    }
}