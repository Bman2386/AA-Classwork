function sum() {
    let total = 0
    for(let i = 0; i < arguments.length; i++) {
        //total.push(total[0] + arguments[i])
        total += arguments[i]
    }
    return total;
}

// console.log(sum(1, 2, 3, 4)) //=== 10;
// console.log(sum(1, 2, 3, 4, 5)) //=== 15;

function sumTwo(...nums) {
    let total = 0
    for(let i = 0; i < nums.length; i++) {
        total += nums[i]
    }
    return total
}
// console.log(sumTwo(1, 2, 3, 4))



class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
//   Function.prototype.myBind = function (ctx, ...bindArgs) {
//     return  (...callArgs) => {
//       return this.apply(ctx, bindArgs.concat(callArgs));
//     };
//   };

  Function.prototype.myBind = function (ctx) {
        let blah = this;
        let args = Array.from(arguments).slice(1);
        
        // console.log(arguments)
        return helperFunction = function() {
            let callArgs = Array.from(arguments);
           
            return blah.apply(ctx, args.concat(callArgs));
        };
  };

  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
// // //   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
// // //   // Pavlov says meow to Kush!
// // //   // true
  
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov)("meow", "a tree"); //WHAT ARE MEOW AND TREE?
//   // Pavlov says meow to a tree!
//   // true
  
// //   bind time arg is "meow", call time arg is "Markov"
  
//   let boundSays = markov.says.myBind(pavlov, "meow") //We are binding the context (pavlov) to the says function; we are also binding the first argument of the string of meow
//   boundSays("Markov"); //call-time arguments
//   boundSays("Andrew"); 
//   // Pavlov says meow to Markov!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true

function curriedSum(num) {
    let numbers = [];
    function _curriedSum(n) {
        numbers.push(n);
        if(numbers.length === num) {
            let total = 0;
            for(let i = 0; i < numbers.length; i++) {
                total += numbers[i];
            } 
            return total;
        } else {
        return _curriedSum;
        }
    }
    return _curriedSum;
}

// const cSum = curriedSum(4);
// console.log(cSum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
    let args = [];
    let func = this;
    return function _curriedSum(el) {
        args.push(el)
        if (args.length === numArgs) {
           return func(...args);
        } else {
            return _curriedSum;
        }
    }
   
}

let subtract3 = function(num3, num2, num1) {
    let result = num3;
    result -= num2;
    result -= num1;
    return result;
}

const curriedSubtract = subtract3.curry(3)

curriedSubtract(10)(5)(3)

// console.log(subtract3(10,5,2))
// const cSum = Function.prototype.curry(4);
// console.log(cSum(5)(30)(20)(1)); // => 56