/**function 27 */
function longestPalidrome(x)
{
    var str = x;
    var palSubstr = "";
    var lonPalSubstr = "";
    var palChars = [];

    for (var i = 0; i < str.toString().length; i++)
    {
        var char = str.slice(i, i+1);

        if(palChars.length === 0 || 
            palChars.length === 1)
        {
            palChars.push(char);
            //console.log(palChars);
        }
        else
        {
            if (char === palChars[0])
            {
                if (palSubstr.length === 0)
                {
                    palSubstr += palChars[0].toString();
                    palSubstr += palChars[1].toString();
                    palSubstr += char;
                }
                else
                {
                    palSubstr += char;
                }
            }
            else
            {
                if (lonPalSubstr.length < palSubstr.length)
                {
                    lonPalSubstr = palSubstr
                }
                palSubstr = "";
            }
            palChars[0] = palChars[1];
            palChars[1] = char;
            //console.log(palChars);
        }
        
    }

    if (lonPalSubstr.length < palSubstr.length)
    {
        lonPalSubstr = palSubstr
    }

    console.log(lonPalSubstr);
}

console.log("function 27: ");
var x = "babananana";
var y = "abracadabra";
longestPalidrome(x);
longestPalidrome(y);