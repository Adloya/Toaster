const Discord = require('discord.js');

module.exports.help = {
    name: 'members',
    description: 'Affiche le nombre de membres sur le serveur.',
    category: 'informations'
}
module.exports.run = (client, message, args) => {
    message.channel.send(`Il y a ${message.guild.memberCount} membres dans le serveur ${message.guild.name}`);

}