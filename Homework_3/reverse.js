let reverseNum = function(num) {
  let stringNum = num.toString();
  let reversedNum = stringNum.split("").reverse().join("");
  console.log(stringNum.split("").reverse().join(""));
  return reversedNum;
}

reverseNum(12345);