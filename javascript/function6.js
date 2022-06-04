/*function 6*/
function longestWord(x)
{
    var y= "";
    var temp = "";
    xWordLength = 0;
    xTempLength = 0;
    //console.log(x.length.toString())
    for (var i = 0; i<x.toString().length; i++)
    {
        var c = x.slice(i, i+1);
        //console.log(i);
        if (c != " ")
        {
            temp += c;
            xTempLength++;
        }
        else
        {
            if (xTempLength > xWordLength)
            {
                y = temp;
                xWordLength = xTempLength;
                //console.log(y);
            }
            xTempLength = 0;
            temp = "";
        }
    }
    if (xTempLength > xWordLength)
    {
        y = temp;
        xWordLength = xTempLength;
    }
    console.log(y);
}

console.log("function 6: ")
var x = "Web Development Tutorial"
var y = "According to all known laws of aviation"
longestWord(x);
longestWord(y);