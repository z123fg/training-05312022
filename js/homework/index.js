// #1. Write a JavaScript function that reverse a number.
const reverseNum = function(num) {
    let numStr = num.toString();
    let reversed = numStr.split("").reverse().join("");
    let result = parseInt(reversed);

    return result;
}

// #2. Write a JavaScript function that checks whether a passed string is palindrome or not?
const isPalindrome = function(str) {
    // remove all spaces as they dont affect whether or not a string is a palindrome
    let temp = str.replace(' ', '');
    let reversed = temp.split("").reverse().join("");
    return (temp === reversed);
}

// #3. Write a JavaScript function that generates all combinations of a string.
const getPermutations = function(str) {
    let combos = [];

    for (let i = 0;  i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            let curr = str.substring(i, j);
            combos.push(curr);
        }
    }

    return combos;
}

// #4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
const toAlphabeticalOrder = function(str) {
    return str.split("").sort().join("");
}

// #5. 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
//        each word of the string in upper case.
const properCasing = function(str) {
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1);
    }

    return words.join(" ");
}

// #6. Write a JavaScript function that accepts a string as a parameter and find the longest word
//     within the string.
const longestWord = function(str) {
    let words = str.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > result.length)
            result = words[i];
    }

    return result;
}

// #7. Write a JavaScript function that accepts a string as a parameter and counts the number of
//     vowels within the string.
const numVowels = function(str) {
    let num = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        let curr = str[i].toLowerCase();
        for (let j = 0; j  < vowels.length; j++) {
            if (curr === vowels[j]) {
                num++;
                break;
            }
        }
    }

    return num;
}

// #8. Write a JavaScript function that accepts a number as a parameter and check the number is
//     prime or not.
const isPrime = function(num) {
    // 2 is a prime number
    if (num === 2) {
        return true;
    }
    else if (num > 1) {
        const max = Math.floor(Math.sqrt(num));
        for (let i = 2; i <= max; i++) {
            if (num % i === 0)
                return false;
        }
    }
    // returns false if the number is 1 or lesser, as they are not prime
    else {
        return false;
    }

    return true;
}

// #9. Write a JavaScript function which accepts an argument and returns the type.
const getType = function(arg) {
    return typeof(arg);
}

// #10. Write a JavaScript function which returns the n rows by n columns identity matrix.
const createIdentityMatrix = function(n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        let temp = Array(n).fill(0);
        temp[i] = 1;
        result.push(temp);
    }

    return result;
}

// #11. Write a JavaScript function which will take an array of numbers stored and find the second
//      lowest and second greatest numbers, respectively.
const findSecondLowestAndHighest = function(arr) {
    arr.sort();

    return [arr[1], arr[arr.length - 2]];
}

// #12. Write a JavaScript function which says whether a number is perfect.
const isPerfect = function(num) {
    let sum = 0;
    for (let i = 1; i < Math.ceil(num / 2); i++) {
        if (num % i === 0) {
            sum += factors[i];
        }
    }

    if (sum === num)
        return true;
    return false;
}

// #13. Write a JavaScript function to compute the factors of a positive integer.
const getFactors = function(num) {
    let factors = [];

    for (let i = 1; i < num; i++) {
        if (num % i === 0)
            factors.push(i);
    }

    return factors;
}

// #14. Write a JavaScript function to convert an amount to coins.
const toCoins = function(num, coins) {
    // double check to make sure coins are sorted in reverse order
    coins.sort().reverse();

    let result = [];
    let remaining = num;

    for (let i = 0; i < coins.length; i++) {
        if (remaining > coins[i]) {
            remaining -= coins[i];
            result.push(coins[i]);
        }
    }

    return result;
}

// #15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
//      bases. Accept b and n from the user and display the result.
const computeExponent = function(base, exp) {
    return Math.pow(base, exp);
}

// #16. Write a JavaScript function to extract unique characters from a string.
const getUniqueChars = function(str) {
    str = str.toLowerCase();
    let result = "";
    const map = {};

    for(let i = 0; i < str.length; i++) {
        if (map[str[i]] === undefined) {
            result += str[i];
            map[str[i]] = true;
        }
    }

    return result;
}

