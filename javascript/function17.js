/**function 17 */
function instOfAllChars(x)
{
    var str = x;
    var strArr = [];

    console.log(`The string being used is '${str}'.`);

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

    var counter = 0;
    for(var i = 0; i < strArr.length; i++)
    {
        counter++;

        if(strArr[i] != strArr[i+1])
        {
            console.log(`There are ${counter} instances of '${strArr[i]}'`);
            counter = 0;
        }
    }
}

console.log("function 17");
instOfAllChars("thequickbrownfoxjumpsoverthelazydog", 'u');
instOfAllChars("supercalifragilisticexpialidocious", "a");