// 1. Write a JavaScript function that reverse a number.
function reverseNum(num) {
    num = num + '';
    return num.split('').reverse().join('');
}

console.log(reverseNum(32243))

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run
function palindrome(string) {
    // step 1. Lowercase the input and remove all unwanted characters
    let cleanString = /[^A-Za-z0-9]/g;
    let lowercaseString = string.toLowerCase().replace(cleanString, '');
    
    // step 2. reverse the output string from step 1
    let reversedString = lowercaseString.split('').reverse().join('');

    // step 3. compare and return a boolean value
    return reversedString === lowercaseString;
}

console.log(palindrome("madam"));
console.log(palindrome("nurses"));

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g
function generatesAllCombo(string) {
    let result = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length + 1; j++){
            result.push(string.slice(i, j))
        }
    }
    return result;
}

console.log(generatesAllCombo("dog"));