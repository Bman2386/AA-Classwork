
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


console.log(reverseSentence("Let's join the contest") === "s'teL nioj eht tsetnoc");
console.log(reverseSentence("Let's join the  contest") === "s'teL nioj eht  tsetnoc");

var removeOccurrences = function (s, part) {

    while (s.includes(part)) {
        let idx = s.indexOf(part)
        let split = s.split('')
        split.splice(idx, part.length)
        s = split.join('')
    }
    return s
};

/*
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).
*/

var isMatch = function (s, p) {
    return new RegExp(`^${p}$`).test(s)
};

console.log('aa', 'a') // false "a" does not match the entire string "aa".
console.log('aa', 'a*') // true '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

var isValid = function (s) {
    if (s.length % 2 !== 0) return false
    const listOpen = ['(', '[', '{'];
    const listClose = [')', ']', '}'];
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (listOpen.includes(s[i])) {
            stack.push(s[i])
        }
        if (listClose.includes(s[i])) {
            let close = stack[stack.length - 1];
            if (listOpen.indexOf(close) === listClose.indexOf(s[i])) {
                stack.pop();
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};