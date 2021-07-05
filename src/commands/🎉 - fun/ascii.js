const Discord = require('discord.js');
const figlet = require("figlet")


module.exports = {
    name: 'ascii',
    description: 'Transform Text to ASCII',
    category: '🎉 | fun',
    run: async(client, message, args) => {
        figlet.text(
            args.join(" "),
            {
            font: "",
            },
            async (err, data) => {
            message.channel.send({ content: `\`\`\`${data}\`\`\`` });
            }
        );
    }
}