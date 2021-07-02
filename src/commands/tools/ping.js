const Discord = require('discord.js');
const default_embeds_color = "#90c53f";
const emojis = require("../../lists/emojis.json")

module.exports.help = {
    name: 'ping',
    description: "Affiche le délai entre vous et l'API discord.js",
    category: 'tools'
}
module.exports.run = async (client, message, args) => {
    const msg = await message.channel.send(`Pong!`);
    const ping_embed = new Discord.MessageEmbed()
        .setColor(`${default_embeds_color}`)
        .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
        .setDescription("Latence du bot")
        .setFooter("Toaster - Created by Adloya")
        .setTitle("🏓 | Pong !")
        .setTimestamp()
        .addFields(
            {name: `${emojis["lag"]} | Latence du bot :`, value: `\`\`${msg.createdTimestamp - message.createdTimestamp}ms\`\``},
            {name: `${emojis["discordJs"]} | Latence de l'API Discord.js : `, value: `\`\`${Math.round(client.ws.ping)}ms\`\``}
        );
        msg.edit(
            ping_embed
        )
}