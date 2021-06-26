const Discord = require('discord.js');
const default_embeds_color = "#90c53f";


module.exports.help = {
    name: 'links',
    description: 'Liens utiles.',
    category: 'informations'
}
module.exports.run = async(client, message, args) => {
    const linksEmbed = new Discord.MessageEmbed()
        .setColor(`${default_embeds_color}`)
        .setAuthor("MultiJS", "http://adloteam.42web.io/adloteam/MultiJS/MULTI.png")
        .setDescription("Liens qui pourraient vous servir")
        .setFooter("MultiJS - Created by Adloya")
        .setTitle("🗒️ | Liens utiles")
        .setTimestamp()
        .addFields(
            { name: "💬 | Serveur discord : ", value:"https://discord.com/invite/xVYhVtKBwN"},
            { name: "📂 | Github du créateur : ", value: "https://github.com/Adloya/"},
            { name: "🧧 | Inviter le bot sur votre serveur : ", value: "https://discord.com/api/oauth2/authorize?client_id=853578689290698793&permissions=8&scope=bot"}
        );


    message.channel.send({
        embed: linksEmbed
    });
}