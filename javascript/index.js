// 1. Write a JavaScript function that reverse a number.
function rev(num) {
  let res = 0;
  while (num / 10) {
    res *= 10;
    res += num % 10;
    num = Math.trunc(num / 10);
  }
  return res;
}
// var tests1 = [32243, 5345, 123, 45, 12312, 9342];
// console.log("_______________________\nNumber 1:");
// tests1.forEach((num) => {
//   console.log(num + " -> " + rev(num));
// });

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
function palindrome(str) {
  str = str.toLowerCase().replace(/ /g, "");
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// var tests2 = ["aba", "d", "RSDsr", "abc", "abccba"];
// console.log("\n_______________________\nNumber 2:");
// tests2.forEach((str) => {
//   console.log(str + " -> " + palindrome(str));
// });

// 3. Write a JavaScript function that generates all combinations of a string.
function strCombos(str) {
  var all_combinations = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length + 1; j++) {
      let subs = str.substring(i, j);
      all_combinations.push(subs);
    }
  }
  return all_combinations;
}
// var tests3 = ["aba", "d", "RSDsr", "abc", "abccba"];
// console.log("_______________________\nNumber 3:");
// tests2.forEach((str) => {
//   console.log(str + " -> " + strCombos(str));
// });

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
function alphabetSort(str) {
  return str.split("").sort().join("");
}
// var tests4 = ["potato", "donkey", "orange", "zebra", "abccba"];
// console.log("_______________________\nNumber 4:");
// tests4.forEach((str) => {
//   console.log(str + " -> " + alphabetSort(str));
// });

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function upperFirstLetter(str) {
  let split_str = str.split(" ");
  for (let i = 0; i < split_str.length; i++) {
    split_str[i] = split_str[i][0].toUpperCase() + split_str[i].substring(1);
  }
  return split_str.join(" ");
}
// var tests5 = ["potato", "donkey", "orange", "zebra", "abccba"];
// console.log("_______________________\nNumber 5:");
// tests5.forEach((str) => {
//   console.log(str + " -> " + upperFirstLetter(str));
// });

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string
function longestWord(str) {
  let split_str = str.split(" ");
  let longest_word = "";
  for (let i = 0; i < split_str.length; i++) {
    if (split_str[i].length > longest_word.length) {
      longest_word = split_str[i];
    }
  }
  return longest_word;
}

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowelCount(str) {
  let number_of_vowels = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    switch (char) {
      case "a":
        number_of_vowels++;
        break;
      case "e":
        number_of_vowels++;
        break;
      case "i":
        number_of_vowels++;
        break;
      case "o":
        number_of_vowels++;
        break;
      case "u":
        number_of_vowels++;
        break;
    }
  }
  return number_of_vowels;
}

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num == 2) {
    return true;
  }
  if (num % 2 == 0) {
    return false;
  }

  let maximum = Math.floor(Math.sqrt(num));
  for (let i = 3; i <= maximum; i += 2) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

// 9. Write a JavaScript function which accepts an argument and returns the type.
function argType(arg) {
  return typeof arguments[0];
}

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrixSize(n) {
  var identity_array = [];
  for (let i = 0; i < n; i++) {
    let collumn_to_add = [];
    collumn_to_add = Array(n).fill(0);
    collumn_to_add[i] = 1;
    identity_array.push(collumn_to_add);
  }
  return identity_array;
}

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
function secondLowestHighest(arr) {
  arr.sort();
  let return_arr = [arr[1], arr[arr.length - 2]];
  return return_arr;
}

// 12. Write a JavaScript function which says whether a number is perfect.
function isPerfectNumber(num) {
  let sum = 0;
  let maximum = Math.ceil(num / 2);
  for (let i = 1; i <= maximum; i += 1) {
    if (num % i == 0) {
      sum += i;
    }
  }
  if (sum === num) {
    return true;
  } else {
    return false;
  }
}

// 13. Write a JavaScript function to compute the factors of a positive integer
function computerFactors(num) {
  let factors = [];
  let maximum = Math.ceil(num / 2);
  for (let i = 1; i <= maximum; i += 1) {
    if (num % i == 0) {
      factors.push(i);
    }
  }
  return factors;
}

// 14. Write a JavaScript function to convert an amount to coins.
function convertCoins(num) {
  let coins = {
    25: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
  };
  while (num > 0) {
    if (num >= 25) {
      coins[25] += 1;
      num -= 25;
    } else if (num >= 10) {
      coins[10] += 1;
      num -= 10;
    } else if (num >= 5) {
      coins[5] += 1;
      num -= 5;
    } else if (num >= 2) {
      coins[2] += 1;
      num -= 2;
    } else if (num >= 1) {
      coins[1] += 1;
      num -= 1;
    }
  }
  return coins;
}
// var test_coins = [32243, 5345, 123, 45, 12312, 9342];
// console.log("_______________________\nNumber 14:");
// test_coins.forEach((num) => {
//   console.log(convertCoins(num));
// });

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
function getBN(b, n) {
  return Math.pow(b, n);
}

