// Function.prototype.inherits = function (ParentClass) { 
//     function Pseudo(){};
//     Pseudo.prototype = ParentClass.prototype;
//     this.prototype = new Pseudo();
//     this.prototype.constructor = this;
//  };

const Util = {
    inherits(ChildClass, ParentClass) {
        function Pseudo() { };
        Pseudo.prototype = ParentClass.prototype;
        ChildClass.prototype = new Pseudo();
        ChildClass.prototype.constructor = ChildClass;
    },
// Return a randomly oriented vector with the given length.
    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
// Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }
     
};

module.exports = Util;
