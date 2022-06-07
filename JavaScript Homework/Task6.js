// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function longword(word){
    var regex=word.match(/\w[a-z]{0,}/gi)
    var result = regex[0];
    for(i=1;i<regex.length;i++)

    {
        if(result.length<regex[i].length){
            result=regex[i]
        }
    }
return result;

}
console.log(longword("Web Development Tutorial"));