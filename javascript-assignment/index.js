/*
    Le Uyen Nguyen
*/

/* 
1. Write a JavaScript function that reverse a number.
*/
function reverseNumber(num) {
	return num.toString().split('').reverse().join('');
}

console.log('1. ' + reverseNumber(32243));

/*
2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam or nurses run.
*/
function isPalindrome(str) {
	var regex = /[^A-Za-z0-9]/g;
	var modifiedStr = str.toLowerCase().replace(regex, '');
	var reverseStr = modifiedStr.split('').reverse().join('');
	return reverseStr === modifiedStr;
}

console.log('2. ' + isPalindrome('nurses run'));

/*
3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g 
*/
function generateCombination(str) {
	var result = [];
	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length + 1; j++) {
			result.push(str.slice(i, j));
		}
	}
	return result;
}

console.log('3. ' + generateCombination('dog'));

/*
4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/
function alphabet(str) {
	return str.split('').sort().join('');
}

console.log('4. ' + alphabet('webmaster'));

/*
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox
*/
function capitalizeFirstLetter(str) {
	return str
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.substring(1))
		.join(' ');
}
console.log('5. ' + capitalizeFirstLetter('the quick brown fox'));

/*
6. Write a JavaScript function that accepts a string as a parameter and find the longest word
within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development'
*/
function longestWord(str) {
	var arr = str.split(' ').reduce((longestWord, currWord) => {
		return longestWord.length < currWord.length ? currWord : longestWord;
	}, ' ');

	return arr;
}
console.log('6. ' + longestWord('Web Development Tutorial'));

/*
7. Write a JavaScript function that accepts a string as a parameter and counts the number of
vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5
*/
function countVowels(str) {
	return str
		.toLowerCase()
		.split('')
		.filter((letter) => 'aeiou'.includes(letter)).length;
}

console.log('7. ' + countVowels('The quick brown fox'));

/*
8. Write a JavaScript function that accepts a number as a parameter and check the number is
prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.
*/
function isPrime(num) {
	if (num === 1) return false;
	else if (num === 2) return true;
	else {
		for (let i = 3, j = Math.sqrt(num); i <= j; i += 2) {
			if (num % i === 0) return false;
		}
		return true;
	}
}

console.log('8. ' + isPrime(7));

/*
9. Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns: object, boolean, function, number, string,
and undefined.
*/
function isType(arg) {
	return typeof arg;
}

console.log(
	'9. ' +
		isType(() => {
			return 'Question 9';
		})
);

/*
10. Write a JavaScript function which returns the n rows by n columns identity matrix.
*/
function identityMatrix(n) {
	var matrix = Array(n);
	for (var i = 0; i < n; i++) {
		matrix[i] = Array(n).fill(0);
		matrix[i][i] = 1;
	}
	return matrix;
}

console.log('10. ' + identityMatrix(3));

/*
11. Write a JavaScript function which will take an array of numbers stored and find the second
lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4 
*/
function secondValue(numArr) {
	if (numArr.length == 0) return [0, 0];
	else if (numArr.length == 1) return [numArr[0], numArr[0]];

	numArr.sort(function (a, b) {
		return a - b;
	});

	if (numArr.length == 2) return numArr;
	return [numArr[1], numArr[numArr.length - 2]];
}

console.log('11. ' + secondValue([1, 2, 3, 4, 5]));

/*
12. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
half the sum of all of its positive divisors (including itself).
Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
+ 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
perfect numbers 496 and 8128.
*/
function isPerfect(num) {
	if (num < 6) return false;

	var sum = 0;
	for (let i = 1; i <= num / 2; i++) {
		if (num % i === 0) {
			sum += i;
		}
	}
	return num === sum ? true : false;
}

console.log('12. ' + isPerfect(8128));

/*
13. Write a JavaScript function to compute the factors of a positive integer. 
*/
function computeFactors(num) {
	var result = [];
	for (let i = 0, j = num; i < j; i++) {
		if (num % i === 0) {
			result.push(i, num / i);
			j = num / i;
		}
	}
	return result.sort((a, b) => {
		return a - b;
	});
}

console.log('13. ' + computeFactors(77));

/*
14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1
*/
function amountTocoins(amount, coins) {
	if (amount === 0) return [];
	var result = [];
	var change = coins.shift();
	while (amount > 0) {
		if (amount < change) change = coins.shift();
		else {
			result.push(change);
			amount -= change;
		}
	}
	return result;
}

console.log('14. ' + amountTocoins(46, [25, 10, 5, 2, 1]));

/*
15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
bases. Accept b and n from the user and display the result. 
*/
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('15.   Please enter base: ', function (b) {
	rl.question('      Please enter exponent ', function (n) {
		console.log(`      ${b}^${n} = ${b ** n}`);
		rl.close();
	});
});

/*
16. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg"
*/
function extractUniqueCharacters(str) {
	return String.prototype.concat(...new Set(str));
}

console.log(
	'16. ' + extractUniqueCharacters('thequickbrownfoxjumpsoverthelazydog')
);

/*
17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
*/
function countOccurrence(str) {
	var result = {};
	for (let i = 0; i < str.length; i++) {
		const curr = str.charAt(i);
		result[curr] = result[curr] + 1 || 1;
	}

	return JSON.stringify(result);
}
console.log('17. ' + countOccurrence('helloworld'));

