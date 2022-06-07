let longestPalindrome = function(str) {
  let maxLength = 0;
  let palindrome = "";

  for (let i = 0; i < str.length; i++) {
    let subs = str.substr(i, str.length);
    for (let j = subs.length; j >= 0; j--) {
      let subsString = subs.substring(0, j);
      if (subsString.length <= 1) {
        continue;
      }

      if (isPalindrome(subsString)) {
        if (subsString.length > maxLength) {
          maxLength = subsString.length;
          palindrome = subsString;
        }
      }
    }
  }
  console.log(palindrome);
  return palindrome;

}

let isPalindrome = function(str) {
  let res = str.split("").reverse().join("");
  return res === str;
}

longestPalindrome("abracadabra");