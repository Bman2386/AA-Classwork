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
/******/ 	return __webpack_require__(__webpack_require__.s = "./canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./canvas.js":
/*!*******************!*\
  !*** ./canvas.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Our \"entry file\" - webpack can really only look at one file (and then into its required files)\nconst curry = __webpack_require__(/*! ./currying */ \"./currying.js\");\nconst pi = __webpack_require__(/*! ./prototypal_inheritance */ \"./prototypal_inheritance.js\");\nconst jsprobs = __webpack_require__(/*! ./js_problems */ \"./js_problems.js\");\n// Browsers don't \"understand\" require statements, which is one major reason we need webpack!\n// Advantage 2: \"mini-fies\" our code: reduces space it takes by reducing length of variable names and getting rid of line breaks\n// NOTE: don't open bundle.js - it's ALL of your code and can be too much for VSCode to color-code and check\n\n// Webpack - good for development and production! \n//  gives versatility to set up multiple files/requires/etc during development\n//  Can set up to transpile code so it will be compatible cross-browser - SUPER helpful for production\n//  Minified code is as space-efficient as possible, good for both\n//  It's also keeping the variables from being exposed to the window (though we could do this manually)\n\n// Webpack will not include any debuggers when run in production mode! - A good thing, but we need to be able to use them in development!\n\n// Rarely, --watch will stop working so sometimes you just need to quit and restart webpack \n\n//TODO: Remove Animal!\n// window.Animal = pi.Animal; // Add to the window to test the function (do this for almost everything you write)\n// However, we DO NOT want these to still be exposed to the user when we're done testing!\n\ndocument.addEventListener(\"DOMContentLoaded\", () => { // Casing is important on DOMContentLoaded, 2nd arg is a callback\n    const canvEle = document.getElementById(\"canvas\");\n    // debugger\n    canvEle.width = 500;\n    canvEle.height = 500;\n\n    const ctx = canvEle.getContext(\"2d\");\n\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, 500, 500);\n\n    ctx.beginPath();\n    ctx.strokeStyle = \"blue\";\n    ctx.arc(250,250,80,0,2 * Math.PI);\n    ctx.stroke();\n})\n\n//# sourceURL=webpack:///./canvas.js?");

/***/ }),

/***/ "./currying.js":
/*!*********************!*\
  !*** ./currying.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function boringAddThreeNumbers(num1, num2, num3) {\n    return num1 + num2 + num3;\n}\n\n// currying saves arguments and invokes function when args have been collected\nfunction addThreeNumbers(firstNum) {\n    return function (secondNum) {\n        return function (thirdNum) {\n            return firstNum + secondNum + thirdNum;\n        };\n    };\n}\n\nconst addThreeNumbersAgain = num1 => {\n    return num2 => {\n        return num3 => {\n            return num1 + num2 + num3;\n        };\n    };\n};\n\nfunction continuousAdd() {\n    const args = [];\n    return function _curriedAdd(num) {\n        args.push(num);\n        console.log(args.reduce((acc, el) => {\n            return acc + el;\n        }));\n        return _curriedAdd;\n    };\n} \n\nmodule.exports = { continuousAdd: continuousAdd }\n\n//# sourceURL=webpack:///./currying.js?");

/***/ }),

/***/ "./js_problems.js":
/*!************************!*\
  !*** ./js_problems.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Function.prototype.inherits = function (Parent) {\n    function Surrogate() { }\n    Surrogate.prototype = Parent.prototype;\n    this.prototype = new Surrogate();\n    this.prototype.constructor = this;\n};\n\nFunction.prototype.myBind = function (context, ...bindArgs) {\n    const that = this;\n    return function (...callArgs) {\n        return that.apply(context, bindArgs.concat(callArgs));\n    };\n};\n\nFunction.prototype.myCurry = function (numArgs) {\n    let nums = [];\n    let fcn = this;\n    return function _myCurry(el) {\n        nums.push(el);\n        if (nums.length < numArgs) {\n            return _myCurry;\n        } else {\n            return fcn(...nums);\n        }\n    };\n};\n\nFunction.prototype.myApply = function (context, args = []) {\n    return this.bind(context)(...args);\n    // We are invoking 2 different functions:\n    //      1st bind which returns bound function\n    //      then we are invoking that bound function with args\n};\n\nFunction.prototype.myCall = function (context, ...args) { // 'rest operator' - tells the function \"gather the REST of the args\"\n    return this.bind(context)(...args); // 'spread operator' - spread out the array\n}; \n\n// myCall / myApply / myBind should always be monkey-patched as they are functions defined on the Function object\n\n// Restrictions for the assessment: \n//      no fat arrow in myBind\n//      no Object.create or ES6 class syntax for inheriting\n\nconst myCurry = function (fcn, numArgs) {\n    let nums = [];\n    return function _myCurry(el) {\n        nums.push(el);\n        if (nums.length < numArgs) {\n            return _myCurry;\n        } else {\n            return fcn(...nums);\n        }\n    };\n};\n\nconst callbackFunc = function (callback) {\n    if (typeof callback === \"undefined\") { // using typeof protects against errors that occur when the variable hasn't been declared\n        callback = function(){}\n    }\n}\n\nfunction merge(left, right, comparator) {\n    let merged = [];\n    while (left.length && right.length) {\n        switch (comparator(left[0], right[0])) {\n            case -1:\n                merged.push(left.shift());\n                break;\n            case 0:\n                merged.push(left.shift());\n                break;\n            case 1:\n                merged.push(right.shift());\n                break;\n        }\n    }\n    merged = merged.concat(left, right);\n    return merged;\n}\n// Javascript switch/case statements are weird: \n//      It looks at the condition from top to bottom\n//      Once it finds a matching case, it executes that case AND\n//          EVERY CASE AFTER IT\n//      The break tells it to not execute subsequent statements\n\n// POJO (Plain Old Javascript Object) necessary for module.exports\nmodule.exports = { myCurry: myCurry }\n\n//# sourceURL=webpack:///./js_problems.js?");

/***/ }),

/***/ "./prototypal_inheritance.js":
/*!***********************************!*\
  !*** ./prototypal_inheritance.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Animal(name) {\n    this.name = name;\n    console.log(this.name);\n}\n\nAnimal.prototype.eat = function () {\n    console.log(this.name + ' is eating.');\n};\n\nfunction Cat(name) {\n    this.name = name;\n    Animal.call(this, name);\n}\n\nfunction Surrogate() { }\nSurrogate.prototype = Animal.prototype;\nCat.prototype = new Surrogate();\nCat.prototype.constructor = Cat;\n\nconst newAnimal = new Animal(\"Bob\");\n\nmodule.exports = { Animal: Animal, Cat: Cat, newAnimal: newAnimal };\n\n//# sourceURL=webpack:///./prototypal_inheritance.js?");

/***/ })

/******/ });