// 16. Write a JavaScript function to extract unique characters from a string.
function extractUnique(str) {
  let unique_chars = "";
  let unique_chars_obj = {};
  for (let i = 0; i < str.length; i++) {
    if (unique_chars_obj[str[i]] === undefined) {
      unique_chars += str[i];
      unique_chars_obj[str[i]] = 1;
    }
  }
  return unique_chars;
}

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function countLetters(str) {
  str = str.toLowerCase();
  let letter_counter_obj = {};
  for (let i = 0; i < str.length; i++) {
    if (letter_counter_obj[str[i]] === undefined) {
      letter_counter_obj[str[i]] = 1;
    } else {
      letter_counter_obj[str[i]] += 1;
    }
  }
  return letter_counter_obj;
}

// 18. Write a function for searching JavaScript arrays with a binary search.
function binarySearch(arr, value, index_arr = undefined) {
  arr.sort();

  if (index_arr === undefined) {
    index_arr = Array(arr.length).fill(0);
    for (let i = 0; i < index_arr.length; i++) {
      index_arr[i] = i;
    }
  }

  let half = Math.floor((arr.length - 1) / 2);
  let val_at_half = arr[half];
  let index = -1;
  console.log(index_arr);
  if (value < val_at_half) {
    let next_arr = arr.slice(0, half);
    let next_index_arr = index_arr.slice(0, half);
    index = binarySearch(next_arr, value, next_index_arr);
  } else if (value > val_at_half) {
    let next_arr = arr.slice(half, arr.length);
    let next_index_arr = index_arr.slice(half, index_arr.length);
    index = binarySearch(next_arr, value, next_index_arr);
  } else if (value == val_at_half) {
    index = index_arr[half];
  }
  return index;
}

// 19. Write a JavaScript function that returns array elements larger than a number.
function getLargeElements(arr, num) {
  elements_arr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      elements_arr.push(arr[i]);
    }
  }

  return elements_arr;
}

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
function generateId(n) {
  let possible_chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let random_sequence = "";

  for (let i = 0; i < n; i++) {
    let index = Math.floor(Math.random() * possible_chars.length);
    random_sequence += possible_chars[index];
  }

  return random_sequence;
}

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
function getSubset(arr, n) {
  let subsets = [[]];
  let n_subsets = [];

  for (let element of arr) {
    for (let i = 0; i <= subsets.length - 1; i++) {
      subsets.push([...subsets[i], element]);
    }
  }
  for (let i = 0; i < subsets.length; i++) {
    if (subsets[i].length === n) {
      n_subsets.push([...subsets[i]]);
    }
  }

  return n_subsets;
}

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
function countLetter(str, letter) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      counter++;
    }
  }
  return counter;
}

// 23. Write a JavaScript function to find the first not repeated character.
function firstUniqueChar(str) {
  str = str.toLowerCase();
  let char_count = {};
  for (let i = 0; i < str.length; i++) {
    if (char_count[str[i]] === undefined) {
      char_count[str[i]] = 1;
    } else {
      char_count[str[i]]++;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (char_count[str[i]] === 1) {
      return str[i];
    }
  }
  return -1;
}

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
function bubbleSort(arr) {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        arr_i = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = arr_i;
        sorted = false;
      }
    }
  }

  return arr;
}

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function findLongestName(arr) {
  let longest_name = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > longest_name) {
      longest_name = arr[i];
    }
  }
  return longest_name;
}

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function longestNonRepeat(str) {
  let max_substr = "";
  let current_substring = "";

  for (let i = 0; i < str.length; i++) {
    if (current_substring.includes(str[i])) {
      current_substring = str[i];
    } else {
      current_substring += str[i];
    }
    if (current_substring.length > max_substr.length) {
      max_substr = current_substring;
    }
  }

  return max_substr;
}

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
function longestPalindrome(str) {
  let longest_palindrome = "";
  for (let i = str.length; i >= 2; i--) {
    for (let j = 0; j < str.length + 1 - i; j++) {
      let subs = str.substring(j, j + i);
      let reversed = subs.split("").reverse().join("");
      if (subs === reversed) {
        if (subs.length > longest_palindrome.length) {
          longest_palindrome = subs;
        }
      }
    }
  }
  return longest_palindrome;
}

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function isJSFunc(func) {
  if (typeof func === "function") {
    func();
  }
}

// 29. Write a JavaScript function to get the function name.
function getFuncName(func) {
  if (typeof func === "function") {
    return func.name;
  } else {
    return false;
  }
}
