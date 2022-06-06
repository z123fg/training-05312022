/**function 23 */
function notRepeated(x)
{
    var str = x;
    var strArr = [];
    var arrangedStr = "";
    var charsNotRepeated = []; 
    var firstCharNR = "";

    for (var i = 0; i < str.length; i++)
    {
        strArr.push(str.slice(i,i+1));
    }

    for(var i = 0; i < strArr.length; i++)
    {
        for (var j = 0; j < (strArr.length -i -1); j++)
        {
            
            if (strArr[j] > strArr[j+1])
            {
                var temp = strArr[j];
                strArr[j] = strArr[j+1];
                strArr[j+1] = temp;
            }
        }
    }

    for(var i = 0; i < strArr.length; i++)
    {
        arrangedStr += strArr[i];
    }
    console.log(arrangedStr);

    for(var i = 1; i < strArr.length; i++){
        if (strArr[i] != strArr[i-1] &&
            strArr[i] != strArr[i+1])
            {
                charsNotRepeated.push(strArr[i]);
            }
    }

    var p = 0;
    while(firstCharNR.length === 0)
    {
        for(var i = 0; i <= charsNotRepeated.length; i++)
        {
            if (charsNotRepeated[i] == str.slice(p, p+1))
            {
                firstCharNR = charsNotRepeated[i];
            }
        }
        p++;
    }
    console.log(`The first not repeated letter out of the ${charsNotRepeated.length} in this string is ${firstCharNR}.`);
}

console.log("function 23: ");
var x = "abacddbec";
var y = "annananieejlllwpwpwwoqqwedgfff";
notRepeated(x);
notRepeated(y);