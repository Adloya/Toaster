// Tout le code ORIGINAL de ce bot (éxepté celui des technologies externes (ex. Lavalink)) appartient à Adloya#1873
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const db = require("./db.json");


var servers = {};
 
const fs = require('fs');


client.commands = new Discord.Collection();

// fonction qui charge les commandes
const loadCommands = (dir = "./commands/") => {
    fs.readdirSync(dir).forEach(dirs => {
        const commands = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for(const file of commands){
            const getFileName = require(`${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            console.log(`Commande chargée : ${getFileName.help.name}`)
        };
    });
};

// évènement dans le fichier principal, pcq impossible de l'exporter
client.on("guildCreate", (guild, client) =>{
    db[guild.id] = {};
    db[guild.id]["prefix"] = ">>";
    db[guild.id]["warn"] = {};
    SaveDBs();
})


// fonction qui charge les évènements
const loadEvents = (dir = "./events/") => {
    fs.readdirSync(dir).forEach(dirs => {
        const events = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
        console.log(`=================================================`)

        for(const event of events){
            const evt = require(`${dir}/${dirs}/${event}`);
            const evtName = event.split(".")[0];
            client.on(evtName, evt.bind(null, client))
            // example : client.on("message", (client, message) => {})
            console.log(`Evenement chargé : ${evtName}`);
        };
    });
};

function SaveDBs() { // Fonction pour sauvegarder la base de données
    fs.writeFile("./db.json", JSON.stringify(db, null, 4), (err) => {
        if (err) message.channel.send(`Une erreur est survenue`);
    });
}



// Charge les commandes, les évènements et sauvegarde la DB
loadCommands();
loadEvents();
SaveDBs();

client.login(config.token);
