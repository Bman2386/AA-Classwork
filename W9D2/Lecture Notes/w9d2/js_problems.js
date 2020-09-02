Function.prototype.inherits = function (Parent) {
    function Surrogate() { }
    Surrogate.prototype = Parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};

Function.prototype.myBind = function (context, ...bindArgs) {
    const that = this;
    return function (...callArgs) {
        return that.apply(context, bindArgs.concat(callArgs));
    };
};

Function.prototype.myCurry = function (numArgs) {
    let nums = [];
    let fcn = this;
    return function _myCurry(el) {
        nums.push(el);
        if (nums.length < numArgs) {
            return _myCurry;
        } else {
            return fcn(...nums);
        }
    };
};

Function.prototype.myApply = function (context, args = []) {
    return this.bind(context)(...args);
    // We are invoking 2 different functions:
    //      1st bind which returns bound function
    //      then we are invoking that bound function with args
};

Function.prototype.myCall = function (context, ...args) { // 'rest operator' - tells the function "gather the REST of the args"
    return this.bind(context)(...args); // 'spread operator' - spread out the array
}; 

// myCall / myApply / myBind should always be monkey-patched as they are functions defined on the Function object

// Restrictions for the assessment: 
//      no fat arrow in myBind
//      no Object.create or ES6 class syntax for inheriting

const myCurry = function (fcn, numArgs) {
    let nums = [];
    return function _myCurry(el) {
        nums.push(el);
        if (nums.length < numArgs) {
            return _myCurry;
        } else {
            return fcn(...nums);
        }
    };
};

const callbackFunc = function (callback) {
    if (typeof callback === "undefined") { // using typeof protects against errors that occur when the variable hasn't been declared
        callback = function(){}
    }
}

function merge(left, right, comparator) {
    let merged = [];
    while (left.length && right.length) {
        switch (comparator(left[0], right[0])) {
            case -1:
                merged.push(left.shift());
                break;
            case 0:
                merged.push(left.shift());
                break;
            case 1:
                merged.push(right.shift());
                break;
        }
    }
    merged = merged.concat(left, right);
    return merged;
}
// Javascript switch/case statements are weird: 
//      It looks at the condition from top to bottom
//      Once it finds a matching case, it executes that case AND
//          EVERY CASE AFTER IT
//      The break tells it to not execute subsequent statements

// POJO (Plain Old Javascript Object) necessary for module.exports
module.exports = { myCurry: myCurry }