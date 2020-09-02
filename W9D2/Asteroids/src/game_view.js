//Stores a Game instance.
// Stores a canvas context to draw the game into.
// Installs key listeners to move the ship and fire bullets.
// Installs a timer to call Game.prototype.step.

const Game = require("./game");

function GameView(ctx) {
    this.game = new Game();
    this.ctx = ctx;
}

GameView.prototype.start = function() {
    debugger;
    setInterval(this.game.moveObjects(), 15);
    debugger;
    setInterval(this.game.draw(this.ctx), 20);
    debugger;
}

module.exports = GameView;