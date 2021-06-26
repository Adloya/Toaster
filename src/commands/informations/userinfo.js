const Discord = require('discord.js');
const default_embeds_color = "#90c53f";
const moment = require('moment');


module.exports.help = {
    name: 'userinfo',
    description: 'Affiche les informations sur un membre',
    category: 'informations'
}
module.exports.run = (client, message, args) => {
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    const member = message.guild.member(user);
    const usrinfo_embed = new Discord.MessageEmbed()
        .setColor(default_embeds_color)
        .setAuthor("MultiJS", "http://adloteam.42web.io/adloteam/MultiJS/MULTI.png")
        .setFooter("MultiJS - Created by Adloya")
        .setTimestamp()
        .setThumbnail(user.avatarURL)
        .setTitle(`🙍/🙎‍♀️ | Informations sur ${user.username}#${user.discriminator} :`)
        .addField('ID du compte :', `${user.id}`, true)
        .addField('Pseudo sur ce serveur : ', `${member.nickname ? member.nickname : 'Aucun'}`, true)
        .addField('[NON FONCTIONNEL] A créé son compte le : ', `${moment.utc(member.createdAt).format('dddd, MMMM, Do YYYY, HH:mm:ss')}`, true)
        .addField('A rejoint ce serveur le : ', `${moment.utc(member.joinedAt).format('dddd, MMMM, Do YYYY, HH:mm:ss')}`, true)
        .addField('Status : ', `${user.presence.status}`, true)
        .addField('Statut : ', `${user.presence.game ? user.presence.game.name : 'Aucun'}`, true)
        .addField('Roles : ', member.roles.cache.map(roles => `${roles.name}`).join(', '), true);
    message.channel.send(usrinfo_embed);
}