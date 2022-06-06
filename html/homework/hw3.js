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

    let split = str.split("")
    
}