/*function 7*/
function numOfVowels(x){
    var y = 0;
    for (var i = 0; i < x.toString().length; i++)
    {
        var c = x.slice(i, i+1);
        if(c == 'A' || c == 'a' ||
        c == 'E' || c == 'e' ||
        c == 'I' || c == 'i' ||
        c == 'O' || c == 'o' ||
        c == 'U' || c == 'u'){
            y++;
        }
    }
    console.log(y);
}

console.log("function 7: ");
var x = "The quick brown fox";
var y = "I've come to make an announcement";
numOfVowels(x);
numOfVowels(y);