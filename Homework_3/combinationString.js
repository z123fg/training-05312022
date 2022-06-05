let combinationString = function(string) {
 let allCombinations = [];

 for (let i = 0; i < string.length; i++) {
   for (let j = i + 1; j < string.length + 1; j++) {
    allCombinations.push(string.slice(i, j));
   }
 }
 console.log(allCombinations);
}

combinationString("dog");