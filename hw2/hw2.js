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
    let ans = [];
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    let secMax = Number.MIN_VALUE;
    let secMin = Number.MAX_VALUE;
    for(let i in arr){
        if(arr[i] > secMax && arr[i] != max){
            secMax = arr[i];
        }

        if(arr[i] < secMin && arr[i] != min){
            secMin = arr[i];
        }
    }

    ans.push(secMin);
    ans.push(secMax);

    return ans;
}

function perfect(num){
    
}

function computeFactor(num){
    let ans = [];
    ans.push(1);
    for(let i = num-1; i >= 2; i--){
        if(num%i == 0){
            ans.push(num/i);
        }
    }

    ans.push(num);

    return ans;
}

function amountTocoins(amount, coins){
    let ans = [];
    let rest = amount; 
    for(let i in coins){
        let count = Math.floor(rest/coins[i]);
        for(let j = 0; j < count; j++){
            ans.push(coins[i]);
            rest -= coins[i];
        }
    }

    return ans;
}

function calculateExponent(b, n){
    let ans = b;
    if(n == 0){
        return 1;
    }

    for(let i = 0; i < n-1; i++){
        ans = ans * b;
    }

    return ans;
}

function extractUnique(input){
    let set = new Set();
    let ans = [];
    for(let i in input){
        if(!set.has(input[i])){
            set.add(input[i]);
            ans.push(input[i]);
        }
    }

    return ans.join("");
}

function binarySearch(arr, target){
    let l = 0; let r = arr.length-1;
    let mid;
    while(l <= r){
        mid = l+((r-l)>>1);
        if(target < arr[mid]){ // left
            r = mid-1;
        }else if(target > arr[mid]){
            l = mid+1;
        }else{
            return mid;
        }
    }
    return l;
}

//19?

function generateRandom(){
    
}


console.log("Input: ", 32243);
console.log("Reverse:", reverse(32243));

let p1 = "madam";
let p2 = "nurses run";
console.log(`${p1} is a Palindrome: `, isPalindrome(p1));
console.log(`${p2} is a Palindrome: `, isPalindrome(p2));

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

let findSec = [1,2,6,3,8];
console.log(`Find Second smallest and second largest in ${findSec}`, findSecond(findSec));

let calFac = 30;
console.log(`Factors of ${calFac}:`, computeFactor(calFac));

let amt = 46;
console.log(`${amt}:`, amountTocoins(amt, [25, 10, 5, 2, 1]));

let b = 2; let n = 10;
console.log(`${b}^${n} =`, calculateExponent(b,n));

let uni = "thequickbrownfoxjumpsoverthelazydog";
console.log(`Get unique characters in ${uni}:`, extractUnique(uni));

let sortedArr = [1,4,6,8,9,10]; let target = 8;
console.log(`${target} is at position`, binarySearch(sortedArr, target)); 