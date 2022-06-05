// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223
const reverseNum = (x) => {
  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  let res = 0;
  while (x > 0) {
    res = res * 10 + (x % 10);
    x = ~~(x / 10);
  }
  return res * sign;
};

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const palindrome = (str) => {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g

const substring = (str) => {
  let len = str.length;
  let res = [];
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      res.push(str.slice(i, j));
    }
  }
  return res;
};

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
const sortStr = (str) => {
  let arr = str.split("");
  arr = arr.sort((a, b) => a.localeCompare(b));
  return arr.join("");
};

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '
const capitalizeFirstLetter = (str) => {
  const words = str.split(" ");
  const capitalized = [];
  for (let word of words) {
    capitalized.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return capitalized.join(" ");
};

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'
const longestWord = (str) => {
  const words = str.split(" ");
  let maxLen = 0,
    idx = -1;
  for (let i = 0; i < words.length; i++) {
    if (maxLen < words[i].length) {
      maxLen = words[i].length;
      idx = i;
    }
  }
  return words[idx];
};

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5
const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let ch of str) {
    if (vowels.indexOf(ch) >= 0) {
      count++;
    }
  }
  return count;
};

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

const isPrime = (num) => {
  if (num <= 1) return false;
  let divisor = ~~(num / 2);
  while (divisor > 1) {
    if (num % divisor === 0) {
      return false;
    }
    divisor--;
  }
  return true;
};

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

const checkType = (arg) => {
  return typeof arg;
};

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

const createMatrix = (n) => {
  const row = new Array(n).fill(0);
  const matrix = new Array(n).fill(row);
  return matrix;
};

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4

const findNums = (arr) => {
  if (arr.length < 2) return;
  arr.sort((a, b) => a - b);
  console.log("second lowest: ", arr[1]);
  console.log("second greatest: ", arr[arr.length - 2]);
};

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

const isPerfectNum = (num) => {
  if (num <= 1) return false;
  let divisor = ~~(num / 2);
  let sum = 0;
  while (divisor >= 1) {
    if (num % divisor === 0) {
      sum += divisor;
    }
    divisor--;
  }
  return sum === num;
};

// 13. Write a JavaScript function to compute the factors of a positive integer.
const factors = (n) => {
  const res = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      res.push(i);
    }
  }
  return res;
};

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1

const amountTocoins = (amount, coins) => {
  let total = amount;
  let idx = 0;
  coins.sort((a, b) => b - a);
  const res = [];
  while (total !== 0) {
    if (total >= coins[idx]) {
      total -= coins[idx];
      res.push(coins[idx]);
    } else {
      idx++;
    }
  }
  return res;
};

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

const quickMulti = (x, n) => {
  if (n === 0) return 1;
  if (n % 2 === 0) {
    return quickMulti(x, ~~(n / 2)) * quickMulti(x, ~~(n / 2));
  } else {
    return x * quickMulti(x, ~~(n / 2)) * quickMulti(x, ~~(n / 2));
  }
};

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
const uniqueChars = (str) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (res.indexOf(ch) === -1) {
      res += ch;
    }
  }
  return res;
};
// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

const isLetter = (ch) => {
  ch = ch.toLowerCase();
  return ch >= "a" && ch <= "z";
};
const countLetters = (str) => {
  const res = {};
  for (let ch of str) {
    if (!isLetter(ch)) continue;
    if (res[ch]) {
      res[ch]++;
    } else {
      res[ch] = 1;
    }
  }
  return res;
};

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

const binarySearch = (arr, target) => {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = ~~((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

// 19. Write a JavaScript function that returns array elements larger than a number.

const getElementsLarger = (arr, value) => {
  const res = [];
  for (const v of arr) {
    if (v > value) {
      res.push(v);
    }
  }
  return res;
};

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const generateStr = (id, list) => {
  let res = "";
  for (let i = 0; i < id; i++) {
    let len = list.length;
    let idx = Math.floor(Math.random() * len);
    console.log(idx);
    res += list.charAt(idx);
  }
  return res;
};

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]

const fixedLengthSubset = (array, len) => {
  let n = array.length;
  if (n < len) return [];
  if (n === len) return array;
};

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3

const countOccurrences = (str, ch) => {
  let len = str.length;
  let count = 0;
  for (const s of str) {
    if (s === ch) count++;
  }
  return count;
};

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'
const firstNotRepeatedChar = (chars) => {
  const repeated = [];
  const unique = [];
  for (const char of chars) {
    let idx = unique.indexOf(char);
    if (idx === -1) {
      if (!repeated.includes(char)) {
        unique.push(char);
      }
    } else {
      unique.splice(idx, 1);
      if (!repeated.includes(char)) {
        repeated.push(char);
      }
    }
  }
  return unique[0];
};

// 24. Write a JavaScript function to apply Bubble Sort algorithm.

const bubbleSort = (array) => {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (array[j - 1] < array[j]) {
        let tmp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = tmp;
      }
    }
  }
  return array;
};

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

const Longest_Country_Name = (countries) => {
  let max = 0,
    idx = -1;
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > max) {
      max = countries[i].length;
      idx = i;
    }
  }
  return idx === -1 ? "" : countries[idx];
};

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

const longestSubstring = (string) => {
  const map = new Map();
  let maxsubstr = "";
  let maxLen = 0;
  let start = 0;
  for (let end = 0; end < string.length; end++) {
    let ch = string.charAt(end);
    if (map.has(ch)) {
      if (maxLen < end - start) {
        maxsubstr = string.slice(start, end);
        maxLen = end - start;
      }
      start = map.get(ch) + 1;
    }
    map.set(ch, end);
  }
  return maxsubstr;
};

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
const expandAroundCenter = (string, left, right) => {
  while (left <= right && string.charAt(left) === string.charAt(right)) {
    left--;
    right++;
  }
  return right - left - 1;
};

const longestPalindrome = (string) => {
  if (!string || string.length < 1) return "";
  let start = 0,
    end = 0;
  for (let i = 0; i < string.length; i++) {
    let len1 = expandAroundCenter(string, i, i); // odd length subtring
    let len2 = expandAroundCenter(string, i, i + 1); // even length subtring
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }
  return string.slice(start, end + 1);
};

console.log(longestPalindrome("bananas"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
const isEven = (value) => {
  return value % 2 === 0;
};

const evenNumbers = (array, isEven) => {
  return array.filter(isEven);
};
console.log(evenNumbers([1, 2, 3, 4, 5], isEven));

// 29. Write a JavaScript function to get the function name.

const func = () => {};

const getFuncName = (func) => {
  return func.name;
};

console.log(getFuncName(func));
