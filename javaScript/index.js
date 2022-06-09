// 1. reverse a number.
function reverse(number) {
  if (typeof number === "number") {
    return Number(number.toString().split("").reverse().join(""));
  } else if (typeof number === "string") {
    return number.split("").reverse().join("");
  }
}
// test question 1
console.log(reverse(1234567890));

// 2. string is palindrome or not?
function palindrome(string) {
  const reverseSting = string.split("").reverse().join("");
  return reverseSting === string;
}
// test question 2
console.log(palindrome("helleh"));

// question 3 generates all combinations of a string
function combinationsOfaString(string) {
  list_of_arr = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      list_of_arr.push(string.slice(i, j));
    }
  }
  return list_of_arr;
}
// test question 3
console.log(combinationsOfaString("dog"));

// question 4 returns a passed string with letters in alphabetical order.
function orderString(string) {
  return string.split("").sort().join("");
}
// test question 4
console.log(orderString("daegbcf"));

// question 5 Write a function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
function capitalALetterInFirstWord(string){
  return string.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}
// test question 5
console.log(capitalALetterInFirstWord("how are you?"));

new Promise((resolve, reject) => {})