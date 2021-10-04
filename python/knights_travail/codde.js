// console.log('hello world')

/*
Given a string containing a sentence, write a method that reverses each word in the sentence,
 while still preserving whitespace and the original word order. For example, an input of `"Let's join the contest"` would return `"s'teL nioj eht tsetnoc"`.
*/

const reverseSentence = (sentence) => {
    const splitSentence = sentence.split(' ')
    const reversedSentence = []
    for (let i = 0; i < splitSentence.length; i++){
        let split = splitSentence[i].split('').reverse()
        reversedSentence.push(split.join(''))
    }

    return reversedSentence.join(' ')
}

// const reverseWord  = (word) => {
//     const reversed = [];
//     for (let i = 0; i < word.length; i++){
//         reversed.unshift(word[i])
//     }
//     return reversed.join('')
// }
console.log(reverseSentence("Let's join the contest") === "s'teL nioj eht tsetnoc");
console.log(reverseSentence("Let's join the  contest") === "s'teL nioj eht  tsetnoc")