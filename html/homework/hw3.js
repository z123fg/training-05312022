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


