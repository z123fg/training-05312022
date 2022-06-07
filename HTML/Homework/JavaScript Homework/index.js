/* 
1. Write a javascript function that reverse a number 
Example: x = 32243 
Expected Output 34223
*/

/* We are creating a variable that will hold the number we need to reverse  */
let number = 2345678; 
const revNumber = (number) => {
  /* here we are creating a variable that will hold the process to reverse the number.
    We are using parseInt which will take in a number and turn it into a string.
  */  
    const reverse = parseInt(
    // here we are turning the number variable on line 8 into a string with .toString()    
        number.toString()
    // we are then using the split method that will split the string into substrings into an array.   
        .split('')
    // we then use the reverse method to reverse the array that was made with the split method.    
        .reverse()
    // Then we are using the join method that will join the array together into a string. 
        .join('')
    );
    // we then return the reverse variable that is holding the entire process
    return reverse;
}
console.log(revNumber(number));

/*
2. Write a JavaScript function that checks wether a passed string is a palindrome
or not.
*/

// We are creating a function that is taking in a argument of the word we are checking
const palindrome = (word) => {
/*Here we are creating a the variable that will hold the process to check if the word
    is a palindrome
*/     
let strReverse = word.split('').reverse().join('')
/* Here we are creating a conditional check on the word that will be passed 
as an argument. We are saying if the word is equal to the variable on line 38
we will return a string saying that the word is a palindrome. If it's not a palindrome
we will return a string telling the user that it is not a palindrome
*/ 
    if(word === strReverse){
         return console.log('this word is a palindrome')
    } else {
        return console.log('this word is NOT a palindrome')
    }
}
console.log(palindrome('car'));

/*
3. Write a JavaScript function that generates all combinations of a string
Example string: 'dog'
output: d, do, dog, o, og, g
*/

const possibleCombinations = (str) => {
  /* We are creating a variable that will hold all the combinations of the string we pass to the function */  
    let combinations = [];
/* We will be using 2 for loops for this process.
=> Initially we will be setting i to the value of 0 if i is less than 0 we will ad 1 to it.
=> within the first for loop we are running the second for loop
=> In the second for loop we are setting j to equal i + 1 if j is less than str length we are adding 1 to it and incressing j by 1
=> within that second for loop we are calling the empty array we originally set up and pushing the results to the array.
=> In the argument for the push method we are passing in the string we are reciving and using the slice method
=> The slice method takes 2 arguments start and end. We are then passing in the i meaning the index that it is at as well as j the ending.
*/
    for(let i = 0; i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i, j));
        }
    }
    return combinations;
};
console.log(possibleCombinations('rat')); // output [ 'r', 'ra', 'rat', 'a', 'at', 't' ]


/* 
4. Write a javascript function that returns a passed string with letters in alphabetical order.
Example: 'webmaster'
Expected Output: 'abeemrstw'
*/


const sortWords = (word) => {
    /* 
    We are returning the word we are getting from the user and using the split method that will split each word in its own substring.
    We are also using the sort method that will sort the letters in a acending order. Right after that we will use the join method 
    to join all the split subtrings into 1 string.
    */
    return word.split('').sort().join('')
};

console.log(sortWords('apple')) // output aelpp



/* 
5. Write a javascript function that accepts a string as a prameter and converts the first letter of each word of the string in upper case.
Example: 'the quick brown fox'
Example output: 'The Quick Brown Fox'
*/

const firstLetter = (str) => {
   /* We are splitting the string before we loop through it */ 
    let splitString = str.split(' ')

   
/* I am using a for loop to loop through each item of the string
 for each item that is in the array we will do a few things.
 => 1. we will get each item that is in the array and get the charater at 0 with .charAt(0)
 => 2. we will then use the built in javascript function that makes that letter uppercase with the .toUpperCase()
 => 3. we will add the remaining letters with the slice method .slice(1)
*/
    for(let i = 0; i < splitString.length; i++){
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1)
    }

    /* Here I am creating a variable that will join the entire string for us with the join method .join(' ') */
    const joinString = splitString.join(' ')
    
    return joinString;
    
};

console.log(firstLetter('the quick brown fox')) // output The Quick Brown Fox






/*
6. Write a javascript function that accepts a string as a parameter and find the longest word within the string
Example: 'Web Development Tutorial'
Expected Output: 'Development'
*/

