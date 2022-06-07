// A JS Function that reverse a number
const question1 = (num) => {
    // convert number to array of string => use reverse() function => convert arrary to string => convert string to num
    return Number(String(num).split('').reverse().join(''));
}
console.log("Question 1: ", question1(32456123));

// A JS function that checks whether a passed string is palindrome
const question2 = (str) => {
    // check if first and last string are same
    const strLength = str.length;
    for (let i = 0; i < strLength / 2; i++ ){
        if (str[i] !== str[strLength - 1 - i]) {
            return "It is not a palindrome";
        }
    }
    return "It is a palindrome";
}
console.log("Question 2:\n", question2("long"),"\n", question2("madam"))

// A JS Function that generates all combinations of a string
const question3 = (str) => {
    let combinations = [];
    for(let i = 0; i < str.length; i++){
        for(let j = i+1; j < str.length+1; j++){
            combinations.push(str.slice(i,j));
        }
    }
    return combinations;
}
console.log("Question 3: ", question3("doggo"));

// A JS Function that returns a passed string with letters in alphabetical order
const question4 = (str) => {
    return str.split('').sort().join('');
}
console.log("Question 4: ", question4("webmastermd"));

// A JS Function  that accepts a string as a parameter and converts the first letter of each word of the string in upper case
const question5 = (str) => {
    let tempArr = str.split(' ');
    let result = [];
    for (let i = 0; i < tempArr.length; i++){
        result.push(tempArr[i].charAt(0).toUpperCase() + tempArr[i].slice(1));
    }
    return result.join(' ');
}
console.log("Question 5: ", question5("the quick brown fox"));

// A JavaScript function that accepts a string as a parameter and find the longest word within the string
const question6 = (str) => {
    let listOfWords = str.split(' ');
    let longestWord = "";
    for (let i = 0 ; i < listOfWords.length; i++){
        listOfWords[i].length > longestWord.length && (longestWord = listOfWords[i]);
    }
    return longestWord;
}
console.log("Question 6: ", question6("Web Development Tutorial"));

// A JavaScript function that accepts a string as a parameter and counts the number of vowels within the string
const question7 = (str) => {
    let vowels= 'aeiouAEIOU';
    let vcount = 0;

    for (let i = 0; i < str.length; i++){
        if(vowels.indexOf(str[i]) !== -1){
            vcount+=1;
        }
    };
    return vcount;
}
console.log("Question 7: ", question7("The quick brown fox"))

// A JavaScript function that accepts a number as a parameter and check the number is prime or not.
const question8 = (n) => {
    if (n === 1){
        return false;
    } else if (n===2){
        return true;
    } else {
        for(let i = 2; i < n; i++){
            if(n% i ===0){
                return false;
            }
        }
        return true;
    }
}
console.log("Question 8: ", question8(13));

// A JavaScript function which accepts an argument and returns the type. 
const question9 = (value) => {
    let dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    if (typeof value === "object" || typeof value === "function"){
        for(let x = 0, len = dtypes.length; x < len; x++){
            if( value instanceof dtypes[x]){return dtypes[x];}
        }
    }
    return typeof value;
}
console.log("Question 9:\n", question9("13"), "\n", question9(false));

// A JavaScript function which returns the n rows by n columns identity matrix
const question10 = (n) => {
    let i,j;
    for (i=0; i < n; i++){
        for (j=0; j < n; j++){
            if (i === j){
                console.log(' 1 ');
            } else {
                console.log(' 0 ');}
            }
        console.log('----------');
    }
}
console.log("Question 10: ", question10(3));

// a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively
const question11 = (arr_num) => {
    arr_num.sort(function(x,y) {  
        return x-y;
    });  
    
    var uniqa = [arr_num[0]];  
    var result = [];  
    
    for(var j=1; j < arr_num.length; j++) {  
        if(arr_num[j-1] !== arr_num[j]) {
            uniqa.push(arr_num[j]);  
        }  
    }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
    return result.join(',');  
}
console.log("Question 11: ", question11([3,21,42,12,32]));

// A JavaScript function which says whether a number is perfect.
const question12 = (number) => {
    var temp = 0;
    for(var i=1;i<=number/2;i++){
        if(number%i === 0){
            temp += i;
        }
    };
   
    if(temp === number && temp !== 0){
       return "It is a perfect number.";
    } else {
       return "It is not a perfect number.";
    }   
}
console.log("Question 12 : ", question12(13));

// A JavaScript function to compute the factors of a positive integer
const question13 = (num) => {
    let numFactors = [];
    for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++){
        if (num%i ===0){
            numFactors.push(i);
            if (num/i !==i){numFactors.push(num/i)}
        }
    }
    return numFactors;
}
console.log("Question 13: ", question13(5));

// A JavaScript function to convert an amount to coins
const question14 = (amount,coins) => {
    if (amount === 0 ) {return []}
    else {
        let left;
        if ( amount  >= coins[0]){
            left = amount - coins[0]; 
            return [coins[0]].concat( question14(left, coins) );
        }
        else {
            coins.shift();
            return question14(amount, coins);
        }
    }
}
console.log("Question 14: ", question14(53, [25,2,1]));

// A JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
const question15 = (b, n) => {
    let ans = 1;
    for (let i =1; i <= n; i++){
        ans = b * ans;        
    }
    return ans;
}

console.log("Question 15: ", question15(2,4));

