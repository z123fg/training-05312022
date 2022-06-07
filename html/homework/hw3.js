function reverse(num){
    num=string(num);
    const reversedNumb = num.split("").reverse().join("");
    return reversedNumb; 
}

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

function wordGenerator(str){
    let newWord = [];
    for (let i = 0; i<str.length; i++){
        for(let n=0; n<str.length+1; n++) {
            newWord.push(str.slice(i,j));
        }
    }
    return newWord;
}

function capitlaize(str){
    return str.charAt(0).toUpperCase().str.slice(1);
}

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

function primeCheck(num){
    if(num < 1 && num%2 !=0 ){
       return true; 
    }
    else{
        return false
    }
}

function dataType(arg){
    return typeof(arg)
}

