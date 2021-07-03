const Discord = require('discord.js');
const default_embeds_color = "#90c53f";


module.exports = {
    name: 'bug-report',
    description: "Signaler un bug au créateur du bot (@Adloya#1873)",
    category: '🛠️ | tools',    run: async(client, message, args) => {
        const destinationChannel = "860538535203438592"

        const query = args.join(" ");
        if(!query) return message.reply("Merci de spécifier un bug à signaler, décrivez le en détail");

        const reportEmbed = new Discord.MessageEmbed()
            .setColor(`${default_embeds_color}`)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setDescription("Signaler un bug")
            .setFooter("Toaster - Created by Adloya")
            .setTitle("❗ | Signaler un bug")
            .setTimestamp()
            .addFields(
                {name: 'Utilisateur qui a signalé le bug : ', value: message.author.toString(), inline: true},
                {name: 'Serveur ', value: message.guild.name, inline: true},
                {name: 'Signalement : ', value: query, inline: true}
            );
        client.channels.cache.get(destinationChannel).send(reportEmbed);
        message.channel.send(`Signalement envoyé !`);
        message.channel.send(reportEmbed);
    }
}