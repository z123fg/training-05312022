/*function 5*/ 
function capitolizeWords(x)
{
    var y = "";
    var capitolizeLetter = true;
    
    for (var i = 0; i < x.toString().length; i++)
    {
        var c = x.slice(i, i+1);
        if (capitolizeLetter == true)
        {
            y += c.toUpperCase();
            capitolizeLetter = false;
        }
        else if (c == " ")
        {
            y+= c;
            capitolizeLetter = true;
        }
        else{
            y+= c;
        }
    }
    console.log(y);
}

console.log("function 5: ");
var x = "the quick brown fox";
var y = "tell me, for whom do you fight?"
capitolizeWords(x);
capitolizeWords(y);