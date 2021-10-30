let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]

const add = (a, b) => {return a + b}
console.log(numbers.reduce(add)) //15
// reduce takes a function to reduce the array with and a variable to add, if null does not add

console.log(Math.min(...numbers)) // 1

console.log(Math.max(...numbers)) // 5

console.log(Math.pow(2,3)) // 8

console.log(Math.abs(-2)) // 2

setTimeout(() => {console.log('done')}, 2000) // prints done after 2,000 miliseconds

function resolveAfter2Seconds() {
    return new Promise(resolve => { //promises accept 2 arguments resolve, reject
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
}

asyncCall();

var longestCommonPrefix = function (strs) {
    if (strs.length < 2) return strs.join('');
    if (strs[0].length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) { // if strs[i] = flow && prefix = flower, strs[i].indexOf(prefix) = -1
            prefix = prefix.substring(0, (prefix.length - 1)) // removes last letter until prefix is in string
            if (!prefix) return ""
        }
    }
    return prefix
};

//add some stuff