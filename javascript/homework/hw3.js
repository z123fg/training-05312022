// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 
function f1(num) {
    let res = 0;
    while(num / 10) {
        res *= 10;
        res += num % 10;
        num = Math.trunc(num / 10);
    }
    return res;
}

console.log("q1: ", f1(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function f2(str) {
    str = str.toLowerCase().replace(/ /g, "");
    let i = 0, size = str.length;

    for(i; i < Math.trunc(size / 2); i++) {
        if(str[i] !== str[size - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log("q2: ", f2("madam"));
console.log("q2: ", f2("nurses run"));

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 

function f3(str) {
    res = [];

    for(let i = 0; i < str.length; i++) {
        let temp = str[i];
        res.push(temp);
        for(let j = i + 1; j < str.length; j++) {
            temp += str[j];
            res.push(temp);
        }
    }
    return res;
}

console.log("q3: ", f3("dog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function f4(str) {
    str = str.split('').sort().join('');
    return str;
}

console.log("q4: ", f4("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function f5(str) {
    let arr = str.split(' ');
    let res = [];

    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        res.push(arr[i]);
    }
    return res.join(' ');
}

console.log("q5: ", f5('the quick brown fox'));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function f6(str) {
    str = str.split(" ");

    let max_len = 0;
    let max_word = "";

    for (let i = 0; i < str.length; i++) {
        if(str[i].length > max_len) {
            max_len = str[i].length;
            max_word = str[i];
        }
    }
    return max_word;
}

console.log("q6: ", f6('Web Development Tutorial'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5

function f7(str) {
    let res = 0;

    for(let i = 0; i < str.length; i++) {
        let c = str[i];
        if(c === 'a' || c === 'o' || c === 'e' || c === 'i' || c === 'u' ||
           c === 'A' || c === 'O' || c === 'E' || c === 'I' || c === 'U') {
            res++;
        } 
    }
    return res;
}

console.log("q7: ", f7('The quick brown fox'));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function f8(num) {
    if(num === 1) return false;
    else if(num === 2) return true;
    else {
        for(let i = 2; i < num; i++) {
            if(num % i === 0) {
                return false;
            }
        }
    }
    return true;
}

console.log("q8: ", f8(6));

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function f9(x) {
    return typeof x;
}
let y;
console.log("q9: ", f9(y));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

function f10(n) {
    let mat = Array(n).fill(null).map(() => Array(n).fill(0));
    for(let i = 0; i < n; i++) {
        mat[i][i] = 1;
    }
    return mat;
}

console.log("q10: ", f10(5));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 

function f11(arr) {
    arr.sort();
    let arr_set = new Set(arr);
    arr = Array.from(arr_set);
    console.log(arr_set);
    let res1 = 0, res2 = 0;
    res1 = arr[1];
    res2 = arr[arr.length - 2];
    return [res1, res2];
}

console.log("q11: ", f11([6,1,2,1,3,4,5]));

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function f12(n) {
    let divisors = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            divisors.push(i);
        }
    }
    let sum = 0;
    for(let i = 0; i < divisors.length; i++) {
        sum += divisors[i];
    }
    return (sum === 2*n) && n !== 0;
}

console.log("q12: ", f12(8128));

// 13. Write a JavaScript function to compute the factors of a positive integer. 

function f13(n) {
    let res = [];
    for(let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if(n % i === 0) {
            res.push(i);
            if(n / i !== i) {
                res.push(n / i);
            }
        }
    }

    res.sort((x, y ) => {
        return x - y;
    });

    return res;
}

console.log("q13: ", f13(16));

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1

function f14(amount, coins) {
    let res = [];
    while(amount > 0) {
        for(let i = 0; i < coins.length; i++) {
            if(amount - coins[i] >= 0) {
                res.push(coins[i]);
                amount -= coins[i];
                break;
            }
        }
    }
    return res;
}

console.log("q14: ", f14(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the 
// exponent and b is the bases. Accept b and n from the user and display the result. 

function f15(b, n) {
    let res = 1;
    for(let i = 0; i < n; i++) {
        res *= b;
    }
    return res;
}
// let b = prompt("q15: b: ");
// let n = prompt("q15: n: ");
// console.log("q15: ", f15(b, n));
console.log("q15: ", f15(2, 3));

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function f16(str) {
    let res = "";

    for(let i = 0; i < str.length; i++) {
        if(res.indexOf(str[i]) === -1) {
            res += str[i];
        }
    }
    return res;
}

console.log("q16: ", f16("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 

function f17(str) {
    str = str.replace(/ /g, '');
    let res = {};

    for(let i = 0; i < str.length; i++) {
        if(!res[str[i]]) {
            res[str[i]] = 1;
        }
        else {
            res[str[i]] += 1;
        }
    }
    return res;
}

console.log("q17: ", f17("the quick brown fox jumps over the lazy dog"));

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function f18(arr, ele) {
    let left = 0, right = arr.length - 1;
    while(left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if(arr[mid] == ele) {
            return mid;
        } 
        else if(arr[mid] > ele) {
            right = mid;
            continue;
        }
        else {
            left = mid + 1;
            continue;
        }
    }
    return -1;
}

console.log("q18: ", f18([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 14));


// 19. Write a JavaScript function that returns array elements larger than a number. 

function f19(arr, ele) {
    return arr.filter((x) => {
        return x >= ele;
    });
}

console.log("q19: ", f19([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 16));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function f20(n) {
    let list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let res = "";

    for(let i = 0; i < n; i++) {
        res += list[Math.floor(Math.random() * list.length)];
    }
    return res;
}

console.log("q20: ", f20(10));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]

function f21(n) {
    let list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let res = "";

    for(let i = 0; i < n; i++) {
        res += list[Math.floor(Math.random() * list.length)];
    }
    return res;
}

console.log("q21: ", f21(10));