const longestWord = (str) => {
    /* We are creating a variable that will split the given string into substrings */
  const splitStr = str.split(' ')
    /* This variable will help us compare the amount of characters in a string */
  let longest = 0
/* this will hold the word that is the longets word */
  let word = ''

  /* Here we are using the for each method to execute something for each item that is in the array.
  in this case we are creating a conditional statement that will check if the longest variable is < the str.length 
  if it is less the str.length we will replace the value in the longest varaible. 
  we will also replace the empty string on line 112 with the word that is the longest. 
  */
    splitStr.forEach((string) => {
        if(longest < string.length){
            longest = string.length;
            word = string;
        }
    });

    return word;
};
console.log(longestWord('Web Development Tutorial')); // output Development


/* 7. Write a Javascript function that accepts a string as a prameter and counts the number of vowels within a string
Example: 'The quick brown fox'
Expected output: 5
*/

const vowelCounter = (str) => {
    /* I am saving the vowels that we are looking in each string */
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    /* I am creating a variable that will hold the ammount of vowels in a string */
    let count = 0;
    
   /* I am using a for in loop we set the variable to char for each item in the str
   Inside the for in loop we are conditiannly checking if the str has any of the vowels we are looking for if they do we
   are increasing the the amount in the count varaible.
   */ 
    for(let char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    return count;
};

console.log(vowelCounter('This sentence is awesome')); // output 9

/* 8. Write a JavaScript function that accepts a number as a parameter and check the number is
prime or not. */

const primeNumber = (number) => {
    const convertNumber = parseInt(number);

    for(let i = 2; i * i <= convertNumber; i++){
        if(convertNumber % i === 0){
        console.log('this is a prime number')
        } else {
            return console.log('this is NOT a prime number')
        }
    }
};

console.log(primeNumber('3'));

/* 9. Write a JavaScript function which accepts an argument and returns the type. */

const typeVariable = (str) => {
    /* We create a variable that is holding the the type of the argument we are receiving */
    const type = typeof(str)

    console.log(type)
}

typeVariable('something'); // output string

/* 10. Write a JavaScript function which returns the n rows by n columns identity matrix. */

/* 11. Write a JavaScript function which will take an array of numbers stored and find the second
lowest and second greatest numbers, respectively 
Sample array: [1,2,3,4,5]
Expected Output: 2,4
*/

const lowToHigh = (array) => {

    array.sort((x, y) => {
        console.log( x - y)
        return x - y;
    })

    const arrayI = [array[0]];
    let result = [];

    for(let i = 1; i < array.length; i++){

        // console.log('array[i] => ', array[i])

        if(array[i - 1] !== array[i]){

            console.log('arrayI => ', arrayI)

            arrayI.push(array[i])
        }
    }
    result.push(arrayI[1],arrayI[arrayI.length-2]);

    return result.join(',');
};

console.log(lowToHigh([1,2,3,4,5]));

/* 12. Write a JavaScript function which says whether a number is perfect. */

const isPerfect = (number) => {
    let temp = 0;

    for(let i = 1; i <= number/2; i++){
        if(number%i === 0){
            temp += i;
            // console.log('temp =>', temp);  
        }
    }
    if(temp === number && temp !== 0){
       return  console.log('This is a prefect number!')
    } else {
       return  console.log('This is not a perfect number')
    }
};

isPerfect(28);

/* 13. Write a JavaScript function to compute the factors of a positive integer. */

const factors = (number) => {

    let arr = [];
    for (let i = 0; i <= number; i++){
        if(number % i === 0){
            console.log(i);
            arr.push(i);
        }
    }
    return arr;
};

console.log(factors(15)); // output [ 1, 3, 5, 15 ]

/* 14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1 */

const amountTocoins = (amount, coins) => {
    let result = [];
    for(let i = 0; i <coins.length; i++){
        for(let j = 0; j < Math.floor(amount/coins[i]); j++){
            result.push(coins[i]);
            amount %= coins[i]
        }
        
    
    }

    return result;
};

console.log(amountTocoins(46, [25, 10, 5, 2, 1]))

/* 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
bases. Accept b and n from the user and display the result. */

const compute = (b, n) => {
    return Math.pow(b, n)
};

console.log(compute(2,3));


/* 16. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg" */

const uniqueCharacters = (str) => {
    let unique = ''

    for(let i = 0; i < str.length; i++){
        if(unique.indexOf(str[i]) === -1){
            unique += str[i];
        }
    }
    return unique;
};
console.log(uniqueCharacters('thequickbrownfoxjumpsoverthelazydog'));

/* 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. */

const letterOccurrences = (str) => {
    let count = 0;
    let unique = "", obj = {};
    for (let i = 0; i < str.length; i++) {

        if (str[i] === ' ') continue;

        let index = str.indexOf(str[i], 0);

        while (index != -1) {
            count++;
            index = str.indexOf(str[i], index + 1);
        }

        if (unique.indexOf(str[i]) === -1) {
            unique += str[i];
            console.log(str[i] + ": " + count);
        }
        count = 0;
    }

};

letterOccurrences('thequickbrownfoxjumpsoverthelazydog');

/* 18.  Write a function for searching JavaScript arrays with a binary search. */

const binarySearch = (array, element) => {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (array[mid] === element) return mid;
        else if (array[mid] < element) start = mid + 1;
        else end = mid - 1;
    }

    return "Element not found";

};

