const Discord = require('discord.js');
const db = require("../../db.json");
const colors = require('../../lists/colors.json');
const default_embeds_color = colors["default_embed"];
const error_color = colors["error_embed"];
const language = require("../../lists/language.json");
const moment = require('moment');

module.exports = {
    name: 'serverinfo',
    description: 'Shows informations about the server that you\'re in',
    category: '📜 - Informations',
    aliases: ['guildinfo', 'si'],
    run: async (client, message, args) => {
        const emojis = require('../../lists/emojis.json')
        const guildLang = db[message.guild.id]["language"]

        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const owner = await message.guild.fetchOwner();

        const si_embed = new Discord.MessageEmbed()
            .setColor(`${default_embeds_color}`)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setFooter("Toaster - Created by Adloya")
            .setTimestamp()
            .setThumbnail(message.guild.iconURL({dynamic: true}))
            .setTitle(`${language[guildLang]["ServerinfoTitle"]}`)
            .setDescription(`${language[guildLang]["ServerinfoDesc"]} **__${message.guild.name}__**`)
            .addField('General', `> 🏷️ | __${language[guildLang]["Si_Name"]}__ : **${message.guild.name}**
                > 🆔 | __ID :__ **${message.guild.id}**
                > 👑 | __${language[guildLang]["Si_owner"]}__ : **${owner.user.username}#${owner.user.discriminator}**
                > ${emojis["heart_boost"]} | __${language[guildLang]["Si_BoostTier"]}__ : **${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : '0'}**
                > 🔞 | __${language[guildLang]["Si_explicitFilter"]}__ : **${message.guild.explicitContentFilter}**
                > ${emojis["yes"]} | __${language[guildLang]["Si_verrifLevel"]}__ : **${message.guild.verificationLevel}**
                > 🏷️ | __${language[guildLang]["Si_timeCreated"]}__ : **${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} : ${moment(message.guild.createdTimestamp).fromNow()}**
                \u200b

            `)
            .addField(`${language[guildLang]["Si_Statistics_title"]}`, `
            > 🎖️ | __${language[guildLang]["Si_roleCount"]}__ : **${roles.length}**
            > 👨‍👦 | __${language[guildLang]["Si_memberCount"]}__ : **${message.guild.memberCount}**
            > 👨 | __${language[guildLang]["Si_humansCount"]}__ : **${members.filter(member => !member.user.bot).size}**
            > 🤖 | __${language[guildLang]["Si_botsCount"]}__ : **${members.filter(member => member.user.bot).size}**
            > 💬 | __${language[guildLang]["Si_TextChannelsCount"]}__ : **${channels.filter(channel => channel.type === 'GUILD_TEXT').size}**
            > 🏷️ | __${language[guildLang]["Si_VoiceChannelsCount"]}__ : **${channels.filter(channel => channel.type === 'GUILD_VOICE').size}**
            > ${emojis["heart_boost"]} | __${language[guildLang]["Si_BoostCount"]}__ : **${message.guild.premiumSubscriptionCount || `0`}**
            \u200b
            `)
            .addField(`Presence`, `
                > 🟢 | __Online__ : **${message.guild.members.cache.filter((member) => member.presence?.status === 'online').size}**
                > 🟡 | __Idle__ : **${message.guild.members.cache.filter((member) => member.presence?.status === 'idle').size}**
                > 🔴 | __Do not disturb__ : **${message.guild.members.cache.filter((member) => member.presence?.status === 'dnd').size}**
                > ⚫ | __Offline/Invisible__ : **${message.guild.members.cache.filter((member) => member.presence?.status === 'offline').size}**
            `)


                //> 🌍 | __${language[guildLang]["Si_region"]}__ : **${message.guild.cache.get(region)}**

        message.channel.send({ embeds: [si_embed] })
    }
}