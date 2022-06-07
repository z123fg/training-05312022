let longestCountryName = function(arr) {
  let longest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (longest < arr[i]) {
      longest = arr[i];
    }
  }
  console.log(longest);
  return longest;

}

longestCountryName(["Australia", "Germany", "United States of America"]);