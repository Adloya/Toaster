const Discord = require('discord.js');
// const client = new Discord.Client();
const client = new Discord.Client({ intents: 32767 });
const db = require("../../db.json");

client.commands = new Discord.Collection();

module.exports = async (client, member) => {
    // rien a voir pour l'instant :(
}