const Discord = require('discord.js');
const db = require("../../db.json");
const default_embeds_color = "#90c53f";


module.exports.help = {
    name: 'botinfo',
    description: 'Affiche les informations du bot',
    category: 'informations'
}
module.exports.run = (client, message, args) => {
    // pas fini
    let totalservers = client.guilds.cache.size;
    const botinfo_embed = new Discord.MessageEmbed()
        .setColor(default_embeds_color)
        .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
        .setFooter("Toaster - Created by Adloya")
        .setTimestamp()
        .setTitle("🪧 | Informations sur Toaster")
        .addFields(
            {name: "Mémoire", value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`, inline: true},
            {name: "Uptime", value: `${Math.floor(client.uptime / 1000 / 60).toString()} minutes`, inline: true},
            {name: `\u200b`, value: `\u200b`},
            {name: "Serveurs", value: `${client.guilds.cache.size.toString()} serveurs`, inline: true},
            {name: "Salons", value: `${client.channels.cache.size.toString()} salons`, inline: true},
            {name: "Utilisateurs", value: `${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)}`, inline: true},
            {name: `\u200b`, value: `\u200b`},
            {name: "Version de Discord.js", value: "discord.js@12.5.3", inline: true},
            {name: "Liens utiles", value: `faites \`\`` + db[message.guild.id]["prefix"] + "links``", inline: true}
        )
        message.channel.send(botinfo_embed);
}