

// Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.
function palindrome(word){
var str = word.toLowerCase().replace(/[^a-z0-9]+/gi,'');
var count =0;

if((str.length)%2===0){
    count = str.length/2;
}   
    else{
       count = (str.length-1)/2;
    }

for (var i = 0; i<count;i++)
{
    if(str[i]!=str.slice(-1-i)[0]){
        console.log("The entered word is not palindrome")
        return false;
    }
}
console.log("The entered word is palindrome");
return true;
}
palindrome('Kayak');
palindrome('Javascript');
palindrome('Noon');




// Further Enhancement



//  if(str.length===1)
    // {
    //     console.log("Found a single character. It is Palindrome");
    //     return true;
    // }

    // if (str===""){
        //     console.log("Could not a find a word!");
        //     return false;
        // }