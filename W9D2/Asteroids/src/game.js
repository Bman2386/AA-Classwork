const Asteroid = require("./asteroid")


function Game (){
    this.asteroids = [];
    while(this.asteroids.length < Game.NUM_ASTEROIDS){
        this.asteroids.push(this.addAsteroids());
    }
    
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 30;

Game.prototype.addAsteroids = function() {
    let randomPos = this.randomPosition();
    // debugger;
    return new Asteroid({pos: randomPos});
};

Game.prototype.randomPosition = function() {
    let x = Math.floor(Math.random() * 1000);
    let y = Math.floor(Math.random() * 600);
    return [x,y];
}
Game.prototype.draw = function(ctx) {
    // ctx.clearRect();
    // debugger;
    this.asteroids.forEach(asteroid => {
        // debugger;
        asteroid.draw(ctx);
    });
};

Game.prototype.moveObjects = function () {
    this.asteroids.forEach(asteroid => { 
        asteroid.move();
    })
}

module.exports = Game;
