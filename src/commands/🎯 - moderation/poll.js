const Discord = require('discord.js');
const default_embeds_color = "#90c53f";
const db = require("../../db.json");
const language = require("../../lists/language.json");


module.exports = {
    name: 'poll',
    description: 'Create a poll',
    category: '🎯 | moderation',
    aliases: ['sondage'],
    run: async (client, message, args) => {
    const guildLang = db[message.guild.id]["language"]

    if(message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.MessageEmbed();
        embed.setColor(`${default_embeds_color}`);
        embed.setAuthor(`${language[guildLang]["PollBy"]}` + message.author.username, message.author.displayAvatarURL());
        embed.setTitle(`${language[guildLang]["Poll"]}`);
        embed.setFooter("Toaster - Created by Adloya");
        embed.setTimestamp();
        embed.setDescription(args.join(" "))
        embed.addField(`${language[guildLang]["RespondToThePoll"]}`,
            `
            🟢 - Yes / Oui
            🟠 - Idk / Ne sais pas
            🔵 - Neutral / Neutre
            🔴 - No / Non
            `
        )
        const poll = await message.channel.send(embed);
        await poll.react("🟢");
        await poll.react("🟠");
        await poll.react("🔵");
        await poll.react("🔴");
    }
    }
}