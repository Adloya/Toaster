const Discord = require('discord.js');
const figlet = require("figlet")


module.exports.help = {
    name: 'ascii',
    description: 'Transforme du texte en ASCII',
    category: 'fun'
}
module.exports.run = async (client, message, args) => {
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