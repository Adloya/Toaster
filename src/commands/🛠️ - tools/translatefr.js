const Discord = require('discord.js');
const translate = require('@iamtraction/google-translate');

module.exports = {
    name: 'translatefr',
    description: 'Fait appel a Google Traduction pour traduire vos mots EN FRANCAIS',
    category: '🛠️ | tools',    run: async(client, message, args) => {
        const query = args.join(" ");
        if (!query) return message.reply("Merci de spécifier un texte à traduire");

        const translated = await translate(query, {to: 'fr'});

        message.channel.send(translated.text);
    }
}