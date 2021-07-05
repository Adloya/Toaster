const Discord = require('discord.js');
const client = new Discord.Client();
const statusFile = require("../../lists/status.json")


client.commands = new Discord.Collection();

module.exports = (client, message) => {
    
    console.log("=================================================")
    console.log("['DiscordJS : '12.5.3']");
    console.log(`=================================================\n[Toaster] : Online! (logged in as ${client.user.tag})\n=================================================`);

    let statuts = statusFile.stats;
    setInterval(function() {
        let stats = statuts[Math.floor(Math.random()*statuts.length)];
        client.user.setActivity(stats, {type: "PLAYING"});
    }, 8000);
}