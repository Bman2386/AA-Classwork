console.log('hello');
// ROT-N 0-25
// abc -> ROT-1 -> bcd
// abc -> ROT-2 -> cde
// xyz -> ROT-1 -> yza
// adz -> ROT-3 -> dgc
 //
// Given a list, find groups of strings that are rotations of each other.
// Input: ["abbc", "bccd", "cat", "zaab", "yell", "bzs", "catch"]
 
// Output: [ ["abbc", "bccd", "zaab"], ["cat", "bzs"] ]
/*
string - function each letter rotates by %26
if length of string !== next string
*/
function rotationSets(array){
  const answerArray = [];
  const alphabet = ['a','z'];
  i = 0;
  j= 1;
  while (i < array.length){
    let setOfMatches = [];
    // let testString = array[i];
    if (isRotationMatch(array[i], array[j])){
      setofMatches.push([array[i], array[j]]);
      answerArray.slice() //remove array[i] & array[j]
      j++;
    }
    if (j === array.length - 1){
      j = 0;
      i++;
      answerArray.push(setOfMatches);

    }
    // i++
    // j++
  }
  return answerArray
}

const isRotationMatch = (string1, string2) => {
  return string1.split('').length === string2.split('').length
}