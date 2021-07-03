const Discord = require('discord.js');
const default_embeds_color = "#90c53f";


module.exports = {
    name: 'links',
    description: 'Liens utiles.',
    category: '📜 | informations',
    run: async(client, message, args) => {
        const linksEmbed = new Discord.MessageEmbed()
            .setColor(`${default_embeds_color}`)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setDescription("Liens qui pourraient vous servir")
            .setFooter("Toaster - Created by Adloya")
            .setTitle("🗒️ | Liens utiles")
            .setTimestamp()
            .addFields(
                { name: "💬 | Serveur discord : ", value:"[Adloteam](https://discord.gg/mxqVDtGksb)"},
                { name: "📂 | Github de Toaster : ", value: "[Adloya/Toaster](https://github.com/Adloya/Toaster)"},
                { name: "🧧 | Inviter le bot sur votre serveur : ", value: "[Toaster Invite](https://discord.com/api/oauth2/authorize?client_id=860476125629382667&permissions=8&scope=bot)"}
            );


        message.channel.send({
            embed: linksEmbed
        });
    }
}