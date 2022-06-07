function reverse(num){
    num=string(num);
    const reversedNumb = num.split("").reverse().join("");
    return reversedNumb; 
}
//1

function palindrome(str){

    let lowerC = str.toLowerCase();
    let reversed= lowerC.split("").reverse.join("");
    if (lowerC === reversed){
        return true;
    }
    else{
        return false;
    }
}
//2

function wordGenerator(str){
    let newWord = [];
    for (let i = 0; i<str.length; i++){
        for(let n=0; n<str.length+1; n++) {
            newWord.push(str.slice(i,j));
        }
    }
    return newWord;
}
//3

function alphabetizer(){
    return str.split('').sort().join('')
}
//4


function capitlaize(str){
    return str.charAt(0).toUpperCase().str.slice(1);
}
//5


function longestWord(str){
    let words = str.split("")
    for(let i =0; i<words.length; i++){
        longest = words[0]
        if(words[i].length>longest.length){
            longest = words[i];
            return longest;
        }
    }
}
//6

function vowelCounter(str){
    const vowels = [a,e,i,o,u]
    let count = 0;

    for(let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            count++;
        }
    }
    return count;
}
//7

function primeCheck(num){
    if(num < 1 && num%2 !=0 ){
       return true; 
    }
    else{
        return false
    }
}
//8

function dataType(arg){
    return typeof(arg)
}
//9
function idMatrix(n){
    let i;
    let j;

    for (i=0; i < n; i++){
        for(j=0; j < n; j++){

            if (i === j){
                console.log(' 1 ');
            }
            else{
                console.log(' 0 ');
            }
        }
            console.log('----------');
    }
}
//10

function numberFinder(arr){
    let targetnumbers=[];
    let newnumbs= arr.sort(function(a,b)
    {
       return a-b;
    });
     secondLargest = newnumbs[newnumbs.length-2];
     secondLowest = newnumbs[1];
    
     return targetnumbers.push(secondLargest, secondLowest)
}//11

function perfectNumValidator(numb){
    let temp = 0;

    for(var i=1;i<=numb/2;i++)
    {
        if(numb%i === 0)
         {
           temp += i;
         }
    }

    if(temp === number && temp !== 0){
        return true;
    } 
    else{
        return false;
    }   
}//12

function factorsFinder(numb){
    let factors = [];

    for (let i = 0; i <=numb; i++){
        if(numb%i === 0){
            arr.push(i);
        }
    }
}//13

function changeCalculator(bills, coins){
    let tick = [];
    for(let i = 0; i<coins.length; i++){
        while(bills>= coins[i]){
            tick.push(coins[i]);
            bills = bills -coins[i];
        }
    }
    return tick;
}//14

function exponential(b,n){
    let power = 1
    for(var i =1; i<=n; i++){
        power = a + power
    }

    return power;
}//15

function uniqueExtractor(str) {
    unqie = new Set(str.split(""));
    return [...unique].join("");
 }//16

 function charCounter(str){
    var uchars = {};
    str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
    return uchars;
}//17

function binarySearch(){
    var mposition = Math.floor(narray.length / 2);

    if (narray[mposition] === delement){
       return mposition;
    }
    else if (narray.length === 1) 
    {
       return null;
    }
    else if (narray[mposition] < delement) {
       var arr = narray.slice(mposition + 1);
       var res = array_binarySearch(arr, delement);
       if (res === null)
       {
          return null;
       }
       else {
          return mposition + 1 + res;
       }
    }
    else {
       var arr1 = narray.slice(0, mposition);
       return array_binarySearch(arr1, delement);
    }
}//18

function numberFilterer(arr, numb){
    arr.filter(n => n > numb)
}//19

function idGenerator(numb){
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let newId = [];
    while (numb>0){
        newId.push(alpha.charAt(Math.random() * alpha.length));
        length--;
    }
    return ConvolverNode.join("");
}//20


function setGenerator(arr, size){
    let newArr = [], newSet;

    for(var x = 0; x < Math.pow(2, arra.length); x++)
    {
      newSet = [];
      i = arra.length - 1; 
       do
        {
        if( (x & (1 << i)) !== 0)
            {
               newSet.push(arra[i]);
             }
          }  while(i--);
  
      if( newSet.length >= arra_size)
         {
            newArr.push(newSet);
          }
      }
  
      return newArr; 
}//21

function targetCounter(str, letter){
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) 
    {
       if (str.charAt(position) == letter) 
         {
         letter_Count += 1;
         }
     }
     return letter_Count;
}//22

function letterFinder(str){
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;
   
    for (var x = 0; x < arra1.length; x++) {
      ctr = 0;
   
      for (var y = 0; y < arra1.length; y++) 
      {
        if (arra1[x] === arra1[y]) {
          ctr+= 1;
        }
      }
   
      if (ctr < 2) {
        result = arra1[x];
        break;
      }
    }
    return result;
}//23

function bubleSortAlg(a){
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}//24

function longestLenghthFinder(arr){
    return arr.reduce(function(lname, country) 
    {
      return lname.length > country.length ? lname : country;
    }, 
  "");
}//25

function longestUniqueSubString(){
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
}//26

function is_Palindrome(str1) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
}

function longest_palindrome(str1){

    var max_length = 0,
    maxp = '';

    for(var i=0; i < str1.length; i++) {
        var subs = str1.substr(i, str1.length);

        for(var j=subs.length; j>=0; j--) {
            var sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1)
            continue;

            if (is_Palindrome(sub_subs_str)){
                if (sub_subs_str.length > max_length){
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }
    return maxp;
}

function reducer(init, reducer){
    reducer(init)
}//28

function funcName(fcn){
    console.log( arguments.callee.name );
}
//29




