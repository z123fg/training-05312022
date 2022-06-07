/**function 26 */
function longestSubstring(x)
{
    var str = x;
    var substr = "";
    var longestSubstr = "";
    var charsUsed = [];
    var reusedChar = false;

    for (var i = 0; i < str.toString().length; i++)
    {
        var char = str.slice(i, i+1);

        if (charsUsed.length === 0)
        {
            substr += char;
            charsUsed.push(char);
        }
        else
        {
            for (var j = 0; j < charsUsed.length; j++)
            {
                if (charsUsed[j] === char){
                    reusedChar = true;
                }
            }

            //console.log(charsUsed);
            if (reusedChar === false)
            {
                substr += char;
                charsUsed.push(char);
            }
            else
            {
                //console.log(substr.length);
                if (longestSubstr.toString().length < substr.toString().length)
                {
                    longestSubstr = substr;
                }
                substr = char;
                reusedChar = false;
                charsUsed = [];
                charsUsed.push(char);
                //console.log(charsUsed);
            }
        }
    }

    console.log(longestSubstr);
}

console.log("function 26: ");
var x = "thequickbrownfoxjumpsoverthelazydog";
var y = "supercalifragilisticexpialidocious";
longestSubstring(x);
longestSubstring(y);