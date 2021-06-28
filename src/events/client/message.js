const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("../../db.json");
const default_embeds_color = "#90c53f";
const emojis = require("../../emojis.json");


var servers = {};
 
const fs = require('fs');
const { time } = require('console');
const { SSL_OP_TLS_BLOCK_PADDING_BUG, UV_FS_O_FILEMAP } = require('constants');
const { connect } = require('http2');
const { get } = require('http');

client.commands = new Discord.Collection();

module.exports = (client, message) => {
    if (message.mentions.has(client.user.id)) {
        if(message.content.includes("@here") || message.content.includes("@everyone")) return;
        const mention_embed = new Discord.MessageEmbed()
            .setColor(default_embeds_color)
            .setAuthor("MultiJS", "http://adloteam.42web.io/adloteam/MultiJS/MULTI.png")
            .setFooter("MultiJS - Created by Adloya")
            .setTimestamp()
            .setTitle(`Bonjour ! Je suis MultiJS !`)
            .setDescription(`Voici des informations sur moi`)
            .addFields(
                { name: `Prefix sur ce serveur : `, value: "``" + db[message.guild.id]["prefix"] + "``" },
                { name: `Commande d'aide : `, value: '``' + db[message.guild.id]["prefix"] + "help``" }
            )
        message.channel.send(mention_embed)
    }
    if(message.channel.type == "dm") return;
    if(!message.content.startsWith(db[message.guild.id]["prefix"]) || message.author.bot) {
        return;
    }else{
        const args = message.content.slice(db[message.guild.id]["prefix"].length).split(/ +/);
        const commandName = args.shift().toLowerCase();

        error_color = "#fc1c03"

        const error_embed = new Discord.MessageEmbed();
        error_embed.setColor(`${error_color}`);
        error_embed.setAuthor("MultiJS", "http://adloteam.42web.io/adloteam/MultiJS/MULTI.png");
        error_embed.setTitle(`${emojis["no"]} | Erreur !`)
        error_embed.setFooter("MultiJS - Created by Adloya");
        error_embed.setTimestamp();

        if(!client.commands.has(commandName)) return;
        const command = client.commands.get(commandName);

        command.run(client, message, args);
    }
}