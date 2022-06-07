/* Question 1
1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223 
*/

function reverseNumber(x) {
  x = x + "";
  return x.split("").reverse().join("");
}
console.log(reverseNumber(5553444));

/* Question 2
2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward,
 e.g., madam or nurses run.
*/

function checkPalindrome(x) {
  let joinString = x.split("").reverse().join("");
  if (x === joinString) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPalindrome("racecar"));

/* Question 3
3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g 
*/

function comboOFString(x) {
  let newArray = [];
  for (let i = 0; i < x.length; i++) {
    for (let j = i + 1; j < x.length + 1; j++) {
      newArray.push(x.slice(i, j));
    }
  }
  return newArray;
}
console.log(comboOFString("dog"));

/* Question 4
4. Write a JavaScript function that returns a passed string with letters in 
alphabetical order. 
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/

function alphabeticalOrder(x) {
  x = x.split("").sort().join("");
  return x;
}
console.log(alphabeticalOrder("webmaster"));

/* Question 5
5. Write a JavaScript function that accepts a string as a parameter and converts 
the first letter of each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox '
*/

function upperCaseFirstLetterOfWords(x) {
  let splitString = x.split(" ");
  console.log(splitString);
  let newArray = splitString.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  console.log(newArray);
  return newArray.join(" ");
}
console.log(upperCaseFirstLetterOfWords("the quick brown fox"));

/* Question 6
6. Write a JavaScript function that accepts a string as a parameter and 
find the longest word within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development'
*/

function longestWord(x) {
  x = x.split(" ");
  return x.sort((a, b) => b.length - a.length)[0];
}
console.log(longestWord("Web Development Tutorial"));

/* Question 7
7. Write a JavaScript function that accepts a string as a parameter and counts 
the number of vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, 
we do not count 'y' as vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5
*/

function countVowels(x) {
  let count = x.match(/[aeiou]/gi).length;
  return count;
}
console.log(countVowels("The quick brown fox"));

/* Question 8 
8. Write a JavaScript function that accepts a number as a parameter and 
check the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 
that has no positive divisors other than 1 and itself.
*/

function primeNumber(x) {
  let isPrime = true;
  if (x === 1) {
    return !isPrime;
  }
  if (x > 1 && x % 2 === 0) {
    return !isPrime;
  } else {
    return isPrime;
  }
}
console.log(primeNumber(3));

/* Question 9
9. Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns: object, boolean, 
function, number, string, and undefined.
*/

function dataType(x) {
  let type = typeof x;
  return type;
}
console.log(dataType("blue"));

/* Question 10
10. Write a JavaScript function which returns the n rows by n columns identity matrix.
*/

function matrix(x) {
  for (let i = 0; i < x; i++) {
    for (j = 0; j < x; j++) {
      if (i === j) {
        console.log(" 1 ");
      } else {
        console.log(" 0 ");
      }
    }
    console.log("----------");
  }
  return x;
}
console.log(matrix(4));

/* Question 11
11. Write a JavaScript function which will take an array of numbers stored and
find the second lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4 
*/

function secondGreatestLowest(x) {
  x.sort(function (x, y) {
    return x - y;
  });
  var xFirstIndex = [x[0]];
  var result = [];

  for (var i = 1; i < x.length; i++) {
    console.log(x[i]);
    if (x[i - 1] !== x[i]) {
      xFirstIndex.push(x[i]);
    }
  }
  result.push(xFirstIndex[1], xFirstIndex[xFirstIndex.length - 2]);
  return result.join(",");
}

console.log(secondGreatestLowest([1, 2, 3, 4, 5, 6, 7]));

/* Question 12
12. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia: In number theory, a perfect number is a positive 
integer that is equal to the sum of its proper positive divisors, that is, 
the sum of its positive divisors excluding the number itself 
(also known as its aliquot sum). Equivalently, a perfect number is a 
number that is half the sum of all of its positive divisors (including itself).
Example: The first perfect number is 6, because 1, 2, and 3 are its proper 
positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to 
half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. 
The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by 
the perfect numbers 496 and 8128.
*/

