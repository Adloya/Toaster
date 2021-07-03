const Discord = require('discord.js');
const db = require("../../db.json");
const default_embeds_color = "#90c53f";
const fs = require('fs');
const emojis = require("../../lists/emojis.json")

error_color = "#fc1c03"

// Dynamic help : ✅

module.exports = {
    name: 'help',
    description: "Affiche le menu Help",
    category: '📜 | informations',
    aliases: ['h'],
    run: async(client, message, args) => {
        const prefix = db[message.guild.id]["prefix"];
        if(!args[0]) {
            let categories = [];

            fs.readdirSync('./commands/').forEach((dir) =>{
                const commands = fs.readdirSync(`./commands/${dir}`).filter((file) => file.endsWith('.js'));

                const cmds = commands.map((command) => {
                    let file = require(`../../commands/${dir}/${command}`)

                    if (!file.name) return 'No Command name.';

                    let name = file.name.replace('.js', '');

                    return `\`${name}\``
                });

                let data = new Object();

                data = {
                    name : dir.toUpperCase(),
                    value : cmds.length === 0 ? 'In progress' : cmds.join(' ')
                };

                categories.push(data);

        })

        

        const helpEmbed = new Discord.MessageEmbed()
            .setTitle('Aide | Liste des commandes')
            .addFields(categories)
            .setDescription(`Faites ${prefix}help [commande] pour avoir plus d'informations sur une commande spécifique`)
            .setColor(default_embeds_color)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setFooter("Toaster - Created by Adloya")
            .setTimestamp();

            message.channel.send(helpEmbed);
        }else{
            const command = client.commands.get(args[0].toLowerCase()) || client.commands.find(c => c.aliases && c.aliases.includes(args[0].toLowerCase));

            if(!command){
                const command404_embed = new Discord.MessageEmbed()
                    .setTitle(`Commande introuvable !`)
                    .setDescription(`Utilisez \`\`${prefix}\`\` pour avoir une liste des commandes disponibles.`)
                    .setColor(error_color)
                    .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
                    .setFooter("Toaster - Created by Adloya")
                    .setTimestamp();

                    return message.channel.send(command404_embed);
                }
            const helpMenu_embed = new Discord.MessageEmbed()
                .setTitle('Informations sur une commande')
                .addField('Prefix : ', `\`\`${prefix}\`\``)
                .addField('Commande', command.name ? `\`\`${command.name}\`\`` : 'Aucun nom spécifié')
                .addField('Alias :', command.aliases ? `\`\`${command.aliases.join('` `')}\`\`` : "Aucun alias spécifié")
                .addField('Utilisation :', command.usage ? `\`\`${prefix}${command.name} ${command.usage}\`\`` : `\`\`${prefix}${command.name}\`\``)
                .addField('Description :', command.description ? command.description : "Aucune description spécifiée")
                .setColor(default_embeds_color)
                .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
                .setFooter("Toaster - Created by Adloya")
                .setTimestamp();

                return message.channel.send(helpMenu_embed)
        }
    }
}
