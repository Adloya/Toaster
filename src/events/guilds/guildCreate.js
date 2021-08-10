const Discord = require('discord.js');
// const client = new Discord.Client();
const client = new Discord.Client({ intents: 32767 });
const db = require("../../db.json");
const emojis = require("../../lists/emojis.json")
const colors = require("../../lists/colors.json")
const default_embeds_color = colors["default_embed"]

client.commands = new Discord.Collection();

module.exports = async (client, guild) => {
    const destinationChannel = "874569549083734056"

    join_embed = new Discord.MessageEmbed()
        .setColor(`${default_embeds_color}`)
        .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
        .setFooter("Toaster - Created by Adloya")
        .setTimestamp()

        .setTitle(`${emojis["plus"]} | Toaster has been added to a new server !`)
        .setDescription(`He's meeting new people ! (He is now on ${client.guilds.cache.size.toString()} servers)`)
        .addField(`Server : `, `${guild.name} (ID : \`\`${guild.id}\`\`)`)

        client.channels.cache.get(destinationChannel).send({embeds : [join_embed]})
}