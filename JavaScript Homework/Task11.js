// Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4

const greatestarray = (arr) =>{
if (arr.length < 2) return;
  arr.sort((a, b) => a - b);
  console.log("The second lowest number is ", arr[1]);
  console.log("The Second highest number is ", arr[arr.length - 2]);
};
greatestarray([1,2,3,4,5])