// 1. reverse a number.
function reverse(number) {
  if(typeof number === 'number'){
    return Number(number.toString().split("").reverse().join(""));
  }
  else if(typeof number === 'string'){
    return number.split("").reverse().join("")
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

}
// question 4 returns a passed string with letters in alphabetical order. 
function orderString(string) {
  
}