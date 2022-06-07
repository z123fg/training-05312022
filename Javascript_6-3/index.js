// Javascript Homework Assignment 6-3-22
// Antra Inc. 21355 Ridgetop Circle Suite 300 Dulles VA 20166
// Phone: 703.994.4545 Fax: 703.373.2975 e-mail:hr@antra.net website: www.antra.net

// 1. Write a JavaScript function that reverses a number.
//    Example x = 32243;
//    Expected Output: 34223

let myNum = 123456789;

const reverseNumberFunc = (str) => {
  const newArray = str.toString().split("");
  const reversedArray = newArray.reverse();
  return parseInt(reversedArray.join().replaceAll(",", ""));
};
console.log("Q.1 | ", reverseNumberFunc(myNum));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
//    A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
//    madam or nurses run.

let myStr = "stats";

const isPalindromeFunc = (str) => {
  const newArray = str.split("");
  const checkNewArray = newArray.join().replaceAll("," + " ", "");
  const reversedArray = newArray.reverse();
  const checkReversedArray = reversedArray.join().replaceAll("," + " ", "");

  if (checkReversedArray === checkNewArray) {
    return `${str} : Is a palindrome!`;
  } else {
    return `${str} : Is NOT a palindrome.`;
  }
};
console.log("Q.2 | ", isPalindromeFunc(myStr));

// 3. Write a JavaScript function that generates all combinations of a string.
//    Example string: 'dog'
//    Expected Output: d, do, dog, o, og, g

const strToExpand = "dog";

const expandWordFunc = (str) => {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      newArr.push(str.slice(i, j));
    }
  }
  return newArr.join(", ");
};
console.log("Q.3 | ", expandWordFunc(strToExpand));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
//    Example string: 'webmaster'
//    Expected Output: 'abeemrstw'
//    Assume punctuation and numbers symbols are not included in the passed string.

let strToOrd = "FEDCBA";

const orderStringFunc = (str) => {
  const strArr = str.split("");
  const ordArr = strArr.sort();
  const ordStr = ordArr.join().replaceAll(",", "");

  return `${str} : ${ordStr}`;
};
console.log("Q.4 | ", orderStringFunc(strToOrd));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
//    each word of the string in upper case.
//    Example string: 'the quick brown fox'
//    Expected Output: 'The Quick Brown Fox '

let anyString = "the quick brown fox";

const upperCaseStrFunc = (str) => {
  const newArray = str.toLowerCase().split(" ");
  const capitalize = newArray.map(
    (word) => word[0].toUpperCase() + word.substr(1)
  );
  // console.log(capitalize);

  return capitalize.join(" ");
};
console.log("Q.5 | ", upperCaseStrFunc(anyString));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
//    within the string.
//    Example string: 'Web Development Tutorial'
//    Expected Output: 'Development'

let myLongestWordStr = "Web Development Tutorial";

const longestWordFunc = (str) => {
  const strArr = str.split(" ");
  const valArr = strArr.map((i) => i.length);

  let longIdx = Math.max(...valArr);

  const iterator = strArr.values();
  for (const value of iterator) {
    if (value.length === longIdx) {
      return value;
    }
  }
};
console.log("Q.6 | ", longestWordFunc(myLongestWordStr));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
//    vowels within the string.
//    Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
//    vowel here.
//    Example string: 'The quick brown fox'
//    Expected Output: 5

let sentence = "The quick brown fox";

const vowelNumFunc = (str) => {
  const vowels = "aAeEiIoOuU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
};
console.log("Q.7 | ", vowelNumFunc(sentence));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
//    prime or not.
//    Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
//    divisors other than 1 and itself.

let myIsPrimeNum = 9;

const isPrimeFunc = (num) => {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false;
        // cover other possibilities
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};
console.log("Q.8 | ", isPrimeFunc(myIsPrimeNum));

// 9. Write a JavaScript function which accepts an argument and returns the type.
//    Note: There are six possible values that typeof returns: object, boolean, function, number, string,
//    and undefined.

let myData1 = 1;
let myData2 = {};
let myData3 = true;

const findTypeOfFunc = (dataType) => {
  const findType = typeof dataType;
  return findType;
};
console.log("Q.9 | ", findTypeOfFunc(myData1));
// console.log("Q.9 | ", findTypeOf(myData2));
// console.log("Q.9 | ", findTypeOf(myData3));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

let COL_x_ROW = 8;

const identityMatrixFunc = (n) => {
  let a = Array.apply(null, new Array(n));

  return a.map((x, i) => {
    return a.map((y, j) => {
      return i === j ? 1 : 0;
    });
  });
};
console.log("Q.10 | ", identityMatrixFunc(COL_x_ROW));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second
//     lowest and second greatest numbers, respectively.
//     Sample array: [1,2,3,4,5]
//     Expected Output: 2,4

