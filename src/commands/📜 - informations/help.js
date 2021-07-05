const Discord = require('discord.js');
const db = require("../../db.json");
const default_embeds_color = "#90c53f";
const fs = require('fs');
const emojis = require("../../lists/emojis.json")
const language = require("../../lists/language.json");


error_color = "#fc1c03"



module.exports = {
    name: 'help',
    description: "Shows the help menu",
    category: '📜 | informations',
    aliases: ['h'],
    run: async(client, message, args) => {
        const guildLang = db[message.guild.id]["language"]

        const prefix = db[message.guild.id]["prefix"];
        if(!args[0]) {
            let categories = [];

            fs.readdirSync('./commands/').forEach((dir) =>{
                const commands = fs.readdirSync(`./commands/${dir}`).filter((file) => file.endsWith('.js'));

                const cmds = commands.map((command) => {
                    let file = require(`../../commands/${dir}/${command}`)

                    if (!file.name) return `${language[guildLang]["NoCommandNameWasSpecified"]}`;

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
            .setTitle(`${language[guildLang]["HelpCommandListTitle"]}`)
            .addFields(categories)
            .setDescription(`${language[guildLang]["HowToHaveInfosCommand"]}` + `\`\`${prefix}help [command]\`\`` + `${language[guildLang]["HowToHaveInfosCommand2"]}`)
            .setColor(default_embeds_color)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setFooter("Toaster - Created by Adloya")
            .setTimestamp();

            message.channel.send(helpEmbed);
        }else{
            const command = client.commands.get(args[0].toLowerCase()) || client.commands.find(c => c.aliases && c.aliases.includes(args[0].toLowerCase));

            if(!command){
                const command404_embed = new Discord.MessageEmbed()
                    .setTitle(`${language[guildLang]["Cmd404Title"]}`)
                    .setDescription(`${language[guildLang]["Cmd404Desc"]}` + `\`\`${prefix}help\`\`` + `${language[guildLang]["Cmd404Desc2"]}`)
                    .setColor(error_color)
                    .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
                    .setFooter("Toaster - Created by Adloya")
                    .setTimestamp();

                    return message.channel.send(command404_embed);
                }
            const helpMenu_embed = new Discord.MessageEmbed()
                .setTitle(`${language[guildLang]["InfosCmdTitle"]}`)
                .addField(`${language[guildLang]["Prefix"]} :`, `\`\`${prefix}\`\``)
                .addField(`${language[guildLang]["Command"]} :`, command.name ? `\`\`${command.name}\`\`` : `${language[guildLang]["NoCommandNameWasSpecified"]}`)
                .addField(`${language[guildLang]["Alias"]} :`, command.aliases ? `\`\`${command.aliases.join('`` ``')}\`\`` : `${language[guildLang]["NoCommandAliasWasSpecified"]}`)
                .addField(`${language[guildLang]["Usage"]} :`, command.usage ? `\`\`${prefix}${command.name} ${command.usage}\`\`` : `\`\`${prefix}${command.name}\`\``)
                .addField(`${language[guildLang]["Description"]} :`, command.description ? command.description : `${language[guildLang]["NoCommandDescWasSpecified"]}`)
                .setColor(default_embeds_color)
                .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
                .setFooter("Toaster - Created by Adloya")
                .setTimestamp();

                return message.channel.send(helpMenu_embed)
        }
    }
}