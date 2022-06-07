// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5
const vowelCounter = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];
    let count = 0;
    for(let char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    return count;
};

console.log(vowelCounter('the quIck brown fox')); 