let myRangeNum = [100, 254, 3654, 852, 5412, 6697, 512, 978];

const findNumbersFunc = (arr) => {
  const j = arr.sort((a, b) => {
    return a - b;
  });
  const k = j[1];
  const s = j[arr.length - 2];
  return `${k},${s}`;
};
console.log("Q.11 | ", findNumbersFunc(myRangeNum));

// 12. Write a JavaScript function which says whether a number is perfect.
//     According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
//     the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
//     number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
//     half the sum of all of its positive divisors (including itself).
//     Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
//     + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
//     2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
//     perfect numbers 496 and 8128.

let myPerfectNum = 6;

const perfectNumberFunc = (num) => {
  let t = 0;
  let isPerf = true;
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      t += i;
    }
  }
  if (t === num) {
    return isPerf
  } else {
    return !isPerf
  }
};
console.log("Q.12 | ", perfectNumberFunc(myPerfectNum));

// 13. Write a JavaScript function to compute the factors of a positive integer.
myFactorNum = 512

const factorPositiveFunc = (num) => {
  let f = []
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      f.push(i)
    }
  }
  return f.toString()
};
console.log("Q.13 | ", factorPositiveFunc(myFactorNum));

// 14. Write a JavaScript function to convert an amount to coins.
//     Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
//     Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
//     Output: 25, 10, 10, 1

let myCoinAmt = 78
let myCoins = [25, 10, 5, 2, 1]

const convertToCoinsFunc = (amt, coins) => {
  let coinArr = []
  for (let i = 0; i < coins.length; i++) {
    while (amt / coins[i] >= 1) {
      amt = amt - coins[i]
      coinArr.push(coins[i])
    }
  }
  return coinArr.toString()
};
console.log("Q.14 | ", convertToCoinsFunc(myCoinAmt, myCoins));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
//     bases. Accept b and n from the user and display the result.

const exponentFunc = (b, n) => {
  return (b ** n)
};
console.log("Q.15 | ", exponentFunc(9, 9));

// 16. Write a JavaScript function to extract unique characters from a string.
//     Example string: "thequickbrownfoxjumpsoverthelazydog"
//     Expected Output: "thequickbrownfxjmpsvlazydg"

let myUniqueStr = "thequickbrownfoxjumpsoverthelazydog"

const uniqueCharFunc = (str) => {
  let uniqueChars = ""

  for (let i = 0; i < str.length; i++) {
    if (uniqueChars.indexOf(str.charAt(i)) === -1) {
      uniqueChars += str[i]
    }
  }
  return uniqueChars
};
console.log("Q.16 | ", uniqueCharFunc(myUniqueStr));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

let myAmtStr = "The quick brown fox"

const allCharOccurences = (str) => {
  let t = []
  str.split("").forEach((letter) => {
    t[letter] = t[letter] ? t[letter] + 1 : 1
  })

  return t
};
console.log("Q.17 | ", allCharOccurences(myAmtStr));

// 18. Write a function for searching JavaScript arrays with a binary search.
//     Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
//     the desired value.

const binarySearchFunc = (myNum, myArr) => {
  myArr.sort((a, b) => a - b)
  let low = 0; //left endpoint
  let high = myArr.length - 1; //right endpoint
  let position = -1;
  let found = false;
  let mid;

  while (found === false && low <= high) {
    mid = Math.floor((low + high) / 2);
    if (myArr[mid] === myNum) {
      found = true;
      position = mid;
    } else if (myArr[mid] > myNum) {
      //if in lower half
      high = mid - 1;
    } else {
      //in in upper half
      low = mid + 1;
    }
  }
  return position;
}
console.log("Q.18 | ", binarySearchFunc(9, [1, 13, 25, 37, 49, 61, 73, 85]));

// 19. Write a JavaScript function that returns array elements larger than a number.

const elsLargerThanNum = (num, numArr) => {
  return numArr.filter(i => {
    return i >= num
  })
};
console.log("Q.19 | ", elsLargerThanNum(16, [1, 2, 3, 5, 6, 7, 10]));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
//     Sample   character   list:
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

let id_Length = 20;

const randomStringId = (length) => {
  const charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const chArr = charList.split("");

  for (let i = chArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = chArr[i];
    chArr[i] = chArr[j];
    chArr[j] = k;
  }
  return length <= 62
    ? chArr.slice(1, length).join("")
    : `Your id_Length must be less than 63`;
};
console.log("Q.20 | ", randomStringId(id_Length));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
//     combinations in an array.
//     Sample array: [1, 2, 3] and subset length is 2
//     Expected output: [[2, 1], [3, 1], [3, 2]]

let mySubsetArr = [1, 2, 3];
let mySubsetLength = 2;

