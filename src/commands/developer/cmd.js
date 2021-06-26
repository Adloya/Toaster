const Discord = require('discord.js');
const owner_id = "381360415646416896"
const child = require('child_process');


module.exports.help = {
    name: 'cmd',
    description: 'cmd',
    category: 'developer'
}
module.exports.run = (client, message, args) => {
    if(message.author.id !== owner_id) return;

    const command = args.join(" ");
    if(!command) return message.reply("Spécifiez du code à éxécuter");
    child.exec(command, (err, res) => {
        if (err) return console.log(err);
        valuef = res.slice(0, 2000)
        if (!res.slice(0, 2000)) {
            valuef = "Ok"
        }
        message.channel.send(valuef, { code: "js"})
    })
}