function perfectNumber(x) {
  var sum = 0;
  for (var i = 1; i < x; i++) {
    if (x % i == 0) {
      sum += i;
    }
  }
  if (sum == x) {
    return true;
  }
  return false;
}
console.log(perfectNumber(6));

/*Question 13
13. Write a JavaScript function to compute the factors of a positive integer. 
*/

function positiveNumber(x) {
  for (let i = 1; i <= x; i++) {
    if (x % i == 0) {
      console.log(i);
    }
  }
}
console.log(positiveNumber(6));

/* Question 14
14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1
*/

function convertToCoins(amount, coins) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      console.log(coins[0]);
      left = amount - coins[0];
      return [coins[0]].concat(convertToCoins(left, coins));
    } else {
      coins.shift();
      return convertToCoins(amount, coins);
    }
  }
}
console.log(convertToCoins(46, [25, 10, 5, 2, 1]));

/* Question 15
15. Write a JavaScript function to compute the value of bn where n is 
the exponent and b is the bases. Accept b and n from the user and display the result.
*/

function valueOfBn(b, n) {
  var value = 1;
  for (var i = 1; i <= n; i++) {
    value = b * value;
  }
  return value;
}
console.log(valueOfBn(2, 3));

/*Question 16
16. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg"
*/

function extractChar(x) {
  var x = x;
  var char = "";
  for (var i = 0; i < x.length; i++) {
    if (char.indexOf(x.charAt(i)) == -1) {
      char += x[i];
    }
  }
  return char;
}
console.log(extractChar("thequickbrownfoxjumpsoverthelazydog"));

/* Question 17
17. Write a JavaScript function to get the number of 
occurrences of each letter in specified string. 
*/

function countChar(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
}
console.log(countChar("string", "g"));

/* Question 18
18. Write a function for searching JavaScript arrays with a binary search. 
Note: A binary search searches by splitting an array into smaller and 
smaller chunks until it finds the desired value.
*/

