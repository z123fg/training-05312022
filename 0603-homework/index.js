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
function matrix(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                console.log(" 1 ");
            } else {
                console.log(" 0 ")
            }
        }
        console.log('----------');
    }
}

matrix(4);


// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4

function secondLowestAndGreated(arrNum) {
    arrNum.sort(function(x, y){
        return x - y;
    });

    let compareNum = [arrNum[0]];
    let result = [];

    for (let i = 1; i < arrNum.length; i++) {
        if (arrNum[i - 1] !== arrNum[i]) {
            compareNum.push(arrNum[i])
        }
    }
    result.push(compareNum[1], compareNum[compareNum.length - 2])
    result.join(',');
    return result;
}

console.log(secondLowestAndGreated([1,2,3,4,5]))


// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
// 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function isPerfect(num) {
    let current = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            current += i;
        }
    }

    if (current === num && current !== 0) {
        console.log("It is a perfect number.")
    } else {
        console.log("It is not a perfect number.")
    }
}

isPerfect(6);
isPerfect(28);

// 13. Write a JavaScript function to compute the factors of a positive integer. 
function factorsOfPositiveInteger(num) {
    let numberOfFactors = [];

    for (let i = 1; i < Math.floor(Math.sqrt(num)); i += 1)
    if (num % 2 === 0) {
        numberOfFactors.push(i);
        if (num / i !== i)
        numberOfFactors.push(num / i)
    }

    numberOfFactors.sort(function(x, y){
         return x - y;  
    })
    return numberOfFactors;
}

console.log(factorsOfPositiveInteger(12));
console.log(factorsOfPositiveInteger(13));
console.log(factorsOfPositiveInteger(14));


// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1
function amountToCoins(amount, coins) {
    if (amount === 0) {
        return [];
    } else {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat( amountToCoins(left, coins) );
        } else {
            coins.shift();
            return amountToCoins(amount, coins);
        }
    }
}

console.log(amountToCoins(46, [25, 10, 5, 2,1]));
console.log(amountToCoins(25, [25, 10, 10, 1]));


// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function exponent(b, n) {
    let value = 1;
    for (let i = 1; i <= n; i++) {
        value = b * value;
    }
    return value;
}

console.log(exponent(2, 3));
console.log(exponent(3, 4));

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
function uniqChar(string) {
    let myString = string;
    let uniqueChar = "";

    for (let i = 0; i < myString.length; i++) {
        if (uniqueChar.indexOf(myString.charAt(i)) == -1) {
            uniqueChar += myString[i];
        }
    }
    return uniqueChar;
}

console.log(uniqChar("thequickbrownfoxjumpsoverthelazydog"));


// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function letterCounts(string) {

    if (string.length === 0) {
        console.log("Empty string");
        return;
    }
    
    for (let i = 0; i < string.length; i++) {
        let count = 0;
        for (let j = 0; j < string.length; j++) {
            if ( string[i] == string[j] && i > j) {
                break;
            }
            if ( string[i] == string[j]) {
                count++;
            }
        }
        if (count > 0) {
            console.log(`${string[i]} oours ${count} times`)
        }
    }
}

console.log(letterCounts("javascript"));
console.log(letterCounts("mommy"));


// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function binarySearch(arr, x) {
    // recursive search
    let start = 0;
    let end = arr.length -1;
    // base case
    if (start > end) return false;

    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === x) return true;

    if (arr[middle] > x) {
        return binarySearch(arr, x, start, middle - 1)
    } else {
        return binarySearch(arr, x, middle + 1, end)
    }
}

console.log(binarySearch([1, 3, 5, 7, 8, 9], 5));

// 19. Write a JavaScript function that returns array elements larger than a number. 
function returnLarger(arr, num) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > num) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(returnLarger([65, 16, 0, 6, 64, 1, 68], 17));
console.log(returnLarger([6, 46, 54, 6, 56, 54, 65, 4, 65], 50));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function generateString(length) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const characterLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characterLength));
    }

    return result;
}

console.log(generateString(7));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]
function subset(arra, arra_size)
 {
    let result_set = [], 
        result;
    
   
for(let x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}

console.log(subset([1, 2, 3], 2));


// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3
function letterCount(string, letter) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == letter) {
            count += 1
        }
    }
    return count;
}

console.log(letterCount("hello", "l"))


// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 
function firstNotRepeatedChar(string) {
    let array1 = string.split("");
    let result = "";
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        count = 0;

        for (let j = 0; j < array1.length; j++) {
            if (array1[i] === array1[j]) {
                count += 1;
            }
        }

        if ( count < 2) {
            result = array1[i];
            break;
        }
    }
    return result;
}

console.log(firstNotRepeatedChar("abacddbec"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(a)
{
    let swapp;
    let n = a.length-1;
    let x = a;
    do {
        swapp = false;
        for (let i = 0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
function longestName(words) {
    return words.reduce(function(lName, word){
        return lName.length > word.length ? lName : word;
    }, "")
}

console.log(longestName(["Australia", "Germany", "United States of America"]))


// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function longestSubstringWithoutRepeatingChars(input) {
    let chars = input.split('');
    let curr_char;
    let str = "";
    let longestString = "";
    var hash = {};
    for (var i = 0; i < chars.length; i++) {
    curr_char = chars[i];
    if (!hash[chars[i]]) 
    { 
    str += curr_char; 
    hash[chars[i]] = {index:i};
    }
    else 
    {
    if(longestString.length <= str.length)
    {
      longestString = str;
    }
    let prev_dupeIndex = hash[curr_char].index;
    let str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
    str = str_FromPrevDupe + curr_char;
    hash = {};
    for (var j = prev_dupeIndex + 1; j <= i; j++) {
    hash[input.charAt(j)] = {index:j};
    }
    }
    }
    return longestString.length > str.length ? longestString : str;
    }

    console.log(longestSubstringWithoutRepeatingChars("room with bubble"))
    console.log(longestSubstringWithoutRepeatingChars("google.com"))

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
// symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
// given string that is also a palindrome. For example, the longest palindromic substring of
// "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
// example, in the string "abracadabra", there is no palindromic substring with length greater than
// three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all
// substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.
function isPalindrome(str1) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
    }
    
    function longestPalindrome(str1){
    
    var max_length = 0,
    maxp = '';
    
    for(var i=0; i < str1.length; i++) 
    {
    var subs = str1.substr(i, str1.length);
    
    for(var j=subs.length; j>=0; j--) 
    {
    var sub_subs_str = subs.substr(0, j);
    if (sub_subs_str.length <= 1)
    continue;
    
    if (isPalindrome(sub_subs_str))
    {
    if (sub_subs_str.length > max_length) 
    {
    max_length = sub_subs_str.length;
    maxp = sub_subs_str;
    }
    }
    }
    }
    
    return maxp;
    }
    console.log(longestPalindrome("abracadabra"));
    
    console.log(longestPalindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 


// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function addStudent(id, refreshCallback)
{
    refreshCallback();  
}

function refreshStudentList() {
    console.log('Hello');
}

addStudent(1, refreshStudentList);

// 29. Write a JavaScript function to get the function name.
function abc() {
    console.log( arguments.callee.name );
}

abc();