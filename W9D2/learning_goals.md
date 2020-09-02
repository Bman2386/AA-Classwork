Be able to implement prototypal inheritance to give a class another class's methods and attributes
Be able to include JavaScript in a web page
Know how Webpack works
Know how to test JavaScript code using window.x = x
Know how to render information from JavaScript objects on a page
Know how to draw on a web page using Canvas

To go in src >
- Util (src/utils.js)
    - Utility code, especially vector math stuff.
- MovingObject (src/moving_object.js)
    - Base class for anything that moves.
    - Most important methods are MovingObject.prototype.move, MovingObject.prototype.draw(ctx), MovingObject.prototype.isCollidedWith(otherMovingObject).
- Asteroid (src/asteroid.js)
    - Spacerock. It inherits from MovingObject.
- Bullet (src/bullet.js)
    - Kill spacerocks with this. Also a MovingObject subclass.
- Ship (src/ship.js)
    - This is you! Another MovingObject subclass.
- Game (src/game.js)
    - Holds collections of the asteroids, bullets, and your ship.
    - Game.prototype.step method calls Game.prototype.move on all the objects, and Game.prototype.checkCollisions checks for colliding objects.
    - Game.prototype.draw(ctx) draws the game.
    - Keeps track of dimensions of the space; wraps objects around when they drift off the screen.
- GameView (src/game_view.js)
    - Stores a Game instance.
    - Stores a canvas context to draw the game into.
    - Installs key listeners to move the ship and fire bullets.
    - Installs a timer to call Game.prototype.step.


VECTORS -- this is math, not JavaScript
Distance: 
Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)

Norm: 
Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])
obj.vel = [3, 4] (3 horizontal pixels and 4 vertical pixels per unit time) then the overall speed is 5 pixels per unit time.
