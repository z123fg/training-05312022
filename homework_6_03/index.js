
/**
 * Question 1
 * A function to reverse a number
 * @param {number} num 
 * @returns {number}
 */
function reverse(num) {
    const n = num.toString().length;

    let ans = "";
    for (let i = n - 1; i >= 0; i--) {
        ans += num.toString().charAt(i);
    }

    return parseInt(ans);
}


/**
 * Question 2
 * 
 * to check if a passed string is palindrome
 * 
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {
    // concatenate all charactor.
    str = str.replaceAll(" ", "")
    const n = str.length;
    for (let i = 0; i < n / 2; i++) {
        if (str.charAt(i) !== str.charAt(n - 1 - i)) {
            return false;
        }
    }
    return true;
}

/**
 * 
 * Question 3
 * 
 * a function generates all combinations of a string. 
 * @param {*} str 
 * @returns {Object} an array of combination
 */
function generateCombination(str) {
    const n = str.length;
    let ans = [];
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            ans.push(str.slice(i, j + 1));
        }
    }
    return ans;
}


/**
 * 
 * Question 4
 * 
 * A function to sort a word in alphabetical order
 * @param {string} str 
 * @returns {string}
 */
function orderString(str) {
    return str.split("").sort().join("");
}

/**
 * Question 5
 * 
 * A function to convert first letter of each word to be uppercase
 * @param {string} str
 * @returns {string} 
 */
function firstLetterUpper(str) {
    let words = str.split(' ');
    words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return words.join(' ');
}

/**
 * Question 6
 * 
 * A function to find the longest word
 * @param {string} str 
 */
function findLongestWord(str) {
    let words = str.split(' ');
    words = words.sort((a, b) => a.length - b.length);
    return words[words.length - 1];
}

/**
 * 
 * Question 7
 * 
 * A function to count how many vowels are in the str
 * @param {string} str 
 * @returns {number} 
 */
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;
    for (let ch of str) {
        if (vowels.includes(ch)) {
            count++;
        }
    }

    return count;
}

/**
 * 
 * Question 8
 * 
 * A function to check if a number is a prime
 * @param {number} num
 * @return {boolean} 
 */
function isPrime(num) {
    if (num <= 1) { return false };

    for (let divisor = 2; divisor < num; divisor++) {
        if (num % divisor === 0) {
            return false;
        }
    }
    return true;
}

/**
 * Question 9
 * 
 * A function to return type of variables
 * @param {*} variable 
 * @returns 
 */
function isType(variable) {
    return typeof variable;
}

/**
 * Question 10
 * 
 * A function to create n * n identity matrix
 * @param {number} n 
 * @returns 2D array
 */
function createMatrix(n) {
    return new Array(n).fill(new Array(n).fill(0))
}

/**
 * Question 11
 * 
 * A function to find the second lowest and second greatest numbers
 * @param {Object} arr 
 * @returns {Object}
 */
function findSecondMinMax(arr) {
    if (arr.length < 2) { return [] }
    const arrSorted = arr.sort();

    return [arrSorted[1], arrSorted[arr.length - 2]];
}

/**
 * Question 12
 * 
 * A function to check if a number is perfect number
 * @param {number} num 
 * @returns {boolean}
 */
function isPrefect(num) {
    if (num <= 0) { return false }

    let divisorSum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisorSum += i;
        }
    }

    return num === divisorSum;
}

/**
 * Question 13
 * 
 * A function to find the factors of a number
 * @param {number} num 
 * @returns 
 */
function findFactors(num) {
    let ans = [];

    for (let i = 1; i < num; i++) {
        if (num % i === 0 && i <= num / i) {
            ans.push(i);
            ans.push(parseInt(num / i));
        }
    }

    return ans
}

/**
 * Question 14
 * 
 * A function to convert an amount to coins
 * 
 * @param {number} amount 
 * @param {Object} coins 
 * @returns {Object}
 */
function amountTocoins(amount, coins) {
    let ans = [];

    coins = coins.sort((a, b) => b - a);

    let coin = 0;
    while (amount > 0) {
        if (amount >= coins[coin]) {
            ans.push(coins[coin]);
            amount -= coins[coin];
        } else {
            coin++;
        }
    }

    return ans;
}

/**
 * Question 15
 * 
 * A functioin to computer the exponent of base
 * @param {number} b 
 * @param {number} n 
 * @returns {number}
 */
function computeExponent(b, n) {
    let ans = b;

    for (let i = 2; i <= n; i++) {
        ans *= b;
    }

    return ans
}

/**
 * Question 16
 * 
 * A function to remove duplicate characters
 * @param {string} str 
 * @returns 
 */
function uniqueCharacters(str) {
    let unique = {};

    let ans = "";
    for (let ch of str.split("")) {
        if (!(ch in unique)) {
            unique[ch] = 1;
            ans += ch;
        }
    }
    return ans;
}

/**
 * Question 17
 * A function to get the number of occurrences of each letter in specified string
 * @param {string} str 
 * @returns {object}
 */
