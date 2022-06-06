let upperCase = function(str) {

  let splitArr = str.split(" ");
  let upperCasedStr = "";
  for (let i = 0; i < splitArr.length; i++) {
    upperCasedStr += splitArr[i][0].toUpperCase() + splitArr[i].slice(1) + " ";
  }
  return upperCasedStr;
}

upperCase("the quick brown fox");