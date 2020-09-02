/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n//It inherits from MovingObject\nUtil.inherits(Asteroid, MovingObject); \n\nfunction Asteroid(args) {\n    const properties = {\n        vel: Util.randomVec(100),\n        color: Asteroid.COLOR,\n        radius: Asteroid.RADIUS\n    }\n    if (args.pos) { \n        properties.pos = args.pos;\n    } else {\n        properties.pos = [100, 100];\n    }\n   \n    MovingObject.call(this, properties); \n    \n    \n}\n\nAsteroid.COLOR = \"yellow\";\nAsteroid.RADIUS = 15;\n\n\nmodule.exports = Asteroid;\n\n// from Moving Object:\n// this.pos = args['pos'];\n// this.vel = args['vel'];\n// this.radius = args['radius'];\n// this.color = args['color'];\n//should have access to .draw(ctx) and .move\n\n// const yo = new MovingObject({\n//     pos: [100, 100],\n//     vel: [100, 100], \n//     radius: 50,\n//     color: \"yellow\"\n// });\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\n\n\nfunction Game (){\n    this.asteroids = [];\n    while(this.asteroids.length < Game.NUM_ASTEROIDS){\n        this.asteroids.push(this.addAsteroids());\n    }\n    \n}\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.NUM_ASTEROIDS = 30;\n\nGame.prototype.addAsteroids = function() {\n    let randomPos = this.randomPosition();\n    // debugger;\n    return new Asteroid({pos: randomPos});\n};\n\nGame.prototype.randomPosition = function() {\n    let x = Math.floor(Math.random() * 1000);\n    let y = Math.floor(Math.random() * 600);\n    return [x,y];\n}\nGame.prototype.draw = function(ctx) {\n    // ctx.clearRect();\n    // debugger;\n    this.asteroids.forEach(asteroid => {\n        // debugger;\n        asteroid.draw(ctx);\n    });\n};\n\nGame.prototype.moveObjects = function () {\n    this.asteroids.forEach(asteroid => { \n        asteroid.move();\n    })\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//Stores a Game instance.\n// Stores a canvas context to draw the game into.\n// Installs key listeners to move the ship and fire bullets.\n// Installs a timer to call Game.prototype.step.\n\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n    this.game = new Game();\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n    debugger;\n    setInterval(this.game.moveObjects(), 15);\n    debugger;\n    setInterval(this.game.draw(this.ctx), 20);\n    debugger;\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//ENTRY POINT FILE\nconsole.log(\"Webpack is working!\")\n\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\")\n\n// window.Asteroid = Asteroid;\n// window.MovingObject = MovingObject;\n\ndocument.addEventListener(\"DOMContentLoaded\", () => { \n    const canvEle = document.getElementById(\"game-canvas\");\n    canvEle.width = 1000;\n    canvEle.height = 600;    \n    const ctx = canvEle.getContext(\"2d\");\n\n    ctx.fillStyle = 'grey';\n    ctx.fillRect(0, 0, canvEle.width, canvEle.height); \n\n    const lets_play = new GameView(ctx);\n    lets_play.start();\n\n    // window.ctx = ctx;\n    // ctx.arc(x pos, y pos, radius, angle)\n})\n\n// ctx.beginPath();\n//     ctx.strokeStyle = this.color;\n//     ctx.fillStyle = this.color;\n//     ctx.arc(this.pos[0],this.pos[1],this.radius, 0, 2 * Math.PI, true);\n//     ctx.stroke();\n//     ctx.fill();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//MovingObject.prototype.move\n//MovingObject.prototype.draw(ctx)\n//MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(args) {\n    this.pos = args['pos'];\n    this.vel = args['vel'];\n    this.radius = args['radius'];\n    this.color = args['color'];\n}\n\nMovingObject.prototype.draw = function (ctx) { \n    ctx.beginPath();\n    ctx.strokeStyle = this.color;\n    ctx.fillStyle = this.color;\n    ctx.arc(this.pos[0],this.pos[1],this.radius, 0, 2 * Math.PI, true);\n    ctx.stroke();\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n    let new_x = this.pos[0] + this.vel[0];\n    let new_y = this.pos[1] + this.vel[1];\n    this.pos = [new_x, new_y];\n    // ctx.clear();\n    // this.draw(ctx);\n}\n\nmodule.exports = MovingObject;\n\n/*\nconst yo = new MovingObject({\n    pos: [100, 100],\n    vel: [100, 100], \n    radius: 50,\n    color: \"yellow\"\n});\n*/\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Function.prototype.inherits = function (ParentClass) { \n//     function Pseudo(){};\n//     Pseudo.prototype = ParentClass.prototype;\n//     this.prototype = new Pseudo();\n//     this.prototype.constructor = this;\n//  };\n\nconst Util = {\n    inherits(ChildClass, ParentClass) {\n        function Pseudo() { };\n        Pseudo.prototype = ParentClass.prototype;\n        ChildClass.prototype = new Pseudo();\n        ChildClass.prototype.constructor = ChildClass;\n    },\n// Return a randomly oriented vector with the given length.\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n// Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n     \n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });