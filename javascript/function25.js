/**function 25 */
function longestName(x)
{
    var arry = x;
    var longestWord = "";

    //console.log(arry);

    for (var i = 0; i < arry.length; i++)
    {
        //console.log(arry[i]);
        if (arry[i].toString().length > longestWord.toString().length)
        {
            longestWord = arry[i];
        }
    }
    console.log(`The longest word in this array is ${longestWord}.`);
}

console.log("function 25: ");
var x = ["Australia", "Germany", "United States of America"];
var y = ["United Kingdom", "Ukraine", "Russia", "South Africa", "Cruesia"]
longestName(x);
longestName(y);