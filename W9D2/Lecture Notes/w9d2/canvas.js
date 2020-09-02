// Our "entry file" - webpack can really only look at one file (and then into its required files)
const curry = require("./currying");
const pi = require("./prototypal_inheritance");
const jsprobs = require("./js_problems");
// Browsers don't "understand" require statements, which is one major reason we need webpack!
// Advantage 2: "mini-fies" our code: reduces space it takes by reducing length of variable names and getting rid of line breaks
// NOTE: don't open bundle.js - it's ALL of your code and can be too much for VSCode to color-code and check

// Webpack - good for development and production! 
//  gives versatility to set up multiple files/requires/etc during development
//  Can set up to transpile code so it will be compatible cross-browser - SUPER helpful for production
//  Minified code is as space-efficient as possible, good for both
//  It's also keeping the variables from being exposed to the window (though we could do this manually)

// Webpack will not include any debuggers when run in production mode! - A good thing, but we need to be able to use them in development!

// Rarely, --watch will stop working so sometimes you just need to quit and restart webpack 

//TODO: Remove Animal!
// window.Animal = pi.Animal; // Add to the window to test the function (do this for almost everything you write)
// However, we DO NOT want these to still be exposed to the user when we're done testing!

document.addEventListener("DOMContentLoaded", () => { // Casing is important on DOMContentLoaded, 2nd arg is a callback
    const canvEle = document.getElementById("canvas");
    // debugger
    canvEle.width = 500;
    canvEle.height = 500;

    const ctx = canvEle.getContext("2d");

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 500);

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.arc(250,250,80,0,2 * Math.PI);
    ctx.stroke();
})