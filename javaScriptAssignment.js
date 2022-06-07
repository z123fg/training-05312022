// 1. Write a JavaScript function that reverse a number.

function reverseNumber(num) {
    return parseInt(num.toString().split('').reduceRight((acc, curr) => acc + curr));
}

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?

function isPalindrome(str) {
    let reversed = str.split('').reduceRight((acc, curr) => acc + curr);
    return reversed === str;
}


// 3. Write a JavaScript function that generates all combinations of a string.


function generateAllStrings(str) {
    let allStrings = [];

    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            allStrings.push(str.slice(i, j));
        }
    }
    return allStrings;
}

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.

function getAlphabeticalOrder(str) {
    return str.split('').sort().join('');
}

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case.

function getUpperCase(str) {
    let arr = str.split(' ');
    let sentence = []

    arr.forEach((char) => {
        let firstChar = char[0].toUpperCase();
        let restOfWord = char.slice(1);
        sentence.push(firstChar.concat(restOfWord));
    })

    return sentence.join(' ');
}

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word

function findLongestWord(sen) {
    return sen.split(' ').reduce((a, b) => a.length > b.length ? a : b);
}

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function getNumOfVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count;
}

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function isPrime(num) {
    let squareRt = Math.sqrt(num);

    for (let i = 2; i <= squareRt; i++) {

        if (num % i === 0) return false;
    }

    return num > 1;
}

// 9. Write a JavaScript function which accepts an argument and returns the type. 

function getType(input) {
    return typeof input;
}

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function getMatrix(num) {
    let resArr = [];

    for (let i = 0; i < num; i++) {
        resArr[i] = [];
        for (let j = 0; j < num; j++) {
            if (i === j) {
                resArr[i][j] = 1;
            } else {
                resArr[i][j] = 0;
            };
        };
    };
    return resArr;
};

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

function getNums(arr) {
    let newArr = []
    let sorted = arr.sort((a, b) => a - b);
    newArr.push(sorted[1], sorted[sorted.length - 2])

    return newArr;
}

// 12. Write a JavaScript function which says whether a number is perfect.

function isPerfect(num) {
    let temp = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            temp += i;
        }
    }

    if (temp === num && temp !== 0) {
        return true;
    }
    else {
        return false;
    }
}

// 13. Write a JavaScript function to compute the factors of a positive integer. 

function getFactors(num) {
    let factors = [];

    for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            factors.push(i);
            if (num / i !== i) {
                factors.push(num / i);
            }
        }
    }

    return factors;

}

// 14. Write a JavaScript function to convert an amount to coins.

function convertToCoins(amount, coins) {
    if (amount === 0) {
        return [];
    }
    else if (amount >= coins[0]) {
        left = (amount - coins[0]);
        return [coins[0]].concat(convertToCoins(left, coins));
    }
    else {
        coins.shift();
        return convertToCoins(amount, coins);
    }
}

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

function getExp(b, n) {
    let res = 1;

    for (let i = 1; i <= n; i++) {
        res *= b;
    }

    return res;
}

// 16. Write a JavaScript function to extract unique characters from a string. 

function getUniqueChars(str) {
    let uniqueChars = [];

    str.split('').forEach(char => {
        if (uniqueChars.includes(char)) {
            return;
        } else {
            uniqueChars.push(char);
        }
    })


    return uniqueChars.join('');
}

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

function getNumOfChars(str) {
    let obj = {};

    str.split('').forEach(char => {
        if (obj[char]) {
            obj[char]++
        } else {
            obj[char] = 1;
        }
    })

    return obj;
}

// 18. Write a function for searching JavaScript arrays with a binary search.

