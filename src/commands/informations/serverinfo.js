const Discord = require('discord.js');
const db = require("../../db.json");
const default_embeds_color = "#90c53f";

module.exports.help = {
    name: 'serverinfo',
    description: 'Affiche les informations sur le serveur',
    category: 'informations'
}
module.exports.run = (client, message, args) => {
    let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
    let totalmembers = message.guild.members.cache.size;
    let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;
    // let totalrole = message.guild.roles.cache.get('').members.map(member => member.user.tag).length;
    const stats_embed = new Discord.MessageEmbed();
    stats_embed.setColor(`${default_embeds_color}`);
    stats_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
    stats_embed.setDescription("Afficher les informations du serveur / Show the server's Informations");
    stats_embed.setFooter("Toaster - Created by Adloya");
    stats_embed.setTitle("Statistiques");
    stats_embed.setTimestamp();
    
    stats_embed.addFields(
        { name: 'Membres en ligne : ', value: onlines },
        { name: 'Membres en total : ', value: totalmembers },
        { name: 'Bots en total : ', value: totalbots },
    );
    message.channel.send(stats_embed);
    if(db[message.guild.id]["is-testing-server"]) {
        message.channel.send("This is an official Toaster server")
    }
}
