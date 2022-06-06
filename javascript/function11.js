/**fucntion 11: */
function secTopAndBottom(x)
{
    var arry = x; 
    for(var i = 0; i < arry.length; i++)
    {
        for (var j = 0; j < (arry.length -i -1); j++)
        {
            if (arry[j] > arry[j+1])
            {
                var temp = arry[j];
                arry[j] = arry[j+1];
                arry[j+1] = temp;
            }
        }
    }

    var secLow = arry[1];
    var secHigh = arry[arry.length-2];

    console.log(`Array: ${arry}`);
    console.log(`The second lowest value is ${secLow}.`);
    console.log(`The second highest value is ${secHigh}.`);
}

console.log("function 11: ");
var x = [1,2,3,4,5];
var y = [8, 18, 35, 2, 458, 29, 383, 593, 28, 99];
secTopAndBottom(x);
secTopAndBottom(y);