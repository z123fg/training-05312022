let palindromeChecker = function(string) {

  let copy = string;
  let reversed = copy.split("").reverse().join("");
  console.log(reversed);
  if (reversed === string) {
    return true;
  } else {
    return false;
  }
}

palindromeChecker("madam")