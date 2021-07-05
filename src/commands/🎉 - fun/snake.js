const Discord = require('discord.js');
const SnakeGame = require('snakecord');

const snakeGame = new SnakeGame({

    title: 'Toaster - Snake',

    color: "GREEN",

    timestamp: false,

    gameOverTitle: "Game Over !"

});

module.exports = {
    name: 'snake',
    description: 'Playing snake like in the Discord 404 page',
    category: '🎉 | fun',
    run: async(client, message, args) => {
        return snakeGame.newGame(message);
    }
}