// A JavaScript function to extract unique characters from a string
const question16 = (str) => {
    let unqStr = "";
    for (let i = 0 ; i < str.length; i++){
        if(unqStr.indexOf(str.charAt(i)) == -1){
            unqStr +=str[i];
        }
    }
    return unqStr;
}
console.log("Question 16: ", question16('thequickbrownfoxjumpsoverthelazydog'));

// A JavaScript function to get the number of occurrences of each letter in specified string.
const question17 = (string) => {
    let string1 = string.split("").sort().join("");
    let counter = 1;
    for (let i = 0; i < string.length; i++) {
      if (string1[i] == string1[i + 1]) {
        counter++;
      } else {
        console.log(string1[i] + " " + counter);
        counter = 1;
      }
    }
}
console.log("Question 17: ");
question17("thequickbrownfoxjumpsoverthelazydog");

// a function for searching JavaScript arrays with a binary search.

const question18 = (narray, delement) => {
    let mposition = Math.floor(narray.length/2);
    if (narray[mposition] === delement){return mposition}
    else if (narray.length===1){
        return null;
    } else if ( narray[mposition] < delement ){
        // search second half
        let arr = narray.slice(mposition+1);
        let res = question18(arr,delement);
        if(res === null) {return null}
        else {return mposition + 1 + res;}
    } else {
        // search first half
        let arr1 = narray.slice(0, mposition);
        return (question18(arr1, delement));
    }
}
var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log("Question 18: ",question18(myArray, 6));

// A JavaScript function that returns array elements larger than a number.
const question19 = (arr, num) => {
   return arr.filter(n => n > num);
}
console.log("Question 19: ", question19([65, 16, 0, 6, 64, 1, 68], 16))

// A JavaScript function that generates a string id (specified length) of random characters
const question20 = (length) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
console.log("Question 20: ", question20(10));

// A JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.

const question21 = (arr, size) => {
    var result_set = [], result;
    for(var x = 0; x < Math.pow(2, arr.length); x++)
    {
        result = [];
        i = arr.length - 1; 
        do {
            if( (x & (1 << i)) !== 0){
                result.push(arr[i]);
            }
        } while(i--);
        if( result.length >= size){
            result_set.push(result);
        }
    }

    return result_set; 
}
console.log("Question 21: ", question21([1, 2, 3], 2));

// JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string
const question22 = (string, letter) => {
    let letter_Count = 0;
    for (let position = 0; position < string.length; position++) {
        if (string.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}
console.log("Question 22: ", question22('notmeeeee', 'e'));

// a JavaScript function to find the first not repeated character.
const question23 = (str) => {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
          return char;
        }
      }
      return "";
}
console.log("Question 23: ", question23('abacddbec'))

//a JavaScript function to apply Bubble Sort algorithm
const question24 = (arr) => {
    for(var i = 0; i < arr.length; i++){
     
        // Last i elements are already in place  
        for(var j = 0; j < ( arr.length - i -1 ); j++){
            
          // Checking if the item at present iteration 
          // is greater than the next iteration
          if(arr[j] > arr[j+1]){
              
            // If the condition is true then swap them
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j+1] = temp
          }
        }
      }
      // Print the sorted array
     return arr;
}
console.log("Question 24: ", question24([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// a JavaScript function that accept a list of country names as input and returns the longest country name as output
const question25 = (arr) => {
    return arr.reduce(
        function (a, b) {
            return a.length > b.length ? a : b;
        }
    );
}
console.log("Question 25: ", question25(["Australia", "Germany", "United States of America"]));

// a JavaScript function to find longest substring in a given a string without repeating characters.
const question26 = (s) => {
    // Initialise a set to store the longest string in
    let longestStringLength = 0;
    let longestStringSet;
    // Loop through the provided string
    for (let i = 0; i < s.length; i++) {
        // Initialise a set to store the string created from the current point
        let currentStringSet = new Set();

        // Loop through the letters from the current point
        for (let x = i; x < s.length; x++) {
            // Check if the current letter exists in the current Set
            if (currentStringSet.has(s[x])) {
                // Move on from the current letter without adding it (as it already exists in the set)
                break;
            } else {
                // Character not found, add it to the set
                currentStringSet.add(s[x]);
            }
        }

        // Update the longest string length (if this one was bigger)
        longestStringLength = Math.max(
            longestStringLength,
            currentStringSet.size
        );
        longestStringSet = currentStringSet
    }

    return longestStringLength;
}
console.log("Question 26: ", question26("google.com"));

// A JavaScript function that returns the longest palindrome in a given string
const quesiton27 = (str1) => {
    function is_Palindrome(str1) {
        var rev = str1.split("").reverse().join("");
        return str1 == rev;
    }
    var max_length = 0,
    maxp = '';

    for(var i=0; i < str1.length; i++) {
        var subs = str1.substr(i, str1.length);
        for(var j=subs.length; j>=0; j--) {
            var sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1) continue;
            if (is_Palindrome(sub_subs_str)){
                if (sub_subs_str.length > max_length) {
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }

    return maxp;
}
console.log("Question 27: ", quesiton27('abracadabra'));

// a JavaScript program to pass a 'JavaScript function' as parameter

const question28 = (fn) => {
   return fn;
}
console.log("Question 28: ", question28(() => {console.log("hello world")}));

// A JavaScript function to get the function name 
const question29 = () => {
    console.log( arguments.callee.name );
}

console.log("Question 29: ", question29());