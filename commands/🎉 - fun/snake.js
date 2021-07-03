const Discord = require('discord.js');
const SnakeGame = require('snakecord');

const snakeGame = new SnakeGame({

    title: 'MutiJS - Snake',

    color: "GREEN",

    timestamp: false,

    gameOverTitle: "Partie terminée (allez jouer au snake de la page 404 :@ )"

});

module.exports = {
    name: 'snake',
    description: 'Jouons a snake :)',
    category: '🎉 | fun',
    run: async(client, message, args) => {
        return snakeGame.newGame(message);
    }
}