const Discord = require('discord.js');
const default_embeds_color = "#90c53f";


module.exports.help = {
    name: 'poll',
    description: 'Crée un sondage',
    category: 'moderation'
}

module.exports.run = async (client, message, args) => {
    if(message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.MessageEmbed();
        embed.setColor(`${default_embeds_color}`);
        embed.setAuthor("Sondage par : " + message.author.username, message.author.displayAvatarURL());
        embed.setTitle("Sondage");
        embed.setFooter("MultiJS - Created by Adloya");
        embed.setTimestamp();
        embed.setDescription(args.join(" "))
        embed.addField("Répondez à la question ci-dessus via l'une des réactions se trouvant en dessous du message.",
            `
            🟢 - Pour (Oui)
            🟠 - Ne sais pas
            🔵 - Neutre
            🔴 - Contre (Non)
            `
        )
        const poll = await message.channel.send(embed);
        await poll.react("🟢");
        await poll.react("🟠");
        await poll.react("🔵");
        await poll.react("🔴");
    }

}