/*
18. Write a function for searching JavaScript arrays with a binary search. 
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
the desired value.
*/
function binarySearch(arr, val) {
	let low = 0,
		high = arr.length - 1;
	while (low <= high) {
		let mid = Math.floor((high + low) / 2);
		if (arr[mid] > val) {
			high = mid - 1;
		} else if (arr[mid] < val) {
			low = mid + 1;
		} else return mid;
	}

	return -1;
}

console.log('18. ' + binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));

/*
19. Write a JavaScript function that returns array elements larger than a number. 
*/
function largerThanANumber(arr, num) {
	return arr.filter((curr) => curr > num);
}

console.log('19. ' + largerThanANumber([10, 2, 6, 77, 9], 7));

/*
20. Write a JavaScript function that generates a string id (specified length) of random characters.
Sample   character   list:
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/
function generateID(length) {
	var result = '';
	var characterList =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < length; i++) {
		result += characterList.charAt(
			Math.floor(Math.random() * characterList.length)
		);
	}

	return result;
}

console.log('20. ' + generateID(7));

/*
21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
combinations in an array. 
Sample array: [1, 2, 3] and subset length is 2 
Expected output: [[2, 1], [3, 1], [3, 2]]
*/
function possibleSubset(arr, length) {
	var result_set = [],
		result;
	for (var x = 0; x < Math.pow(2, arr.length); x++) {
		result = [];
		i = arr.length - 1;
		do {
			if ((x & (1 << i)) !== 0) {
				result.push(arr[i]);
			}
		} while (i--);

		if (result.length == length) {
			result_set.push(result);
		}
	}
	return JSON.stringify(result_set);
}

console.log('21. ' + possibleSubset([1, 2, 3], 2));

/*
22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
will count the number of occurrences of the specified letter within the string. 
Sample arguments: 'microsoft.com', 'o'
Expected output: 3 
*/
function countLetterOccurrence(str, letter) {
	var result = 0;
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === letter) result++;
	}

	return result;
}

console.log('22. ' + countLetterOccurrence('microsoft.com', 'o'));

/*
23. Write a JavaScript function to find the first not repeated character. 
Sample arguments: 'abacddbec' 
Expected output: 'e' 
*/
function firstNotRepeatedCharacter(str) {
	var result;
	str.split('').some((char, index, arr) => {
		if (arr.indexOf(char) === arr.lastIndexOf(char)) {
			result = char;
			return true;
		}
		return false;
	});

	return result;
}

console.log('23. ' + firstNotRepeatedCharacter('abacddbec'));

/*
24. Write a JavaScript function to apply Bubble Sort algorithm. 
Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
each pair of adjacent items and swapping them if they are in the wrong order". 
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/
function bubbleSort(arr) {
	var check;
	do {
		check = false;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				check = true;
			}
		}
	} while (check);

	return arr;
}

console.log(
	'24. ' +
		bubbleSort([
			12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213,
		])
);

/*
25. Write a JavaScript function that accept a list of country names as input and returns the
longest country name as output. 
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"
*/
function Longest_Country_Name(listOfCountries) {
	return listOfCountries.reduce((prev, curr) => {
		return prev.length < curr.length ? curr : prev;
	});
}

console.log(
	'25. ' +
		Longest_Country_Name(['Australia', 'Germany', 'United States of America'])
);

/*
26. Write a JavaScript function to find longest substring in a given a string without repeating
characters. 
*/
function lengthOfLongestSubstring(str) {
	var currString = '';

	for (let i = 0; i < str.length; i++) {
		let char = str.charAt(i);
		let pos = currString.indexOf(char);
		if (pos !== -1) {
			currString = currString.substr(pos + 1);
		}
		currString += char;
	}
	return currString;
}

console.log('26. ' + lengthOfLongestSubstring('google.com'));

/*
27. Write a JavaScript function that returns the longest palindrome in a given string. 
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
given string that is also a palindrome. For example, the longest palindromic substring of
"bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
example, in the string "abracadabra", there is no palindromic substring with length greater than
three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all
substrings that are themselves palindromes and cannot be extended to larger palindromic
substrings) rather than returning only one substring or returning the maximum length of a
palindromic substring.
*/
function longestPalindrome(str) {
	if (str.length < 2) return null;
	var result = '';

	function checkPalindrome(subStr) {
		return subStr === subStr.split('').reverse().join('');
	}

	for (let i = 0; i <= str.toLowerCase().length; i++) {
		for (let j = i; j <= str.toLowerCase().length; j++) {
			var subStr = str.toLowerCase().slice(i, j);
			if (!checkPalindrome(subStr)) continue;
			if (subStr.length > result.length) result = subStr;
		}
	}
	return result || null;
}

console.log('27. ' + longestPalindrome('apple banana'));

/*
28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
*/
function parameter() {
	return 'Hello from parameter!';
}
function foo(parameter) {
	return parameter();
}
console.log('28. ' + foo(parameter));

/*
29. Write a JavaScript function to get the function name.
*/
function getFunctionName() {
	return getFunctionName.name;
}

console.log('29. ' + getFunctionName());
