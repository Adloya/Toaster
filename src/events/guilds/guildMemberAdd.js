const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("../../db.json");

client.commands = new Discord.Collection();

module.exports = async (client, member) => {
    if(db[member.guild.id]["anti-join"] === "on"){
        console.log(db[guild.id]["anti-join"])
        member.kick("Antijoin was enabled");
        console.log("ah!")
    }else{
        console.log("ah?")
    }
}