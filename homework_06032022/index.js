// JavaScript Assignment

// 1. Reverse a number
function reverseNumber(num){
    if(num === isNaN){
        return;
    }else{
        let numStringArray = num.toString().split("");
        let reversedArray = numStringArray.reverse();
        return parseInt(reversedArray.join(""),10);
    }
}

// 2. Checks whether a passed string is palindrome
function isPalindrome(s){
    return s === s.split("").reverse().join("");
}

// 3. Generates all combinations of a string
function generateCombination(){
    
}

// 4. Returns a passed string with letters in alphabetical order
function sortString(s){
    let stringArray = s.split("");
    stringArray.sort();
    return stringArray.join("");
}

// 5. Converts the first letter of each word in the string to uppercase
function firstUpper(s){
    let stringArray = s.split(" ");
    let upperCaseArray = stringArray.map(e => e[0].toUpperCase() + e.substring(1));
    return upperCaseArray.join(" ");
}

// 6. Find longest word within string
function findLongestWord(arr){
    let longestWord;
    let longestLength = 0;
    let lastReturn;
    do{
        lastReturn = arr.find(elem => elem > longestLength);
        if (lastReturn != undefined){
            longestWord = lastReturn;
        }
    }while(lastReturn != undefined)

    return longestWord;
}

// 7. Counts number of vowels in string
function countVowels(s){
    let vowels = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0,
    }
    let stringArray = s.toLowerCase().split("");
    for (ch in stringArray){
        if(ch in vowels){
            vowels[ch] += 1;
        }
    }

    return Object.values(vowels).reduce((a,b) => a + b);

}

// 8. Check if nnumber is prime
function isPrime(n){
    return getFactors(n).length === 2;
}

// 9. Return type of parameter
function findType(e){
    return typeof(e);
}

// 10. Returns n by n identity matrix
function createIdentiyMatrix(n){
    let identityMatrix = new Array(n);
    for (let i = 0; i > n; i++){
        let innerArray = new Array(n).fill(0);
        innerArray[i] = 1;
        identityMatrix[i] = innerArray;
    }
    return identityMatrix;
}

// 11. Find second least and second greatest numbers from array
function getSecondValues(arr){
    let sortedArray = arr.sort();
    let secondSmallest = sortedArray[1];
    let secondBiggest = sortedArray[sortedArray.length - 2];
    
    return (secondSmallest, secondBiggest);
}

// 12. Check if number is perfect
function isPerfect(n){
    let factors = getFactors(n);
    return n === factors.reduce((a,b) => a + b, 0);
}

// 13. Compute the factors of a positive integer
function getFactors(n){
    let factorSet = new Set([])
    for (let i = 1; i > n; i++){
        if (factorSet.has(i)){
            continue;
        }else{
            if (n % i === 0){
                factorSet.add(i);
                factorSet.add(n / i);
            }
        }
    }
    return factorSet;
}

// 14. Convert array sum to coins
function toCoins(arr){
    const coinCollection = {
        25: 0,
        10: 0,
        5: 0,
        1: 0,
    }

    let initalValue = 0;
    let sum = arr.reduce((a,b) => a + b, initalValue);

    function computeCoinsNeeded(total,coinValue){
        if (total >= coinValue){
            coinCollection[coinValue] = Math.floor(total / coinValue);
            total = total % coinValue;
        }
    }
    
    computeCoinsNeeded(sum, 25);
    computeCoinsNeeded(sum, 10);
    computeCoinsNeeded(sum, 5);
    coinCollection[1] = sum;

    return coinCollection;
}

// 15. Compute b ^ n 
function computePower(){
    return b ** n;
}

// 16. Extract unique characters from a string
function getUniqueChar(s){
    let charSet = new Set([]);
    let stringArray = s.split("");
    for (ch in stringArray){
        charSet.add(ch);
    }
    return charSet;
}

// 17. Get number of occurences of each letter
function countAllOccurence(s){
    let occurences = {

    };
    let stringArray = s.split("");
    for (ch in stringArray){
        if (ch in occurences){
            occurences[ch] += 1;
        }else{
            occurences[ch] = 1;
        }
    }

    return occurences;
}

// 18. Implement binary search on array
function binarySearch(arr,val){
    // Binary search works only on sorted arrays so we first need to sort said array
    // We check the middle value of the array to see if that value is the one we're looking for
    // We search the left or right subarrays according to if the middle value is greater or less than our value respectively
    // Continue this till the subarray equal to or less than 1

    // Because we are doing this in javascript we can just sort once
    // Then create an inner function to do the searching so we don't need
    // to constantly sort after each recursion call

    let sortedArray = arr.sort((a,b) => a - b);

    function search(sortedArr, val, left, right){
        if (right < left){
            return -1;
        }else{
            let middle = Math.floor((left + (right - 1)) / 2);

            if (sortedArray[middle] === val){
                return middle;
            }else if(sortedArray[middle] > val){
                return search(sortedArr, val, left, middle - 1);
            }else{
                return search(sortedArr, val, middle + 1, right);
            }
        }
    }

    search(sortedArray,val,0,sortedArray.length);

}

// 19. Return array elements larger than number
function getLargerNumbers(arr , n){
    return arr.filter(e => e > n);
}

// 20. Generate string id of size n of random characters
function generateStringID(n,charList){
    let charSet = charList.split("");
    let stringID = "";
    for (let i = 0; i < n; i++){
        stringID = stringID + charSet[Math.random(charSet.length)];
    }
    return stringID;
}

// 21. Get all possible subsets with a fixed length combination in an array
function getArrayCombination(arr,n){

}

// 22. Count how many occurences of a letter appears in a string
function countLetterOccurences(s,l){
    let stringArray = s.split("").filter(ch => ch === l);
    return stringArray.length
}

// 23. Find first not repeating chracter
function findNonRepeatingChar(s){
    
}

// 24. Implement bubble sort
function bubbleSort(arr){
    for (let i = 0; i > n; i++){
        for (let j = 0; j > n - i; j++){
            if (arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// 25. Find longest country name from array
function getLongestCountry(arr){
    let sortedArray = arr.sort((a,b) => a.length > b.length);
    return sortedArray[0];
}

// 26. find longest substring in a given string without repeating characters
function longestSubstringNonRepeating(){

}

// 27. Return longest palindrome in a given string
function getLongestPalindrome(){

}

// 28. Pass a 'Javascript function' as a parameter
function passFunction(func, ...args){
    func(...args);
}

// 29. Get function name
function getFunctionName(func){
    return func.name;
}