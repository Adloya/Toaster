const Discord = require('discord.js');
const default_embeds_color = "#90c53f";
const fetch = require('node-fetch');


module.exports = {
    name: 'meme',
    description: 'Gives a meme ;)',
    category: '🎉 | fun',
    run: async(client, message, args) => {
        const { caption, image } = await fetch('https://some-random-api.ml/meme').then(response => response.json());
        const meme_embed = new Discord.MessageEmbed()
            .setColor(`${default_embeds_color}`)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setFooter("Toaster - Created by Adloya")
            .setTitle("🤣 | Meme !")
            .setTimestamp()
            .addFields(
                {name:"\u200b", value: caption}
            )
            .setImage(image);
            message.channel.send(meme_embed)
    }
}