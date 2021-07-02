const Discord = require('discord.js');
const default_embeds_color = "#90c53f";
const math = require('mathjs')

module.exports.help = {
    name: 'math',
    description: 'Fait des calculs',
    category: 'Tools'
}
module.exports.run = (client, message, args) => {
    try {
        math_embed = new Discord.MessageEmbed()
            .addFields(
                {name: "Calcul posé : ", value: args.join(" ")},
                {name: "Solution : ", value: math.evaluate(args.join(" "))}
            )
            .setColor(`${default_embeds_color}`)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setDescription("Résolution de votre calcul")
            .setFooter("Toaster - Created by Adloya")
            .setTitle("🔢 | Calcul")
            .setTimestamp()
        message.channel.send(math_embed);
    }catch (err){
        message.channel.send("Votre calcul n'est pas valide.")
    }
}