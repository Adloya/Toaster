const Discord = require('discord.js');
const translate = require('@iamtraction/google-translate');

module.exports.help = {
    name: 'translatefr',
    description: 'Fait appel a Google Traduction pour traduire vos mots EN FRANCAIS',
    category: 'Tools'
}
module.exports.run = async (client, message, args) => {
    const query = args.join(" ");
    if (!query) return message.reply("Merci de spécifier un texte à traduire");

    const translated = await translate(query, {to: 'fr'});

    message.channel.send(translated.text);
}