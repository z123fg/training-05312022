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

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function alphabeticalOrder(string) {
    return string.split('').sort().join('')
}

console.log(alphabeticalOrder("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox
function uppercaseFirstLetter(string) {
    let arr = string.split(' ');
    let newArray = [];

    for (let i = 0; i < arr.length; i++){
        newArray.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
    }

    return newArray.join(' ')
}

console.log(uppercaseFirstLetter("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'
function findLongestWord(string) {
    let arr = string.split(" ");
    let longest = arr[0];

    for (let i = 0; i < arr.length; i++){
        if (longest.length < arr[i].length) {
            longest = arr[i];
        }
    }
        return longest;
}

console.log(findLongestWord('Web Development Tutorial'));


// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5
function countVowels(string){
    let vowels = 'aeiuoAEIOU';
    let count = 0;

    for (let i = 0; i < string.length; i++){
        if (vowels.indexOf(string[i]) !== -1) {
            count += 1;
        }
    }
    return count;
}

console.log(countVowels('The quick brown fox'));


// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// 素数/质数 - 大于1的整数中只能被1和它本身整除的数
function isPrime(num){
    if (num === 1) {
        return false;
    }  else if ( num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }
}

console.log(isPrime(7))

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function findDataType(arg){
    let types = [Object, Boolean, Function, Number, String, RegExp];

    if (typeof arg === "object" || typeof arg === "function") {
        for (let i = 0; i < types.length; i++) {
            if (arg instanceof types[i]) {
                return types[i]
            }
        }
    }
    return typeof arg;
}

console.log(findDataType("Hello"));
console.log(findDataType(undefined));
console.log(findDataType(true));


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.