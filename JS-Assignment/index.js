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

// 11 .
// function Second_Greatest_Lowest(arr_num)
// {
//   arr_num.sort(function(x,y)
//            {
//            return x-y;
//            });
//   var uniqa = [arr_num[0]];
//   var result = [];
  
//   for(var j=1; j < arr_num.length; j++)
//   {
//     if(arr_num[j-1] !== arr_num[j])
//     {
//       uniqa.push(arr_num[j]);
//     }
//   }
//     result.push(uniqa[1],uniqa[uniqa.length-2]);
//   return result.join(',');
//   }

// console.log(Second_Greatest_Lowest([1,2,3,4,5]));

// 12 .
// function is_perfect(number)
// {
// var temp = 0;
//    for(var i=1;i<=number/2;i++)
//      {
//          if(number%i === 0)
//           {
//             temp += i;
//           }
//      }
   
//      if(temp === number && temp !== 0)
//         {
//        console.log("It is a perfect number.");
//         } 
//      else
//         {
//        console.log("It is not a perfect number.");
//         }   
//  } 
// is_perfect(28);

// 13 . 
// function factors(n)
// {
//  var num_factors = [], i;
 
//  for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
//   if (n % i === 0)
//   {
//    num_factors.push(i);
//    if (n / i !== i)
//     num_factors.push(n / i);
//   }
//  num_factors.sort(function(x, y)
//    {
//      return x - y;});  // numeric sort
//      return num_factors;
//     }
// console.log(factors(15));  // [1,3,5,15] 
// console.log(factors(16));  // [1,2,4,8,16] 
// console.log(factors(17));  // [1,17]

// 14 .
// function amountTocoins(amount, coins) 
// {
//  if (amount === 0) 
//   {
//      return [];
//    } 
//  else
//    {
//      if (amount >= coins[0]) 
//        {
//         left = (amount - coins[0]);
//         return [coins[0]].concat( amountTocoins(left, coins) );
//         } 
//       else
//         {
//          coins.shift();
//          return amountTocoins(amount, coins);
//         }
//     }
// } 
// console.log(amountTocoins(46, [25, 10, 5, 2,1]));

// 15 .
// function exp(b,n)
// {
//         var ans = 1;
//         for (var i =1; i <= n; i++)
//         {
//                 ans = b * ans;        
//         }
//         return ans;
// }
// console.log(exp(2, 3));

// 16 .
// function unique_char(str1)
// {
//  var str=str1;
//  var uniql="";
//  for (var x=0;x < str.length;x++)
//  {

//  if(uniql.indexOf(str.charAt(x))==-1)
//   {
//   uniql += str[x];  
  
//    }
//   }
//   return uniql;  
// }  
// console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

// 17 .
// function count(string) {
//   let string1 = string.split("").sort().join("");
//   let counter = 1;
//   for (let i = 0; i < string.length; i++) {
//     if (string1[i] == string1[i + 1]) {
//       counter++;
//     } else {
//       console.log(string1[i] + " " + counter);
//       counter = 1;
//     }
//   }
// }
// count("thequickbrownfoxjumpsoverthelazydog");

// 18 .
// function array_binarySearch(narray, delement) {
//   var mposition = Math.floor(narray.length / 2);

//   if (narray[mposition] === delement){
//      return mposition;
//   }
//   else if (narray.length === 1) 
//   {
//      return null;
//   }
//   else if (narray[mposition] < delement) {
//      var arr = narray.slice(mposition + 1);
//      var res = array_binarySearch(arr, delement);
//      if (res === null)
//      {
//         return null;
//      }
//      else {
//         return mposition + 1 + res;
//      }
//   }
//   else {
//      var arr1 = narray.slice(0, mposition);
//      return array_binarySearch(arr1, delement);
//   }
// }

// var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
// console.log(array_binarySearch(myArray, 6));

// 19 .
// let returnLarger = (arr, num) => {
//   return arr.reduce((acc, curr)=>{  
//     if(curr > num){
//       return acc.concat(curr)  // Concatenate the acc with arr
//     }else{
//       return acc
//     }
//   }, [])   // Initialize the accumulator with an empty array
// }
  
  
// console.log(returnLarger( [65, 16, 0, 6, 64, 1, 68], 16))
// console.log(returnLarger([6, 46, 54, 6, 56, 54, 65, 4, 65], 50))

// 20 .
// function makeid(l)
// {
// var text = "";
// var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// for(var i=0; i < l; i++ )
// {  
// text += char_list.charAt(Math.floor(Math.random() * char_list.length));
// }
// return text;
// }
// console.log(makeid(8));

