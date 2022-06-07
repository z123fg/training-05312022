let largeElements = function (arr, num) {
  let arrOfLargeElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      arrOfLargeElements.push(arr[i]);
    }
  }
  console.log(arrOfLargeElements);
  return arrOfLargeElements;
}

largeElements([1, 54, 10, 100, 12, 15], 15);