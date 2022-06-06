let longestWord = function(str) {
  let splitStr = str.split(" ");
  let longestStr = splitStr[0];
  for (let i = 1; i < splitStr.length; i++) {
    if (longestStr.length < splitStr[i].length) {
      longestStr = splitStr[i];
    }
  }
  console.log(longestStr);
  return longestStr;
}

longestWord("Web Development Tutorial")