console.log(binarySearch([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 10)); 

/* 19. Write a JavaScript function that returns array elements larger than a number. */
const biggerElements = (array, element) => {
    let newArray = []

    for (let e of array) {
        if(e >= element) {
            newArray.push(e)
        }
    }
    return newArray;
};

console.log(biggerElements([11,80,100,200,300, 4, 2, 1, 10], 10));

/* 20.  Write a JavaScript function that generates a string id (specified length) of random characters  */
const createId = (char) => { 
    const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = ''

    for(let i = 0; i < char; i++ ){
        id += list.charAt(Math.floor(Math.random() * list.length))
    }

    return id;

}

console.log(createId(8));


/* 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
combinations in an array.  */

const subsets = (arr) => {
 let sub = []
 for(let i = 0; i < arr.length; i++){
     for(let j = i + 1; j < arr.length; j++){
         sub.push([arr[j], arr[i]]);
     }
 }
 return sub;
};

console.log(subsets([1,2,3]));

/* 22.  Write a JavaScript function that accepts two arguments, a string and a letter and the function
will count the number of occurrences of the specified letter within the string.
Sample arguments: 'microsoft.com', 'o'
*/

const findTheLetter = (str, letter) => {
    let count = 0

    for(const e of str){
        if(e === letter ){
            count++
        }
    }
    return count;
};

console.log(findTheLetter('microsoft.com', 'o'));

/* 23. Write a JavaScript function to find the first not repeated character.
Sample arguments: 'abacddbec' 
Expected output: 'e'
*/

const nonRepeatedCharacter = (str) => {
    let nonRepeatedLetter = ''
    let count = 0

    for(let i = 0; i < str.length; i++){
        let index = str.indexOf(str[i], 0);
        while(index != -1){
            count++;
            index = str.indexOf(str[i], index + 1);
        }
        if (count === 1) nonRepeatedLetter += str[i];
        count=0;
    }
    return nonRepeatedLetter;
};

console.log(' here',nonRepeatedCharacter('abacddbec'));

/* 24. Write a JavaScript function to apply Bubble Sort algorithm. */
const bubbleSort = (array) => {
    let temp = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
           if(array[j] < array[j + 1]){
            temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp
           }
        }
    }
    return array;
};

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

/* 25. Write a JavaScript function that accept a list of country names as input and returns the
longest country name as output. */
const countryNames = (arr) => {
    let maxName = arr[0].length;

    arr.map((e) => {
        maxName = Math.max(maxName, e.length);
        return maxName;
    })

    return arr.filter(e => maxName === e.length)[0]
};

console.log(countryNames(["Australia", "Germany", "United States of America"]));

/* 26. Write a JavaScript function to find longest substring in a given a string without repeating
characters. */

/* 27. Write a JavaScript function that returns the longest palindrome in a given string. */
const longestPalindrome = (str) => {
    let result = ''

    for(let i = 0; i< str.length; i++){
        for(let j = i + 2; j < str.length; j++){
            const tempStr = str.substring(i, j);
            const revTempStr = [...tempStr].reverse().join("");
            if(tempStr === revTempStr && tempStr.length > result.length) result = tempStr
        }

    }
    return result;
};
console.log(longestPalindrome('abracadabcccbra'));


/* 28. . Write a JavaScript program to pass a 'JavaScript function' as parameter. */
const addEmployee = (id, employee) => {
    employee()
};

const employee = () => {
    console.log('Hello I am a employee')
};

console.log(addEmployee(1, employee));

/* 29. Write a JavaScript function to get the function name. */