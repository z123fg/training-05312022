// 1.
// function reverseNum(num) {
//   return (parseFloat(
//     num.toString().split('').reverse().join('')
//   )* Math.sign(num))
// }

// console.log(reverseNum(543.21))

// 2.
// function isPalindrome(string) {
//   const arrValues = string.split('')

//   const reverseArr = arrValues.reverse()

//   const reverseString = reverseArr.join('')

//   if (string == reverseString) {
//     console.log('It/s a Palindrome');
//   } else {
//     console.log('It/s not a Palindrome');
//   }
// }

// const string = prompt('Enter a String !')
// isPalindrome(string)

// 3. 
// let generateComb = (str) => {
//   let combination = []
//   for (let i = 0; i < str.length; i++){
//     for (let j = i + 1; j < str.length + 1; j++){
//       combination.push(str.slice(i , j))
//     }
//   }
//   return combination
// }
// console.log(generateComb('Dog'))

// 4.
function alphaOrder(str) {
  return str.split('').sort().join('')
}

console.log(alphaOrder('Antra'));