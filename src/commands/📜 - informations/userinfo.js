const Discord = require('discord.js');
const default_embeds_color = "#90c53f";
const moment = require('moment');
const db = require("../../db.json");
const language = require("../../lists/language.json");


module.exports = {
    name: 'userinfo',
    description: 'Shows informations about a member',
    category: '📜 | informations',
    run: async (client, message, args) => {
        const guildLang = db[message.guild.id]["language"]

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
            .setTitle(`🙍/🙎‍♀️ | ${language[guildLang]["InfoOn"]} ${user.username}#${user.discriminator} :`)
            .addField('ID :', `${user.id}`, true)
            .addField(`${language[guildLang]["UsrnameOnServer"]} :`, `${member.nickname ? member.nickname : 'Aucun'}`, true)
            .addField(`${language[guildLang]["AccountCreatedAt"]} :`, `${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} : ${moment(member.user.createdTimestamp).fromNow()}`, true)
            .addField(`${language[guildLang]["ServerJoinedAt"]}`, `${moment.utc(member.joinedAt).format('dddd, MMMM, Do YYYY, HH:mm:ss')}`, true)
            .addField(`${language[guildLang]["Status"]}`, `${member.user.presence.status}`, true)
            .addField(`${language[guildLang]["Statut"]}`, `${user.presence.game ? user.presence.game.name : 'Aucun'}`, true)
            .addField(`${language[guildLang]["Roles"]}`, `${roles.length}: ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : "None"}`)
        
        message.channel.send(usrinfo_embed);
    }
}