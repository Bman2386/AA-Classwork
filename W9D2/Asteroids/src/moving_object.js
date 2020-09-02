//MovingObject.prototype.move
//MovingObject.prototype.draw(ctx)
//MovingObject.prototype.isCollidedWith(otherMovingObject)

function MovingObject(args) {
    this.pos = args['pos'];
    this.vel = args['vel'];
    this.radius = args['radius'];
    this.color = args['color'];
}

MovingObject.prototype.draw = function (ctx) { 
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.arc(this.pos[0],this.pos[1],this.radius, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.fill();
}

MovingObject.prototype.move = function() {
    let new_x = this.pos[0] + this.vel[0];
    let new_y = this.pos[1] + this.vel[1];
    this.pos = [new_x, new_y];
    // ctx.clear();
    // this.draw(ctx);
}

module.exports = MovingObject;

/*
const yo = new MovingObject({
    pos: [100, 100],
    vel: [100, 100], 
    radius: 50,
    color: "yellow"
});
*/