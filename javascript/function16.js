/**Function 16 */
function uniChars(x)
{
    var str = x;
    var uniStr = "";
    var hasChar = false;

    for (var i = 0; i < str.toString().length; i++)
    {
        //console.log(i);
        var tempChar = str.slice(i, i+1)
        if (i === 0)
        {
            uniStr += tempChar;
            //console.log(uniStr.toString().length);
        }
        else{
            if (uniStr.toString().length === 1)
            {
                if (uniStr !== tempChar)
                {
                    uniStr += tempChar;
                    //console.log(uniStr.toString().length);
                }
            }
            else{
                for (var j = 0; j < uniStr.toString().length; j++)
                {
                    //console.log(j);
                    if (tempChar === uniStr.slice(j, j+1)){
                        hasChar = true;
                    }
                }

                if (hasChar !== true)
                {
                    uniStr += tempChar;
                }
                else
                {
                    hasChar = false;
                }
            }
        }
    }

    console.log(uniStr);
}

console.log("function 16");
var x = "thequickbrownfoxjumpsoverthelazydog"
var y = "supercalifragilisticexpialidocious";
uniChars(x);
uniChars(y);