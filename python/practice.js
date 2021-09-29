let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]

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
