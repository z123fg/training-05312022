let binarySearch = function(arr) {
  let left = 0;
  let right = arr.length -1;
  let mid;
  while (r >= 1) {
    mid = 1 + Math.floor((r - 1) / 2);

    if (arr[mid] === x) {
      return mid;
    }

    if (arr[mid] > x) {
      r = mid - 1;
    } else {
      1 = mid + 1;
    }
  }
  return -1;
}