// #17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
const getNumOccurrences = function(str) {
    str = str.toLowerCase();
    const result = {};

    for (let i = 0; i < str.length; i++) {
        if (result[str[i]] === undefined)
            result[str[i]] = 1;
        else
            result[str[i]]++;
    }

    return result;
}

// #18. Write a function for searching JavaScript arrays with a binary search.
const binarySearch = function(arr, key, lo=0, hi=arr.length - 1) {
    // returns -1 if the key was not found
    if (lo > hi)
        return -1;
    
    let mid = Math.floor(lo + (hi - lo) / 2);

    if (arr[mid] === key)
        return mid;
    else if (arr[mid] > key)
        return binarySearch(arr, key, lo, mid - 1);
    else
        return binarySearch(arr, key, mid + 1, hi);
}

// #19. Write a JavaScript function that returns array elements larger than a number.
const largerElements = function(arr, num) {
    let result = [];

    for (let i = 0; i < arr; i++) {
        if (arr[i] > num)
            result.push(arr[i]);
    }

    return result;
}

// #20. Write a JavaScript function that generates a string id (specified length) of random characters.
const getStringId = function(len) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < len; i++) {
        let temp = Math.floor(Math.random() * chars.length);
        result += chars[temp];
    }

    return result;
}

// #21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
//      combinations in an array.
const getSubsets = function(arr, len) {
    if (len > arr.length || len <= 0)
        return [];

    let result = [];
    let start = [], index = [];
    for (let i = len - 1; i >= 0; i--) {
        start.push(arr[i]);
        index.push(i);
    }
    result.push(start);

    while (true) {
        let temp = 0;
        let modifying = true;
        while (modifying) {
            if (temp >= index.length)
                break;
            index[temp]++;
            if (index[temp] >= arr.length - temp)
                temp++;
            else {
                for (let i = temp - 1; i >= 0; i--) {
                    index[i] = index[i + 1] + 1;
                }
                modifying = false;
            }
        }
        if (modifying)
            break;
        
        let curr = []
        for (let i = 0; i < index.length; i++) {
            curr.push(arr[index[i]]);
        }
        result.push(curr);
    }

    return result;
}

// #22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
//      will count the number of occurrences of the specified letter within the string.
const countOccurrences = function(str, letter) {
    let result = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter)
            result++;
    }

    return result;
}

// #23. Write a JavaScript function to find the first not repeated character.
const findFirstNonrepeated = function(str) {
    str = str.toLowerCase();

    const chars = {};
    for (let i = 0; i < str.length; i++) {
        if (chars[str[i]] === undefined)
            chars[str[i]] = 1;
        else
            chars[str[i]]++;
    }

    for (let i = 0; i < str.length; i++) {
        if (chars[str[i]] === 1)
            return str[i];
    }

    return undefined;
}

// #24. Write a JavaScript function to apply Bubble Sort algorithm.
const bubbleSort = function(arr) {
    let finished = false;

    while (!finished) {
        finished = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                finished = false;
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }

    return arr;
}

// #25. Write a JavaScript function that accept a list of country names as input and returns the
//      longest country name as output.
const longestCountryName = function(arr) {
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > result.length)
            result = arr[i];
    }

    return result;
}

// #26. Write a JavaScript function to find longest substring in a given a string without repeating
//      characters.
const findLongestSubstring = function(str) {
    if (str.length <= 1)
        return str;
    
    const seen = {};
    let start = 0;
    let result = "";

    for (let end = 0; end < str.length; end++) {
        let curr = str[end];
        let lastSeen = seen[curr];
        
        if (lastSeen >= start)
            start = lastSeen + 1;
        
        seen[curr] = end;

        if (end - start + 1 > result.length)
            result = str.substring(start, end + 1);
    }

    return result;
}

// #27. Write a JavaScript function that returns the longest palindrome in a given string.
const longestPalindrome = function(str) {
    if (str.length <= 1)
        return str;
    
    let result = "";

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            let temp = str.substring(i, j + 1);
            let reversed = temp.split("").reverse().join("");

            if (temp === reversed && temp.length > result.length)
                result = temp;
        }
    }

    return result;
}

// #28 and 29. Write a JavaScript function to pass a JavaScript function as parameter and get the function name
const getFunctionName = function(f) {
    if (typeof(f) === "function")
        return f.name;
    return undefined;
}