function binarySearch(array, key) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (array[middle] === key) {
      return middle;
    } else if (array[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1; // no key sound
}
console.log(binarySearch([1, 2, 3, 4, 5], 5));

/* Question 19
19. Write a JavaScript function that returns array elements larger than a number. 
*/

function largerNumber(array, number) {
  return array.reduce((arrayItems, current) => {
    if (current > number) {
      return arrayItems.concat(current);
    } else {
      return arrayItems;
    }
  }, []);
}
console.log(largerNumber([65, 16, 0, 6, 64, 1, 68], 16));

/* Question 20
20. Write a JavaScript function that generates a string id (specified length) 
of random characters. 
Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/

function createId(x) {
  var text = "";
  var charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < x; i++) {
    text += charList.charAt(Math.floor(Math.random() * charList.length));
  }
  return text;
}
console.log(createId(8));

/* Question 21
21. Write a JavaScript function to get all possible subset with a fixed length 
(for example 2) combinations in an array. 
Sample array: [1, 2, 3] and subset length is 2 
Expected output: [[2, 1], [3, 1], [3, 2]]
*/

function subsets(array, arraySize) {
  var resultArray = [],
    result;
  for (var x = 0; x < Math.pow(2, array.length); x++) {
    result = [];
    i = array.length - 1;
    do {
      if ((x & (1 << i)) !== 0) {
        result.push(array[i]);
      }
    } while (i--);
    if (result.length >= arraySize) {
      resultArray.push(result);
    }
  }
  return resultArray;
}
console.log(subsets([1, 2, 3], 2));

/* Question 22
22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
Sample arguments: 'microsoft.com', 'o' 
Expected output: 3 
*/

function countNumberOfOccurences(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
}
console.log(countNumberOfOccurences("microsoft.com", "o"));

/* Question 23
23. Write a JavaScript function to find the first not repeated character. 
Sample arguments: 'abacddbec' 
Expected output: 'e' 
*/

function nonRepeatingCharacter(x) {
  for (let i = 0; i < x.length; i++) {
    let char = x[i];
    if (x.indexOf(char) == i && x.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return " ";
}
console.log(nonRepeatingCharacter("abacddbec"));

/* Question 24
24. Write a JavaScript function to apply Bubble Sort algorithm. 
Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort,
is a simple sorting algorithm that works by repeatedly stepping through the list 
to be sorted, comparing each pair of adjacent items and swapping them if they are 
in the wrong order". 
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/

function bubbleSortAlgorithm(x) {
  var swapp;
  var n = x.length - 1;
  do {
    swapp = false;
    for (var i = 0; i < n; i++) {
      if (x[i] < x[i + 1]) {
        var temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swapp = true;
      }
    }
    n--;
  } while (swapp);
  return x;
}
console.log(
  bubbleSortAlgorithm([
    12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213,
  ])
);

/* Question 25
25. Write a JavaScript function that accept a list of country names as input 
and returns the longest country name as output. 
Sample function: Longest_Country_Name(["Australia", "Germany", 
"United States of America"])
Expected output: "United States of America"
*/

function longestCountryName(name) {
  return name.reduce(function (longestName, country) {
    return longestName.length > country.length ? longestName : country;
  }, "");
}
console.log(
  longestCountryName(["Australia", "Germany", "United States of America"])
);

/* Question 26
26. Write a JavaScript function to find longest substring in a given 
a string without repeating characters. 
*/

function longestSubstringNorepeating(x) {
  var chars = x.split("");
  var currentChar;
  var str = "";
  var longestString = "";
  var hash = {};
  for (var i = 0; i < chars.length; i++) {
    currentChar = chars[i];
    if (!hash[chars[i]]) {
      str += currentChar;
      hash[chars[i]] = { index: i };
    } else {
      if (longestString.length <= str.length) {
        longestString = str;
      }
      var prev_dupeIndex = hash[currentChar].index;
      var str_FromPrevDupe = x.substring(prev_dupeIndex + 1, i);
      str = str_FromPrevDupe + currentChar;
      hash = {};
      for (var j = prev_dupeIndex + 1; j <= i; j++) {
        hash[x.charAt(j)] = { index: j };
      }
    }
  }
  return longestString.length > str.length ? longestString : str;
}
console.log(longestSubstringNorepeating("google.com"));
// Found solution but I dont understand how this works

/* Question 27
27. Write a JavaScript function that returns the longest palindrome in a given string. 
Note: According to Wikipedia "In computer science, the longest palindromic substring 
or longest symmetric factor problem is the problem of finding a maximum-length 
contiguous substring of a given string that is also a palindrome. For example, 
the longest palindromic substring of "bananas" is "anana". The longest palindromic 
substring is not guaranteed to be unique; for example, in the string "abracadabra",
there is no palindromic substring with length greater than three, but there are two 
palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings 
(that is, all substrings that are themselves palindromes and cannot be extended to 
larger palindromic substrings) rather than returning only one substring or returning 
the maximum length of a palindromic substring.
*/
function longestPalindrome(x) {
  var reverse = x.split("").reverse().join("");
  return x == reverse;
}

function palindrome(x) {
  var maxLength = 0,
    maxPalindrome = "";

  for (var i = 0; i < x.length; i++) {
    var string = x.substr(i, x.length);

    for (var j = string.length; j >= 0; j--) {
      var subString = string.substr(0, j);
      if (subString.length <= 1) continue;

      if (longestPalindrome(subString)) {
        if (subString.length > maxLength) {
          maxLength = subString.length;
          maxPalindrome = subString;
        }
      }
    }
  }

  return maxPalindrome;
}
console.log(palindrome("abracadabra"));

/* Question 28
Write a JavaScript program to pass a 'JavaScript function' as parameter. 
*/

function addId(id, refreshCallback) {
  return refreshCallback();
}
function refreshStudentList() {
  return "Karl"
}
console.log(addId(533, refreshStudentList));

/* Question 29
Write a JavaScript function to get the function name. 
*/
function oneTwoThree() {
  console.log(arguments.callee.name);
}
oneTwoThree();
