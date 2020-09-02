const Util = require("./utils");
const MovingObject = require("./moving_object");

//It inherits from MovingObject
Util.inherits(Asteroid, MovingObject); 

function Asteroid(args) {
    const properties = {
        vel: Util.randomVec(100),
        color: Asteroid.COLOR,
        radius: Asteroid.RADIUS
    }
    if (args.pos) { 
        properties.pos = args.pos;
    } else {
        properties.pos = [100, 100];
    }
   
    MovingObject.call(this, properties); 
    
    
}

Asteroid.COLOR = "yellow";
Asteroid.RADIUS = 15;


module.exports = Asteroid;

// from Moving Object:
// this.pos = args['pos'];
// this.vel = args['vel'];
// this.radius = args['radius'];
// this.color = args['color'];
//should have access to .draw(ctx) and .move

// const yo = new MovingObject({
//     pos: [100, 100],
//     vel: [100, 100], 
//     radius: 50,
//     color: "yellow"
// });