// Function 1

function reverseNum(num) {
	return num.toString().split('').reverse().join('');
}

// Function 2

function checkPalindrome(str) {
	let regex = /[^A-Za-z0-9]/g;
	let modifiedStr = str.toLowerCase().replace(regex, '');
	let reverseStr = modifiedStr.split('').reverse().join('');
	return reverseStr === modifiedStr;
}

// Function 3

function generateCombo(str) {
	let result = [];
	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length + 1; j++) {
			result.push(str.slice(i, j));
		}
	}
	return result;
}

// Function 4

function alphabet(str) {
	return str.split('').sort().join('');
}

// Function 5

function capitalizeFirst(str) {
	return str
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.substring(1))
		.join(' ');
}

// Function 6

function longestWord(str) {
	let arr = str.split(' ').reduce((longestWord, currWord) => {
		return longestWord.length < currWord.length ? currWord : longestWord;
	}, ' ');

	return arr;
}

// Function 7

function countVowels(str) {
	return str
		.toLowerCase()
		.split('')
		.filter((letter) => 'aeiou'.includes(letter)).length;
}

// Function 8

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

// Function 9

function typeOf(arg) {
	return typeof arg;
}

// Function 10

function matrix(n) {
	let matrix = Array(n);
	for (let i = 0; i < n; i++) {
		matrix[i] = Array(n).fill(0);
		matrix[i][i] = 1;
	}
	return matrix;
}

// Function 11

function secondValues(numArr) {
	if (numArr.length == 0) return [0, 0];
	else if (numArr.length == 1) return [numArr[0], numArr[0]];

	numArr.sort(function (a, b) {
		return a - b;
	});

	if (numArr.length == 2) return numArr;
	return [numArr[1], numArr[numArr.length - 2]];
}

// Function 12

function isPerfect(num) {
	if (num < 6) return false;

	let sum = 0;
	for (let i = 1; i <= num / 2; i++) {
		if (num % i === 0) {
			sum += i;
		}
	}
	return num === sum ? true : false;
}

// Function 13

function computeFactors(num) {
	let result = [];
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

// Function 14

function amountTocoins(amount, coins) {
	if (amount === 0) return [];
	let result = [];
	let change = coins.shift();
	while (amount > 0) {
		if (amount < change) change = coins.shift();
		else {
			result.push(change);
			amount -= change;
		}
	}
	return result;
}

// Function 15

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// Function 16

function extractUniqueCharacters(str) {
	return String.prototype.concat(...new Set(str));
}

// Function 17

function countOccurrence(str) {
	let result = {};
	for (let i = 0; i < str.length; i++) {
		const curr = str.charAt(i);
		result[curr] = result[curr] + 1 || 1;
	}

	return JSON.stringify(result);
}

// Function 18

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

// Function 19

function largerThanANumber(arr, num) {
	return arr.filter((curr) => curr > num);
}

// Function 20

function generateID(length) {
	let result = '';
	let characterList =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < length; i++) {
		result += characterList.charAt(
			Math.floor(Math.random() * characterList.length)
		);
	}

	return result;
}

// Function 21

function possibleSubset(arr, length) {
	let result_set = [],
		result;
	for (let x = 0; x < Math.pow(2, arr.length); x++) {
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

// Function 22

function countLetterOccurrence(str, letter) {
	let result = 0;
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === letter) result++;
	}

	return result;
}

// Function 23

function firstNotRepeatedCharacter(str) {
	let result;
	str.split('').some((char, index, arr) => {
		if (arr.indexOf(char) === arr.lastIndexOf(char)) {
			result = char;
			return true;
		}
		return false;
	});

	return result;
}

// Function 24

function bubbleSort(arr) {
	let check;
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

// Function 25

function Longest_Country_Name(listOfCountries) {
	return listOfCountries.reduce((prev, curr) => {
		return prev.length < curr.length ? curr : prev;
	});
}

// Function 26

function lengthOfLongestSubstring(str) {
	let currString = '';

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

// Function 27

function longestPalindrome(str) {
	if (str.length < 2) return null;
	let result = '';

	function checkPalindrome(subStr) {
		return subStr === subStr.split('').reverse().join('');
	}

	for (let i = 0; i <= str.toLowerCase().length; i++) {
		for (let j = i; j <= str.toLowerCase().length; j++) {
			let subStr = str.toLowerCase().slice(i, j);
			if (!checkPalindrome(subStr)) continue;
			if (subStr.length > result.length) result = subStr;
		}
	}
	return result || null;
}

// Function 28

function parameter() {
	return 'Hello from parameter!';
}
function foo(parameter) {
	return parameter();
}

// Function 29

function getFunctionName() {
	return getFunctionName.name;
}