// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;

import { kMaxLength } from "buffer";

// Expected Output: 34223 
function bruteReverse(num){
    let temp;
    while(num!=0){
        temp=temp*10+num%10;
        num=parseInt(num/10);
    }
    return temp* Math.sign(num);
}

function reverse(num){
    return parseFloat(num.toString().split('').reverse().join(''))* Math.sign(num);

}


reverse(3004);

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.

//basic way
let palindrome=(word)=>{
    let len=word.length;
    for(let i=0; i<parseInt(len/2); i++){
        if(word[i]!==word[len-1-i]) return false;
    }
    return true;      
}

//another approach
function palindrome(word){
    let reverseword=word.split('').reverse().join('');
    if(reverseword!==word) return false;

    return true;
}

//3.
// Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dg, o, og, g
function generatestrings(name){
    //   let word=name.split('');
    //   word.foreach(myfunc);
      
    // removing dulpicate strings from an array.
    // x = Array.from(new Set(name.split(','))).toString();
      
    // getting new characters from an array by switching to set.
    // let uniquechars=[...new Set(name)];
    // console.log(uniquechars);
      //another method to set unique chars
    //   name.forEach((c) => {
    //     if (!uniqueChars.includes(c)) {
    //         uniqueChars.push(c);
    //     }
    // });
    //   let temp=[];

        var result = [];
    
        var loop = function (start,depth,prefix)
        {
            for(var i=start; i<name.length; i++)
            {
                var next = prefix+name[i];
                if (depth > 0)
                    loop(i+1,depth-1,next);
                else
                    result.push(next);
            }
        }
    
        for(var i=0; i<name.length; i++)
        {
            loop(0,i,'');
        }
    
        return result;
    }
    
    console.log(generatestrings("dog"));

// another method:
let str="dog";
let temp=[];
let arr=[];

function generateString(strin){
let uniquechars=[...new Set(strin)];
  arr=uniquechars.join('');
  console.log(arr);
  let unique=arr.toString();
  for (let i=0; i<unique.length;i++){
    for(let j=1;j<=unique.length-i;j++){
   
      console.log(unique.substr(i,j));
      temp.push(unique.substr(i,j));
    }
  }
  return temp;
}

console.log(generateString(str));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string
function orderInAlpha(str){
    let arr=str.split('');
    arr.sort();
    console.log(arr);
    return arr.join('').toString();
  }
  
  console.log(orderInAlpha("ayer"));


//   5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '
function CapitalizeFirstLetters(str){
    let words=str.split(' ');
    for(let i=0; i<words.length; i++){
      words[i]=words[i][0].toUpperCase()+words[i].substr(1);
    }
    return words;
  }
  
  console.log(CapitalizeFirstLetters("How are you?"));

// 6.Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development
function FindTheLongestWord(str){
    let words=str.split(' ');
    let maxlen="";
    for(let i=0; i<words.length; i++){
      if(maxlen.length<words[i].length){
        maxlen=words[i];
      }
    }
    return maxlen;
  }
  
  console.log(FindTheLongestWord("How are you?"));

//   7. Write a JavaScript function that accepts a string as a parameter and counts the number of
//   vowels within the string. 
//   Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
//   vowel here. 
//   Example string: 'The quick brown fox' 
//   Expected Output: 5

  // using regex
const vowelsnumber=(words)=>{
    return words.match(/[aeiou]/gi).length;
  }
  
  console.log(vowelsnumber("Asdif"));

  //using includes:
  // using regex
const vowelscount=(words)=>{
    let vowel=["a","e","i","o","u"];
    let count=0;
    for(let i=0; i<words.length;i++){
      if(vowel.includes(words[i].toLowerCase())){
        count++;
      }
    }
    return count;
  }
  
  console.log(vowelscount("Asdif"));

  
  

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
function CheckPrime(number){
    if(number===1||number===0){
      return false;
    }
      for(let i=2; i<number; i++){
          if (number%i===0){
              return false;
          }
      }
      return true;
  }
  console.log(CheckPrime(2));
  
//   9. Write a JavaScript function which accepts an argument and returns the type. 
//   Note: There are six possible values that typeof returns: object, boolean, function, number, string,
//   and undefined.

const returnType=(obj)=>{
    return typeof(obj);
}
let a=5;
console.log(returnType(a));

//10. Write a JavaScript function which returns the n rows by n columns identity matrix.

const constructIdentity = (num ) => {
   const res = [];
   for(let i = 0; i < num; i++){
      if(!res[i]){
         res[i] = [];
      };
      for(let j = 0; j < num; j++){
         if(i === j){
            res[i][j] = 1;
         }else{
            res[i][j] = 0;
         };
      };
   };
   return res;
};

console.log(constructIdentity(5));
  
// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
const displayNumbers=(arr)=>{
    arr.sort();
    // console.log(arr[1], arr[arr.length-2]);
    let a=arr[1]+arr[arr.length-2];
    return a;
}
console.log(displayNumbers(['1','3','2','3', '5', '9']));

// //  12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
// + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
// 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
// perfect numbers 496 and 8128.

const determinePerfect=(num)=>{
    var temp = 0;
    for(var i=1;i<=num/2;i++)
      {
          if(num%i === 0)
           {
             temp += i;
           }
      }
    
      if(temp === num && temp !== 0)
         {
        console.log("It is a perfect number.");
         } 
      else
         {
        console.log("It is not a perfect number.");
         } 
}

