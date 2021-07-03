const Discord = require('discord.js');
const default_embeds_color = "#90c53f";
const moment = require('moment');


module.exports = {
    name: 'userinfo',
    description: 'Affiche les informations sur un membre',
    category: '📜 | informations',
    run: async (client, message, args) => {
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else {
            user = message.author;
        }
        const member = message.guild.member(user);
        const roles = member.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(role => role.toString())
            .slice(0, -1);
        const usrinfo_embed = new Discord.MessageEmbed()
            .setColor(default_embeds_color)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setFooter("Toaster - Created by Adloya")
            .setTimestamp()
            .setThumbnail(user.avatarURL)
            .setTitle(`🙍/🙎‍♀️ | Informations sur ${user.username}#${user.discriminator} :`)
            .addField('ID du compte :', `${user.id}`, true)
            .addField('Pseudo sur ce serveur : ', `${member.nickname ? member.nickname : 'Aucun'}`, true)
            .addField('A créé son compte le : ', `${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`, true)
            .addField('A rejoint ce serveur le : ', `${moment.utc(member.joinedAt).format('dddd, MMMM, Do YYYY, HH:mm:ss')}`, true)
            .addField('Status : ', `${member.user.presence.status}`, true)
            .addField('Statut : ', `${user.presence.game ? user.presence.game.name : 'Aucun'}`, true)
            .addField("Rôles :", `${roles.length}: ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : "None"}`)
        
        message.channel.send(usrinfo_embed);
    }
}