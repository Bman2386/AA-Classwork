//ENTRY POINT FILE
console.log("Webpack is working!")

const MovingObject = require("./moving_object");
const Asteroid = require("./asteroid")
const Util = require("./utils");
const Game = require("./game");
const GameView = require("./game_view")

// window.Asteroid = Asteroid;
// window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", () => { 
    const canvEle = document.getElementById("game-canvas");
    canvEle.width = 1000;
    canvEle.height = 600;    
    const ctx = canvEle.getContext("2d");

    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, canvEle.width, canvEle.height); 

    const lets_play = new GameView(ctx);
    lets_play.start();

    // window.ctx = ctx;
    // ctx.arc(x pos, y pos, radius, angle)
})

// ctx.beginPath();
//     ctx.strokeStyle = this.color;
//     ctx.fillStyle = this.color;
//     ctx.arc(this.pos[0],this.pos[1],this.radius, 0, 2 * Math.PI, true);
//     ctx.stroke();
//     ctx.fill();