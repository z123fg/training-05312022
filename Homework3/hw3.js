// First one
function reverse_a_number(r)
{
	r = r + "";
	return r.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));

// second one
function isPalindrome(str){
    var rStr = str.split("").reverse().join("");
    if(str == rStr){
        console.log(str, "correct");
    }
    else{
        console.log(str, "error");
    }
    console.log(rStr);
}

isPalindrome("nursesrun");

//Third one
function generatestringCombs(str){
    var initial = [];
    var end = [];
    for (i=0;i<str.length;i++){
        initial = [str[i]];
        var start=0;
        while(end[start]){
            initial.push(''+end[start]+str[i]);
            start++;
        }
        end = end.concat(initial);
    }
    console.log(end)
    
    }
    
generatestringCombs('dog');

//Fourth one
function alphabet(str){
let alphabetStr = str.split('').sort().join('')
console.log(alphabetStr)
}

alphabet('webmaster')


//#5
function letterCase(str){
str = str.split(" ");
for(var i=0; i<str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
}
str = str.join(" ")
console.log(str)
}

letterCase("the quick brown fox");

