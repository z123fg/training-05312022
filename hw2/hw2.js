function reverse(num){
    let chars = Array.from(num.toString());
    let l = 0; let r = chars.length-1;
    while(l <= r){
        //swap
        let tmp = chars[l];
        chars[l] = chars[r];
        chars[r] = tmp;

        l++; r--;
    }
    
    return Number(chars.join(""));
}

function isPalindrome(input){
    let str = input.replace(/\s/g, ''); //global. match all white spaces
    
    let chars = Array.from(str);
    let l = 0; let r = chars.length-1;
    while(l <= r){
        if(chars[l] != chars[r]){
            return false;
        }

        l++; r--;
    }

    return true;

}

//

function sortAlphabetical(input){
    let chars = Array.from(input);
    chars.sort(function(a, b){
        if(a<b){return -1}
        if(a>b){return 1}
        return 0;
    });
    
    return chars.join("");
}

function firstToUpperCase(input){
    let words = input.split(" ");
    for(let i in words){
        words[i] = words[i].replace(/^\w/, words[i].charAt(0).toUpperCase());
    }
    
    return words.join(" ");
}

function findLongestWord(input){
    let words = input.split(" ");
    let longest = words[0];
    for(let i in words){
        if(words[i].length > longest.length){
            longest = words[i];
        }
    }

    return longest;
}

function countVowels(input){
    let set = new Set();
    set.add("a"); set.add("e");
    set.add("i"); set.add("o"); set.add("u");

    let count = 0;
    for(let i in input){
        if(set.has(input[i])){
            count++;
        }
    }

    return count;

}

function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }

    return true;
}

function getType(input){
    return typeof input;
}

function getIdentityMatrix(n){
    let matrix = [];
    for(let i = 0; i < n; i++){
        let row = new Array(n).fill(0);
        row[i] = 1;
        matrix.push(row);
    }

    return matrix;
}

function findSecond(arr){
    let max = Math.max(...arr);
    

    return max;
}


console.log("Input: ", 32243);
console.log("Reverse:", reverse(32243));

let p1 = "madam";
let p2 = "nurses run";
console.log(`${p1} is a Palindrome: `, isPalindrome(p1));
console.log(`${p2} is a Palindrome: `, isPalindrome(p2));2

console.log("Sort 'webmaster' in alphabetical order: ", sortAlphabetical("webmaster"));
console.log(firstToUpperCase("the quick brown fox"));
console.log(findLongestWord("Web Development Tutorial"));
console.log(`The String has ${countVowels("the quick brown fox")} vowels`);

let prime = 7;
console.log(`${prime} is a prime:`, isPrime(9));

let type1 = 1;
console.log(`${type1} is`, getType(type1));
let type2 = "abc";
console.log(`${type2} is`, getType(type2));

let matrix = [];
console.log(getIdentityMatrix(4));

console.log(findSecond([1,2,3,4,5]));
