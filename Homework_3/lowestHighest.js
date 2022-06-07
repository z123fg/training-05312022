let lowestHighest = function(numArr) {
  let sortedArr = numArr.sort();
  console.log(numArr[1] + " " + numArr[numArr.length - 2]);
  return numArr[1] + " " + numArr[numArr.length - 1];

}

lowestHighest([1, 2, 3, 4, 5]);