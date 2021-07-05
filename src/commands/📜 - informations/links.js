const Discord = require('discord.js');
const colors = require('../../lists/colors.json');
const default_embeds_color = colors["default_embed"];
const error_color = colors["error_embed"];
const db = require("../../db.json");
const language = require("../../lists/language.json");


module.exports = {
    name: 'links',
    description: 'Useful Links :)',
    category: '📜 | informations',
    run: async(client, message, args) => {
        const guildLang = db[message.guild.id]["language"]

        const linksEmbed = new Discord.MessageEmbed()
            .setColor(`${default_embeds_color}`)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setDescription(`${language[guildLang]["LinksDesc"]}`)
            .setFooter("Toaster - Created by Adloya")
            .setTitle(`${language[guildLang]["LinksTitle"]}`)
            .setTimestamp()
            .addFields(
                { name: `${language[guildLang]["DiscordServer"]}`, value:"[Adloteam](https://discord.gg/mxqVDtGksb)"},
                { name: `${language[guildLang]["ToasterGithub"]}`, value: "[Adloya/Toaster](https://github.com/Adloya/Toaster)"},
                { name: `${language[guildLang]["InviteToaster"]}`, value: "[Toaster Invite](https://discord.com/api/oauth2/authorize?client_id=860476125629382667&permissions=8&scope=bot)"}
            );


        message.channel.send({
            embed: linksEmbed
        });
    }
}