class Clock {
    constructor() {
      const date = new Date();
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      this.printTime(setInterval(() => { this._tick(); }, 1000));
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.
    }
  
    printTime() {
        let time = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(time);
      // Format the time in HH:MM:SS
      // Use console.log to print it.
    }
  
    _tick() {
        //loop if seconds < 60, minutues +=1
      this.seconds++;
      this.printTime();
      // 1. Increment the time by one second.
      // 2. Call printTime.
    }
  }
  
  // const clock = new Clock();

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
      (sum === undefined) ? sum = 0 : "";
      if(numsLeft < 1){
       return completionCallback(sum);
      }
      reader.question("Enter a number", (res) => {
        const num = parseInt(res);
        sum += num;
        console.log(sum);
        numsLeft -= 1;
        addNumbers(sum, numsLeft, completionCallback);
      })
      
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));



function absurdBubbleSort(arr, sortCompletionCallback){
    function outerBubbleSortLoop(madeAnySwaps) {
      // Begin an inner loop if you made any swaps. Otherwise, call
      // `sortCompletionCallback`.
    if(madeAnySwaps){
      // for (let i = 0; i < arr.length; i++) {
      //     for (let j = 1; j < arr.length - 1; j++){
      //     askIfGreaterThan(arr[i], arr[j], function(ele){ swaps(i, i+1, arr, ele)})
      //   }
      // }
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }else{
        sortCompletionCallback(arr)
      }
    }
    outerBubbleSortLoop(true);
    
}

function askIfGreaterThan(el1, el2, callback){
  reader.question(`Is ${el1} greater than ${el2} \n`, (res) => {
    const num = parseInt(res);
    const greaterThan = res
    if(res === 'yes'){
      callback(true);
    }
    if(res === 'no'){
      callback(false);
    }
  });
}


const swaps = function(i, i2, arr, status, outerBubbleSortLoop){
    if (status) {
      [arr[i], arr[i2]] = [arr[i2], arr[i]]; 
    }
    console.log(arr);
    
    innerBubbleSortLoop(arr, i2, status, outerBubbleSortLoop);
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
    // Do an "async loop":
   // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
   //    know whether any  swap was made.
//   // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
//    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
// //    continue the inner loop. You'll want to increment i for the
   //    next call, and possibly switch madeAnySwaps if you did swap.

    (i === undefined) ? i = 0 : "";

    if (i === (arr.length - 1)) {
      console.log("IF STATEMENT")
      outerBubbleSortLoop(madeAnySwaps);
    }else {
      console.log(arr);
      askIfGreaterThan(arr[i], arr[i + 1], function(ele){ swaps(i, i+1, arr, ele, outerBubbleSortLoop)});
    }
    
}

// absurdBubbleSort([3, 2, 1], function(arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });


class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
//   turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  boundTurnOn();
 // should say "Turning on a lamp"
Lamp.prototype.myBind =  function(func){
    // func(ele);
}

// const myBoundTurnOn = turnOn.myBind(lamp);

  

  myBoundTurnOn(); // should say "Turning on a lamp"





