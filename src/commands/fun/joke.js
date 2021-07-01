const Discord = require('discord.js');
const default_embeds_color = "#90c53f";
const fetch = require('node-fetch');

module.exports.help = {
    name: 'joke',
    description: 'Raconte une blague pour vous donner le sourire',
    category: 'fun'
}
module.exports.run = async (client, message, args) => {
    jokes = [
        "Vous connaissez l’histoire du lit vertical?\nElle est à dormir debout !",
        "– Docteur, j’ai besoin de lunettes.\n– Oui certainement. Ici c’est une banque",
        "Où se cache Mozart ?\nDans le frigo….Car **Mozzar**ella…",
        "Un homme demande à une dame dans la rue :\n– Avez-vous vu un policier?\n– Non !\n– Très bien, alors donnez moi votre sac à main",
        "Que dit une noix de coco lorsqu’elle tombe a l’eau?\nJe me noix",
        "Avec quoi ramasse t’on la papaye ?\nAvec une foufourche",
        "Deux gars discutent:\n– Tu ferais quoi si aujourd’hui c’était la fin du monde?\n– Moi je tirerais tout ce qui bouge et toi?\n– Moi je bougerais pas…",
        "C’est l’histoire d’un têtard qui croyait qu’il était tôt…\nAlors qu’il était tard",
        "Certains ont peur du vide : moi vu le prix de l’essence, j’ai plutôt peur du plein !",
        "Quand 2 poissons s’énervent..\nEst-ce qu’on peut dire que le thon monte ?",
        "Qu’est-ce qu’un rat avec la queue coupée ?\nUn rat-courci.",
        "Qu’est ce qu’un chat qui habrite beaucoup de personnes ?\nUn chapiteau",
        "Que dit un oignon quand il se cogne ?\nAil !",
        "Monsieur et madame Gardien ont une fille. Comment s’appelle-t-elle ?\nAnge",
        "Monsieur et madame Majinassion ont une fille. Comment s’appelle-t-elle ?\nKelly",
        "Je vends mon perroquet parlant.\nPourquoi?\nParce qu’hier, ce bâtard a essayé de me vendre !",
        "La maman demande à Simon :\nQue fais-tu ?\n– Rien\n– Et ton frère ?\n– Il m’aide !",
        "Il y a quoi au milieu de l’océan ?\nUn é",
        "Monsieur et madame Zion ont une fille. Comment s’appelle-t-elle ?\nÉva",
        "**__Premier soir__**\n**Père :** Bonne nuit Elena !\n**Elena :** Bonne nuit papa, et *au revoir papi*\n**Père :** Pourquoi tu dis ça ?\n**Elena :** Je sais pas, juste comme ça\n**Mère :** Chéri, ton père est mort, la petite a perdu son grand-père..\n**__Un mois plus tard__**\n**Père :** Bonne nuit Elena !\n**Elena :** Bonne nuit papa et *au revoir mamie*\n**Père :** Pourquoi tu dis ça ?\n**Elena :** Je sais pas, juste comme ça\n**Mère :**Chéri ta mère est morte, la petite a perdu sa mère\n**__Un mois plus tard__**\n**Père :** Bonne nuit Elena !\n**Elena :** Bonne nuit papa et *au revoir papa*\n**Père :** Oh non...\n**Mère :**Chéri le facteur est mort devant chez nous",
        "**Mère :** T'a appelé ton père comme je t'ai demandé, pour savoir quand il rentre  ?\n**Fils :** Ouais mais à chaque fois c'était une fille qui repondait.\n**Mère :** Je savais qu'il me trompait, alors je vais le tromper aussi !\n__**10 minutes plus tard**__\n**Numéro Inconnu :** Bonjour.\n**Père :** Bonjour qui êtes-vous ?\n**Mère :** Tu m'a trompée alors je trompe aussi !\n**Père :** Mais je ne t'es pas trompée !!!\n**Mère :** Alors c'est qui qui répondait quand ton fils appelait ? Hein ?!\n**Père :** Mais personne ! Fiston qu'est-ce qu'elle disait la fille au téléphone ?\n**Fils :** Bah toujours la même chose, \"Vous n'avez pas assez de credit pour cet appel veuillez rappeler ultérieurement\""
    ]

    const ChoosenJoke = jokes[Math.floor(Math.random() * jokes.length)];

    message.channel.send(ChoosenJoke)
}