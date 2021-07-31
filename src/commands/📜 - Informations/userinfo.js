const Discord = require('discord.js');
const colors = require('../../lists/colors.json');
const default_embeds_color = colors["default_embed"];
const error_color = colors["error_embed"];
const moment = require('moment');
const db = require("../../db.json");
const language = require("../../lists/language.json");


module.exports = {
    name: 'userinfo',
    description: 'Shows informations about a member',
    category: '📜 - Informations',
    aliases: ['ui', 'mi', 'memberinfo'],
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
            .setTitle(`👨‍👦 | ${language[guildLang]["InfoOn"]} ${user.username}#${user.discriminator} :`)

            .addField('Identity', [
                `> 🆔 | __ID__ : **${user.id}**`,
                `> 🏷️ | __${language[guildLang]["UsrNameOnServer"]}__ : **${member.nickname ? member.nickname : 'None'}**`
            ])
            .addField('Timestamps', [
                `> 💫 | __${language[guildLang]["AccountCreatedAt"]}__ : **${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} : ${moment(member.user.createdTimestamp).fromNow()}**`,
                `> ➡️ | __${language[guildLang]["ServerJoinedAt"]}__ : **${moment.utc(member.joinedAt).format('dddd, MMMM, Do YYYY, HH:mm:ss')}**`
            ])
            .addField('Online Appearence', [
                `> 👤 | __${language[guildLang]["Status"]}__ : **${member.user.presence.status}**`,
                `> 🕹️ | __${language[guildLang]["Statut"]}__ : **${user.presence.game ? user.presence.game.name : 'None'}**`
            ])
            .addField('Server', [
                `> 🔖 | __${language[guildLang]["Roles"]}__ : **${roles.length}: ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : "None"}**`
            ])
        
        message.channel.send(usrinfo_embed);
    }
}