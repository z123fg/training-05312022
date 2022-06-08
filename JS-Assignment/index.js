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
// function alphaOrder(str) {
//   return str.split('').sort().join('')
// }

// console.log(alphaOrder('Antra'));

// 5.
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"))

// 6.
// function findLongestWordLength(str) {
//   let words = str.split(' ');
//   let maxLength = 0;

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//     }
//   }
//   return maxLength;
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// 7.
// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));

// 8. 
// function test_prime(n)
// {

//   if (n===1)
//   {
//     return false;
//   }
//   else if(n === 2)
//   {
//     return true;
//   }else
//   {
//     for(var x = 2; x < n; x++)
//     {
//       if(n % x === 0)
//       {
//         return false;
//       }
//     }
//     return true;  
//   }
// }

// console.log(test_prime(37));

// 9. 
// function detect_data_type(value)
// {
// var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
// if (typeof value === "object" || typeof value === "function") 
//     {
//      for (x = 0, len = dtypes.length; x < len; x++) 
//      {
//             if (value instanceof dtypes[x])
//             {
//                 return dtypes[x];
//             }
//       }
//     }
    
//     return typeof value;
// }
// console.log(detect_data_type(12));
// console.log(detect_data_type('w3resource'));
// console.log(detect_data_type(false));

// 10. 
// function matrix(n) {

//   var i;
//   var j;

//   for (i=0; i < n; i++)
//   {
//     for (j=0; j < n; j++)
//     {
//          if (i === j)
//          {
          
//            console.log(' 1 ');
//          }
                
//          else 
//           {
//            console.log(' 0 ');}
//           }
//        console.log('----------');
//      }
//  }
// matrix(4);