determinePerfect(496);


// 13. Write a JavaScript function to compute the factors of a positive integer.

const factors=(num)=>{
    let s="";
      for(let i=1; i<=num;i++){
          if(num%i===0){
            s+=i+','
          }
      }
     console.log(s);
  }
  factors(6);


// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1

const ConvertToCoins=(amount, coinsArr)=>{
    let level=0;
    let s="";
    //assuming coinsArr is sorted
    while(amount!=0){
        if(amount-coinsArr[level]>=0){
            amount=amount-coinsArr[level];
            s+=coinsArr[level]+",";
        }
        else{
            level++;
        }
    }
    return s;
}
console.log(ConvertToCoins(45,[25,10,5]));


// 15.Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result.

const result=(base, exp)=>{
    return base**exp;
}

console.log(result(2,4));

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg
const uniqueChars=(str)=>{
 return [...new Set(str)].join('').toString();
    }
    
console.log(uniqueChars("isdid"));



// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

const frequencyOfLetter=(str)=>{
    var frequency={};
    for(let i=0; i<str.length;i++){
        let char=str[i];
        //if frequency already exist add one
        if(frequency[char]){
            frequency[char]++;
        }
        else{
            frequency[char]=1;
        }

    }
    return frequency;
}

console.log(frequencyOfLetter("fdagerataiuh"));

// 18.Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value

const binarySearch=(arr,value)=>{
    //sorting the array
    arr.sort();
    let start=0, end=arr.length-1;
  console.log(start, end)
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(arr[mid]===value){return true;}

        else if (arr[mid]<value){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }
    return false;
}

console.log(binarySearch([1,2,5,4,6], 2));

// 19. Write a JavaScript function that returns array elements larger than a number. 

const listOfArray=(arr, num)=>{
    return arr.map(elements=>elements>num?elements:"").filter(Boolean)
}

console.log(listOfArray([5,53,4,5,6,7,7],7));


// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const generateRandomStrings=(n)=>{
const result = Math.random().toString(36).substring(0,n);
console.log(result);
}

generateRandomStrings(7);

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]

function getsubsets(arr,length){
    for(let i=0; i<length;i++){

    }
}

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o'

const countletters=(str, letter)=>{
    let count=0;
    for(let i=0;i<str.length;i++ ){
        if(str[i]===letter){
            count++;
        }
    }
    return count;
}
console.log(countletters("microsoft",'o'));

// 23.. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 

const nonRepeat=(str)=>{
   let arr1=str.split('');
   let result='';
   let count=0;
   for(let x=0; x<arr1.length;x++){
       count=0;
       for(let i=0; i<arr1.length;i++){
           if(arr1[x]=== arr1[i]){
               count++;
           }
       }
       if(count<2){
        result=arr1[x];
        break;
        }

    }
    return result;
}
  
console.log(nonRepeat("microsoft"));

// // Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1

const bubblesort=(arr)=>{
    let swap;
    let n = arr.length-1;
    let x=arr;
    do {
        swap = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swap = true;
            }
        }
        n--;
    } while (swap);
 return x; 
}

console.log(bubblesort([3,4,5,2,3,7]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America

const longestCountryName=(list)=>{
    let maxlen="";
    for(let i=0; i<list.length;i++){
        if(maxlen.length<list[i].length){
            maxlen=list[i];
        }
    }
    return maxlen;
}
console.log(longestCountryName(["Egypt", "Nepal","UK","USA","Mexico"]));

// 26.. Write a JavaScript function to find longest substring in a given a string without repeating
// characters. 
function longestSubstr(str){
    string="";
    longeststring="";
    let strs=str.split("");
    for(let i=0;i<strs.length;i++){
        for(let j=i; j<strs.length;j++){
            if (string.includes(strs[j])){
                break;
            }
            else{
                string+=strs[j];
            }
        }
            if(longeststring<string.length){
                longeststring=string;
            }
    }
    return longeststring;
}
console.log(longestSubstr("ajdfan"));

// 27. longest palindrome
function isPalindrome(str){
    let reverse=str.split("").reverse().join("");
    return reverse===str;
}

function longestPalindrome(str){
    let maxLength=0;
    let maxstr="";
    for(let i=0; i< str.length;i++){
        let IncreasingIndexFromLeft=str.substr(i,str.length);
        for(let j=str.length; j>=0; j--){
            if(isPalindrome(IncreasingIndexFromLeft.substr(0,j))){
                if(maxLength<IncreasingIndexFromLeft.substr(0,j).length){
                    maxLength=IncreasingIndexFromLeft.substr(0,j).length;
                    maxstr=IncreasingIndexFromLeft.substr(0,j);
                }
            }
        }
    }
    return maxstr;

}
console.log(longestPalindrome("atydbsbdyh"))

//28.Write a JavaScript program to pass a 'JavaScript function' as parameter.

const paraPass=(func,a)=>{
    console.log("This is function passing as a parameter demo");
    console.log(func(a));
}
console.log(paraPass(longestSubstr,"xyzabab"));

//29.Write a JavaScript function to get the function name. 
const getfunctionName=(func)=>{
    return func.name;
}
console.log(getfunctionName(paraPass));
