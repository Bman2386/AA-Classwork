var lengthOfLongestSubstring = function(s) {
    var length = s.length;
    if (length <= 1) {
        return length;
    }
    var p = 0;
    var q = 1;
    var result = 1;
    while (q < length) {
        var sub = s.slice(p, q);
        console.log(sub)
        var i = sub.indexOf(s[q]);
        console.log(i)
        if (i !== -1) {
            p = p + i + 1;
        }
        q++;
        result = q - p > result ? q - p : result;
    }
    return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"))

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let test = 1;   
    if (Math.max(...A) < 1) {
        return test;
    } else {
       while (A.includes(test)){
           test += 1
        } 
        return test
    }
}

function dec2bin(dec){
    let bi = (dec >>> 0).toString(2);
    let arr = bi.split('1')
    let count = 0;
    if(arr.length > 2){
         for (let i =1; i < arr.length - 1; i++){
        let test = arr[i];
        if( test.length > count){
            count = test.length
        }
        }
    }
   
    return count
}

function rotate(a, k){
    if (k > 0 && a.length > 1){
      let b = a.pop()
     a.unshift(b)  
    return rotate(a, k - 1)
    } else {
        return a
    }
}

function odd(arr){
    let hash = {};
    let ans;
    for (let i = 0; i < arr.length; i++){
        let temp = arr[i]
        if (hash[temp]){
            hash[temp].push(i)
        } else {
            hash[temp] = [i]
        }
        if (hash[temp].length === 1){
            ans = temp
        }
    }
    return ans
    
}