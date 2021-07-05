const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("../../db.json");
const default_embeds_color = "#90c53f";
const emojis = require("../../lists/emojis.json")


var servers = {};
 
const fs = require('fs');
const { time } = require('console');
const { SSL_OP_TLS_BLOCK_PADDING_BUG, UV_FS_O_FILEMAP } = require('constants');
const { connect } = require('http2');
const { get } = require('http');
const { columnDependencies } = require('mathjs');

error_color = "#fc1c03"


const error_embed = new Discord.MessageEmbed();
error_embed.setColor(`${error_color}`);
error_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
error_embed.setTitle(`${emojis["no"]} | Erreur !`);
error_embed.setFooter("Toaster - Created by Adloya");
error_embed.setTimestamp();

client.commands = new Discord.Collection();

function is_url(str) {
    let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if(regexp.test(str)) {
      return true;
    } else {
      return false;
    }
    
  }

module.exports = (client, message) => {
    if(db[message.guild.id]["anti-link"] === "on"){
        if(is_url(message.content) === true) {
            if(message.member.hasPermission("MANAGE_MESSAGES")) return;
            message.delete();
            error_embed.addFields(
                { name: 'Vous ne pouvez pas envoyer de liens sur ce serveur : ', value: 'Les liens ont étés désactivés par un administrateur' }
            );
            message.channel.send(error_embed);
            error_embed.fields = [];
        }
    }
    if (message.mentions.has(client.user.id)) {
        if(message.content.includes("@here") || message.content.includes("@everyone")) return;
        const mention_embed = new Discord.MessageEmbed()
            .setColor(default_embeds_color)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setFooter("Toaster - Created by Adloya")
            .setTimestamp()
            .setTitle(`Bonjour ! Je suis Toaster !`)
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
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        
        error_color = "#fc1c03"

        const error_embed = new Discord.MessageEmbed();
        error_embed.setColor(`${error_color}`);
        error_embed.setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png");
        error_embed.setTitle(`${emojis["no"]} | Erreur !`)
        error_embed.setFooter("Toaster - Created by Adloya");
        error_embed.setTimestamp();

        if (!command) return;
        // const command = client.commands.get(commandName);

        command.run(client, message, args);
    }
}