function array_binarySearch(narray, delement) {
    let mposition = Math.floor(narray.length / 2);

    if (narray[mposition] === delement) {
        return mposition;
    }
    else if (narray.length === 1) {
        return null;
    }
    else if (narray[mposition] < delement) {
        let arr = narray.slice(mposition + 1);
        let res = array_binarySearch(arr, delement);
        if (res === null) {
            return null;
        }
        else {
            return mposition + 1 + res;
        }
    }
    else {
        let arr1 = narray.slice(0, mposition);
        return array_binarySearch(arr1, delement);
    }
}

// 19. Write a JavaScript function that returns array elements larger than a number. 

function getElementsLargerThanNum(arr, num) {
    return arr.filter(elements => elements > num);
}

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.

function generateString(len) {
    let randomStr = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < len; i++) {
        let random = chars.charAt(Math.floor(Math.random() * chars.length));
        randomStr += random
    }

    return randomStr;
}

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.

function getSubsets(arr, arrSize) {
    let resultArr = [];

    for (let x = 0; x < Math.pow(2, arr.length) - 1; x++) {

        let result = [];
        i = arr.length - 1;
        do {
            if ((x & (1 << i)) !== 0) {
                result.push(arr[i]);
            }
        } while (i--);

        if (result.length >= arrSize) {
            resultArr.push(result);
        }
    }

    return resultArr;
}

// 22. Write a JavaScript function that accepts two arguments, a string and a letter 
// and the function will count the number of occurrences of the specified letter within the string.

function getNumOfCharsInString(str, char) {
    let count = 0;

    str.split('').forEach(letter => {
        if (letter === char) {
            count++
        }
    })

    return count;
}

// 23. Write a JavaScript function to find the first not repeated character.

function getFirstNonRepeatedChar(str) {
    let obj = {};

    str.split('').forEach(char => {
        if (obj[char]) {
            obj[char]++
        } else {
            obj[char] = 1
        }
    })

    for (let key in obj) {
        if (obj[key] === 1) {
            return key
        }
    }
}

// 24. Write a JavaScript function to apply Bubble Sort algorithm.

function bubble_Sort(a) {
    let swapp;
    let n = a.length - 1;
    let x = a;
    do {
        swapp = false;
        for (let i = 0; i < n; i++) {
            if (x[i] < x[i + 1]) {
                let temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;
}

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

function getLongestCountry(arr) {
    return arr.reduce((prev, curr) => prev.length > curr.length ? prev : curr);
}

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

function findLongestSubstring(str) {
    let i;
    let len = str.length;
    let st = 0;
    let currlen;
    let maxlen = 0;
    let start;
    let pos = new Map();

    pos.set(str[0], 0);

    for (let i = 1; i < len; i++) {

        if (!pos.has(str[i]))
            pos.set(str[i], i);

        else {
            if (pos.get(str[i]) >= st) {

                currlen = i - st;
                if (maxlen < currlen) {
                    maxlen = currlen;
                    start = st;
                }

                st = pos.get(str[i]) + 1;
            }

            pos.set(str[i], i);
        }
    }

    if (maxlen < i - st) {
        maxlen = i - st;
        start = st;
    }

    return str.substr(start, maxlen);
}

// 27. Write a JavaScript function that returns the longest palindrome in a given string.

function is_Palindrome(str1) {
    let rev = str1.split("").reverse().join("");
    return str1 == rev;
}

function longest_palindrome(str1) {

    let max_length = 0,
        maxp = '';

    for (let i = 0; i < str1.length; i++) {
        let subs = str1.substr(i, str1.length);

        for (let j = subs.length; j >= 0; j--) {
            let sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1)
                continue;

            if (is_Palindrome(sub_subs_str)) {
                if (sub_subs_str.length > max_length) {
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }

    return maxp;
}

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter
// The greet function is being passed as a parameter to this name function.

function greet() {
    return 'Hello';
}

function name(user, func) {
    const message = func();
    console.log(`${message} ${user}`);
}

name('John', greet);

// 29. Write a JavaScript function to get the function name.

function getFunctionName() {
    return arguments.callee.name;
}