const allSubsets = (arr, len) => {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        let temp = [];
        temp.push(arr[i]);
        for(let j = i + 1; j < arr.length; j++) {
            temp.push(arr[j]);
            if(temp.length === len) {
                res.push([...temp]);
                temp.pop();
            }
        }
    }
    return res;
}
console.log("Q.21 | ", allSubsets(mySubsetArr, mySubsetLength));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
//     will count the number of occurrences of the specified letter within the string.
//     Sample arguments: 'microsoft.com', 'o'
//     Expected output: 3

let myOccStr = "microsoft.com";
let myOccChar = "o";

const findOccurences = (str, char) => {
  // const formStr = str.replaceAll("," && ".", "")
  const newArr = str.split("");
  let counter = 0;

  for (let i = 0; i < newArr.length; i++) {
    newArr[i] === char ? counter++ : null;
  }
  return `The "${char}" is found ${counter} times.`;
};
console.log("Q.22 | ", findOccurences(myOccStr, myOccChar));

// 23. Write a JavaScript function to find the first not repeated character.
//     Sample arguments: 'abacddbec'
//     Expected output: 'e'

let myNoRepeatStr = "abacddbec";

const charNoRepeat = (str) => {
  const newArr = str.split("");
  let result = "";
  let counter = 0;

  for (let i = 0; i < newArr.length + 1; i++) {
    counter = 0;

    for (let j = 0; j < newArr.length; j++) {
      newArr[i] === newArr[j] ? counter++ : null;
    }

    if (counter < 2) {
      result = newArr[i];
      break;
    }
  }
  return `${str} : ${result}`;
};
console.log("Q.23 | ", charNoRepeat(myNoRepeatStr));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
//     Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
//     sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
//     each pair of adjacent items and swapping them if they are in the wrong order".
//     Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
//     Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

let myArr = [
  12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213,
];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1]) {
        let t = arr[j];
        arr[j] = arr[j + 1]
        arr[j + 1] = t
      }
    }
  }
  return arr
};
console.log("Q.24 | ", bubbleSort(myArr));

// 25. Write a JavaScript function that accept a list of country names as input and returns the
//     longest country name as output.
//     Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
//     Expected output: "United States of America"

let myCountries = [
  "United States of America",
  "Venezuela",
  "Austrailia",
  "Germany",
  "United Kingdom",
];

const longestCountryName = (arr) => {
  const valArr = arr.map((i) => i.length);

  let longIdx = Math.max(...valArr);

  const iterator = arr.values();
  for (const value of iterator) {
    if (value.length === longIdx) {
      return value;
    }
  }
};
console.log("Q.25 | ", longestCountryName(myCountries));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating
//     characters.

let myLongestSubString = "Telephone";

const longestSubString = (str) => {
  let tStr = "";
  let longestStr = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (tStr.indexOf(str[j]) !== -1) {
        i = str.indexOf(str[j], i) + 1;
        tStr = "";
      } else {
        tStr = str.slice(i, j + 1);
        if (tStr.length > longestStr.length) {
          longestStr = tStr;
        }
      }
    }
  }
  return(longestStr)
};
console.log("Q.26 | ", longestSubString(myLongestSubString));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
//     Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
//     symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
//     given string that is also a palindrome. For example, the longest palindromic substring of
//     "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
//     example, in the string "abracadabra", there is no palindromic substring with length greater than
//     three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
//     In some applications it may be necessary to return all maximal palindromic substrings (that is, all
//     substrings that are themselves palindromes and cannot be extended to larger palindromic
//     substrings) rather than returning only one substring or returning the maximum length of a
//     palindromic substring.

myLPalindromeStr = "abracadabraarbadacarba"

const longestPalindrome = (str) => {
  let size = str.length;
  if(size < 2) return str;

  let res = "";

  let maxLen = 1, start = 0;
  let low, high;
  for(let i = 0; i < size; i++) {
      low = i - 1;
      high = i + 1;
      while(high < size && str[high] === str[i]) high++;
      while(low >= 0 && str[low] === str[i]) low--;
      while(low >= 0 && high < size && str[low] === str[high]) {
          low--;
          high++;
      }

      if(maxLen < high - low - 1) {
          maxLen = high - low - 1;
          start = low + 1;
          res = str.substring(start, start + maxLen);
      }
  }
  return res;
};
console.log("Q.27 | ", longestPalindrome(myLPalindromeStr));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

const someFunc = (a, b) => {
  return a + b;
};

const javascriptFunc = (func) => {
  return func(6, 4);
};
console.log("Q.28 | ", javascriptFunc(someFunc));

// 29. Write a JavaScript function to get the function name.

const getFuncName = () => {
  return getFuncName.name;
};
console.log("Q.29 | ", getFuncName());
