const {
    reverse,
    isPalindrome,
    generateCombination,
    orderString,
    firstLetterUpper,
    findLongestWord,
    countVowels,
    isPrime,
    isType,
    createMatrix,
    findSecondMinMax,
    isPrefect,
    findFactors,
    amountTocoins,
    computeExponent,
    uniqueCharacters,
    getOccurrence,
    binarySearch,
    findAllLarger,
    genarateId,
    countLetter,
    firstNotRepeated,
    BubbleSort,
    longestCountryName,
    longestSubString,
    isEven,
    getName,
    longestPalindrome,
    getFixedLengthSubset
} = require("./index");

test('Question 1 reverse number', () => {
    expect(reverse(32243)).toBe(34223);
});

test('Question 2 is Palindrome', () => {
    expect(isPalindrome("madam")).toBe(true);
    expect(isPalindrome("nurses run")).toBe(true);
    expect(isPalindrome("nurses")).toBe(false);
});

test('Question 3 Generater combinations', () => {
    expect(generateCombination("dog")).toStrictEqual(['d', 'do', 'dog', 'o', 'og', 'g']);
});

test('Question 4 sort a string', () => {
    expect(orderString("webmaster")).toBe('abeemrstw');
});

test('Question 5 convert first letter of each word to be uppercase', () => {
    expect(firstLetterUpper('the quick brown fox')).toBe('The Quick Brown Fox');
});

test('Question 6 find the longest words', () => {
    expect(findLongestWord('Web Development Tutorial')).toBe('Development');
});

test('Question 7 count vowels', () => {
    expect(countVowels('The quick brown fox')).toBe(5);
});

test('Question 8 is Prime', () => {
    expect(isPrime(5)).toBe(true);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(6)).toBe(false);
});

test('Question 9 return type of', () => {
    expect(isType('a')).toBe('string');
    expect(isType(1)).toBe('number');
    expect(isType(undefined)).toBe('undefined');
    expect(isType(false)).toBe('boolean');
    expect(isType([])).toBe('object');
    expect(isType((a) => a * 2)).toBe('function');
});

test('Question 10 create n*n identity matrix', () => {
    expect(createMatrix(3)).toStrictEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
})

test('Question 11 find Second minimum and maximum', () => {
    expect(findSecondMinMax([1, 2, 3, 4, 5])).toStrictEqual([2, 4]);
    expect(findSecondMinMax([1])).toStrictEqual([]);
}) 

test('Question 12 check if a number is perfect', () => {
    expect(isPrefect(-1)).toBe(false);
    expect(isPrefect(3)).toBe(false);
    expect(isPrefect(10)).toBe(false);
    expect(isPrefect(6)).toBe(true);
    expect(isPrefect(28)).toBe(true);
    expect(isPrefect(496)).toBe(true);
    expect(isPrefect(8128)).toBe(true);
}) 

test('Question 13 find all factors', () => {
    expect(findFactors(24)).toStrictEqual([1, 24, 2, 12, 3, 8, 4, 6]);
})

test('Question 14 convert an amount to coins', () => {
    expect(amountTocoins(46, [25, 10, 5, 1])).toStrictEqual([25, 10, 10, 1]);
})

test('Question 15 convert an exponent based on base', () => {
    expect(computeExponent(3, 3)).toBe(27);
})

test('Question 16 find all unique characters', () => {
    expect(uniqueCharacters('thequickbrownfoxjumpsoverthelazydog')).toBe('thequickbrownfxjmpsvlazydg');
})

test("Question 17 Get all characters' occurrance", () => {
    expect(getOccurrence('aabcddcc')).toStrictEqual({'a':2, 'b':1, 'c':3, 'd': 2});
})

test("Question 18 Bineary Search", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toBe(3);
    expect(binarySearch([1, 2, 3, 4, 5], 0)).toBe(-1);
})

test("Question 19 Return all elements are larger than a number", () => {
    expect(findAllLarger([1, 4, 2, 5, 3], 2)).toStrictEqual([4, 5, 3]);
    expect(findAllLarger([1, 2, 3, 4, 5], 4)).toStrictEqual([5]);
})

test("Question 20 generate random string id", () => {
    expect(genarateId(20).length).toBe(20);
    expect(genarateId(14).length).toBe(14);
})

test("Question 21 get all possible subset with a fixed length ", () => {
    expect(getFixedLengthSubset([1, 2, 3], 2)).toStrictEqual([[2, 1], [3, 1], [3, 2]]);
})

test("Question 22 count occurrence of letters", () => {
    expect(countLetter('microsoft.com', 'o')).toBe(3);
})

test("Question 23 find first not repeated characters", () => {
    expect(firstNotRepeated('abacddbec')).toBe('e');
    expect(firstNotRepeated('abacddbece')).toBe('');
})

test("Question 24 bubble sort", () => {
    expect(BubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])).toStrictEqual([3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]);
})

test("Question 25 Find the longest country name", () => {
    expect(longestCountryName((["Australia", "Germany", "United States of America"]))).toBe("United States of America");
})

test("Question 26 Find the longest substring without the repeated characters", () => {
    expect(longestSubString(('abassavf'))).toBe("savf");
    expect(longestSubString(('abba'))).toBe("ab");
})

test("Question 27 Find the longest palindrome of a str", () => {
    expect(longestPalindrome(('bananas'))).toStrictEqual(['anana']);
    expect(longestPalindrome(('abracadabra'))).toStrictEqual(['aca', 'ada']);
    expect(longestPalindrome(('abbac'))).toStrictEqual(['abba']);
})

test("Question 28 pass function as argument", () => {
    expect(isEven(1, (a) => a % 2 === 0)).toBe(false);
    expect(isEven(2, (a) => a % 2 === 0)).toBe(true);
})

test("Question 29 get function name", () => {
    expect(getName(function a() {return true})).toBe('a');
    expect(getName(function test() {return true})).toBe('test');
})