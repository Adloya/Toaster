const Discord = require('discord.js');
const colors = require('../../lists/colors.json');
const default_embeds_color = colors["default_embed"];
const math = require('mathjs');
const db = require("../../db.json");
const language = require("../../lists/language.json");



module.exports = {
    name: 'csearch',
    description: 'Search on the web a string and send you the links of the results',
    category: '🛠️ | utilities',
    aliases: ["combo-search", "web-combo", "combo", "search-all", "cos"],
    usage: `[search]`,
    run: async (client, message, args) => {
        const guildLang = db[message.guild.id]["language"];
        const input = args.join("%20");

        const google_res = `https://www.google.com/search?q=${input}`;
        const duckduckgo_res = `https://duckduckgo.com/?q=${input}`;
        const bing_res = `https://www.bing.com/search?q=${input}`;
        const qwant_res = `https://www.qwant.com/?q=${input}`;
        const brave_res = `https://search.brave.com/search?q=${input}`;
        const yt_res = `https://www.youtube.com/results?search_query=${input}`;
        const ytmusic_res = `https://music.youtube.com/search?q=${input}`;
        const twitch_res = `https://www.twitch.tv/search?term=${input}`;
        const twitter_res = `https://twitter.com/search?q=${input}`;
        const instagram_res = `https://www.instagram.com/${input}/`;
        const tiktok_res = `https://www.tiktok.com/search?q=${input}`;


        const combosearch_embed = new Discord.MessageEmbed()
            .setColor(`${default_embeds_color}`)
            .setAuthor("Toaster", "http://adloteam.42web.io/adloteam/Toaster/MULTI.png")
            .setFooter("Toaster - Created by Adloya")
            .setTitle(`${language[guildLang]["ComboSearch"]}`)
            .setDescription(`${language[guildLang]["CombSearchDesc"]}`)
            .setTimestamp()
            .addField("**__Search Engines Results__**", [
                `[Google](${google_res})`,
                `[DuckDuckGo](${duckduckgo_res})`,
                `[Bing](${bing_res})`,
                `[Qwant](${qwant_res})`,
                `[Brave](${brave_res})`
            ])
            .addField("**__Social Networks Results__**", [
                `[Youtube](${yt_res})`,
                `[Youtube Music](${ytmusic_res})`,
                `[Twitch](${twitch_res})`,
                `[Twitter](${twitter_res})`,
                `[Instagram (accounts)](${instagram_res})`,
                `[Tiktok](${tiktok_res})`
            ])

        message.channel.send(combosearch_embed);
    }
}