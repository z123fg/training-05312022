// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223

const reverseDigits = (num) => {
  num = parseInt(String(num).split("").reverse().join(""));
  console.log(num);
};

reverseDigits(123456);

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const isPalindrome = (str) => {
  let strTwo = str.split("").reverse().join("");
  if (str === strTwo) {
    console.log("This word is a palindrome");
  } else {
    console.log("This word is not a palindrome");
  }
};

isPalindrome("madam");

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g

const findAllCombos = (str) => {
  let combos = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      combos.push(str.slice(i, j));
    }
  }
  console.log(combos.toString());
};

findAllCombos("dog");

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

const orderAlphabetically = (str) => {
  const myWordArray = str.split("");
  myWordArray.sort();
  console.log(myWordArray.join("").toString());
};

orderAlphabetically("developer");

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

const capitalizeFirstLetter = (str) => {
  let sentence = str.split(" ");
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].substr(1);
  }
  console.log(sentence.join(" ").toString());
};

capitalizeFirstLetter("the quick brown fox");

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

const findLongestWord = (str) => {
  let word = str.split(" ");
  let length = 0;
  let longest = null;
  word.forEach(function (word) {
    if (length < word.length) {
      length = word.length;
      longest = word;
    }
  });
  console.log(longest);
};

findLongestWord("Web Development Tutorial");

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5

const countVowels = (str) => {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count += 1;
    }
  }
  console.log(count);
};

countVowels("The quick brown fox");
// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

const isPrime = (num) => {
  let prime = true;
  if (num === 1) {
    return console.log(!prime);
  } else if (num === 2) {
    return console.log(prime);
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return console.log(!prime);
      }
    }
    return console.log(prime);
  }
};

isPrime(7);
// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

const findType = (value) => {
  return console.log(typeof value);
};

findType(4567);

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

const identityMatrix = (num) => {
  let matrix = [];
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      i === j ? matrix.push("1") : matrix.push("0");
    }
  }
  console.log(matrix);
};

identityMatrix(3);
// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4

const findSecondLowestAndSecondHighest = (num) => {
  let myArray = num.sort((a, b) => (a > b ? 1 : -1));

  console.log([myArray[1], myArray[myArray.length - 2]]);
};

findSecondLowestAndSecondHighest([25, 75, 232, 111, 888]);

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

const findPerfectNum = (num) => {
  let temp = 0;
  let isPerfect = true;
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      temp += i;
    }
  }
  if (temp === num) {
    return console.log(isPerfect);
  } else {
    return console.log(!isPerfect);
  }
};

findPerfectNum(496);
// 13. Write a JavaScript function to compute the factors of a positive integer.

const findFactors = (num) => {
  let factors = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  console.log(factors.toString());
};

findFactors(256);

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1

const amountToCoins = (num, coins) => {
  let coinList = [];
  for (let i = 0; i < coins.length; i++) {
    while (num / coins[i] >= 1) {
      num = num - coins[i];
      coinList.push(coins[i]);
    }
  }
  console.log(coinList.toString());
};

amountToCoins(69, [25, 10, 5, 2, 1]);

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

const findExponentAndBase = (b, n) => {
  console.log(b ** n);
};

findExponentAndBase(3, 3);

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

const findUniqueChars = (str) => {
  let findUnique = "";

  for (let i = 0; i < str.length; i++) {
    if (findUnique.indexOf(str.charAt(i)) === -1) {
      findUnique += str[i];
    }
  }
  console.log(findUnique);
};

findUniqueChars("thequickbrownfoxjumpsoverthelazydog");

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
const amountOfEachLetter = (str) => {
  let tempStr = [];
  str.split("").forEach((letter) => {
    tempStr[letter] = tempStr[letter] ? tempStr[letter] + 1 : 1;
  });
  console.log(tempStr);
};

amountOfEachLetter("The quick brown fox");

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

const binarySearch = (num, numArray) => {
  numArray.sort((a, b) => a - b);
  let low = 0;
  let high = numArray.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (numArray[mid] === num) {
      return console.log("The number is element " + mid + " of the array.");
    } else if (numArray[mid] < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  console.log("Number not found");
};

binarySearch(2, [1, 3, 9, 4, 2, 66, 23, 98]);
// 19. Write a JavaScript function that returns array elements larger than a number.

const findArrayElements = (num, numArray) => {
  let tempArray = [];
  for (let i = 0; i < numArray.length; i++) {
    if (num < numArray[i]) {
      tempArray += numArray[i] + " ";
    }
  }
  console.log(tempArray);
};

findArrayElements(22, [1, 3, 9, 4, 2, 66, 23, 98]);
// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

const generateStrId = (num) => {
  let id = "";
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < num; i++) {
    id += charList.charAt(Math.floor(Math.random() * charList.length));
  }
  console.log(id);
};

generateStrId(12);

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]

const findCombosOfArrays = (numArray, subset) => {
  if (subset > numArray.length || subset <= 0) {
    return [];
  }
  if (subset === numArray.length) {
    return [numArray];
  }
  if (subset === 1) {
    return numArray.reduce((a, b) => [...a, [b]], []);
  }

  let combos = [],
    tail;

  for (let i = 0; i < numArray.length; i++) {
    tail = findCombosOfArrays(numArray.slice(i + 1), subset - 1);
    for (let j = 0; j < tail.length; j++) {
      combos.push([numArray[i], ...tail[j]]);
    }
  }
  return combos;
};

console.log(findCombosOfArrays([1, 2, 3], 2));
// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3

const countLettersInString = (str, char) => {
  let count = 0;
  str.split("").forEach((letter) => {
    if (letter === char) {
      count++;
    }
  });
  console.log(count);
};

countLettersInString("microsoft.com", "o");
// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'

const findFirstNonRepeat = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      console.log(str[i]);
    }
  }
};

findFirstNonRepeat("abacddbec");

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

const bubbleSort = (numArray) => {
  for (let i = 0; i < numArray.length; i++) {
    for (let j = 0; j < numArray.length; j++) {
      if (numArray[j] < numArray[j + 1]) {
        let temp = numArray[j];
        numArray[j] = numArray[j + 1];
        numArray[j + 1] = temp;
      }
    }
  }
  console.log(numArray);
};

bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

const findLongestString = (strArray) => {
  console.log(strArray.reduce((a, b) => (a.length > b.length ? a : b)));
};

findLongestString(["Australia", "Germany", "United States of America"]);

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

const findLongestSubstring = (str) => {
  let tempStr = "";
  let longestStr = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (tempStr.indexOf(str[j]) !== -1) {
        i = str.indexOf(str[j], i) + 1;
        tempStr = "";
      } else {
        tempStr = str.slice(i, j + 1);
        if (tempStr.length > longestStr.length) {
          longestStr = tempStr;
        }
      }
    }
  }
  console.log(longestStr);
};

findLongestSubstring("United States of America");

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

const findLongestPalindrome = (str) => {
  let longestPalindrome = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      let temp = str.substring(i, j);
      let reverse = [...temp].reverse().join("");

      if (temp === reverse && temp.length > longestPalindrome.length) {
        longestPalindrome = temp;
      }
    }
  }
  console.log(longestPalindrome);
};

findLongestPalindrome("abracadabra");

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
const sayHello = () => {
  return "Hello";
};

const callbackFunction = (func) => {
  console.log(func());
};

callbackFunction(sayHello);

// 29. Write a JavaScript function to get the function name.

const getFunctionName = () => {
  console.log(getFunctionName.name);
};

getFunctionName();