function getOccurrence(str) {
    const occurrence = {}

    for (let ch of str.split('')) {
        occurrence[ch] = ch in occurrence ? occurrence[ch] + 1 : 1;
    }

    return occurrence;
}

/**
 * Question 18
 * 
 * A function of binary searchs
 * @param {object} arr a sorted array
 * @param {*} target 
 * @returns 
 */
function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let mid = l + parseInt((r - l) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return -1;
}

/**
 * Question 19
 * 
 * A function to filter all elements that are larger than a number
 * @param {object} arr 
 * @param {number} num 
 * @returns 
 */
function findAllLarger(arr, num) {
    return arr.filter((ele) => ele > num);
}

/**
 * Question 20
 * 
 * A function to generate ramdom string
 * @param {number} len 
 * @returns 
 */
function genarateId(len) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let ans = "";
    for (let i = 0; i < len; i++) {
        ans += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return ans;
}

function getFixedLengthSubset(arr, len) {
    const subsets = arr.reduce(
        (subsets, value) => subsets.concat(
            subsets.map(set => [value, ...set])
        ),
        [[]]
    );

    return subsets.filter((subset) => subset.length === len);
}

/**
 * Question 22
 * 
 * A function to count occurrence of a letter in a string
 * @param {String} str 
 * @param {String} ch 
 * @returns {Number}
 */
function countLetter(str, ch) {
    let ans = 0;
    for (let currCh of str.split("")) {
        if (currCh === ch) {
            ans += 1;
        }
    }

    return ans;
}

/**
 * Question 23
 * 
 * A function to find the first not repeated character
 * @param {String} str 
 * @returns {String}
 */
function firstNotRepeated(str) {
    const occurrance = {}

    for (let ch of str.split('')) {
        occurrance[ch] = ch in occurrance ? occurrance[ch] + 1 : 1
    }

    for (let ch of Object.keys(occurrance)) {
        if (occurrance[ch] === 1) {
            return ch;
        }
    }
    return ""
}

/**
 * Question 24
 * 
 * A function to do descending bubble sort
 * @param {Object} arr 
 * @returns 
 */
function BubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < (arr.length - i - 1); j++) {

            if (arr[j] < arr[j + 1]) {

                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr;
}

/**
 * Question 25 
 * 
 * A function to find the longest country name
 * @param {Object} arr 
 * @returns 
 */
function longestCountryName(arr) {
    return arr.sort((a, b) => a.length - b.length)[arr.length - 1];
}

/**
 * Question 26
 * 
 * A function to find the longest substring without the repeated characters
 * @param {String} str 
 * @returns {String}
 */
function longestSubString(str) {
    let ans = "";

    let start = 0;
    let n = str.length;
    let occurrance = {};
    for (let end = 0; end < n; end++) {
        const currCh = str.charAt(end);

        if (currCh in occurrance) {
            start = Math.max(occurrance[currCh], start);
        }

        ans = end - start + 1 > ans.length ? str.slice(start, end + 1) : ans;
        occurrance[currCh] = end + 1;
    }
    return ans;
}

/**
 * Question 27
 * 
 * A function to find the longest palindrome
 * @param {String} str 
 * @returns 
 */
function longestPalindrome(str) {
    let ans = [];
    let max = 0;
    const n = str.length;

    function currLongest(a, b) {
        while (0 <= a && b < n) {
            if (str.charAt(a) === str.charAt(b)) {
                a--;
                b++;
            } else {
                break;
            }
        }
        return str.slice(a + 1, b);
    }

    for (let i = 0; i < n - 1; i++) {
        const even = currLongest(i, i + 1);
        const odd = currLongest(i, i);
        if (even.length) {
            if (even.length > max) {
                ans = [even];
                max = even.length;
            }
            if (even.length === max) {
                ans.push(even)
            }
        }
        if (odd.length) {
            if (odd.length > max) {
                ans = [even];
                max = odd.length;
            }
            if (odd.length === max) {
                ans.push(odd)
            }
        }
    }

    return Array.from(new Set(ans.filter((a) => a.length > 0)))
}

/**
 * Question 28 
 * 
 * A function to pass function as argument
 * @param {Number} num 
 * @param {Object} callback 
 * @returns 
 */
function isEven(num, callback) {
    if (callback(num)) {
        return true
    }

    return false
}

/**
 * Question 29
 * 
 * A function to get function name
 * @param {Object} callback 
 * @returns {String}
 */
function getName(callback) {
    return callback.name;
}

module.exports = {
    reverse,
    isPalindrome,
    generateCombination,
    orderString,
    firstLetterUpper,
    findLongestWord,
    countVowels,
    isPrime,
    isType,
    createMatrix,
    findSecondMinMax,
    isPrefect,
    findFactors,
    amountTocoins,
    computeExponent,
    uniqueCharacters,
    getOccurrence,
    binarySearch,
    findAllLarger,
    genarateId,
    countLetter,
    firstNotRepeated,
    BubbleSort,
    longestCountryName,
    longestSubString,
    isEven,
    getName,
    longestPalindrome,
    getFixedLengthSubset
};
