const Discord = require('discord.js');
const default_embeds_color = "#90c53f";
const fetch = require('node-fetch');


module.exports.help = {
    name: 'meme',
    description: 'Vous donne un bon meme :)',
    category: 'fun'
}
module.exports.run = async (client, message, args) => {
    const { caption, image } = await fetch('https://some-random-api.ml/meme').then(response => response.json());
    const meme_embed = new Discord.MessageEmbed()
        .setColor(`${default_embeds_color}`)
        .setAuthor("MultiJS", "http://adloteam.42web.io/adloteam/MultiJS/MULTI.png")
        .setFooter("MultiJS - Created by Adloya")
        .setTitle("🤣 | Meme !")
        .setTimestamp()
        .addFields(
            {name:"\u200b", value: caption}
        )
        .setImage(image);
        message.channel.send(meme_embed)
    }