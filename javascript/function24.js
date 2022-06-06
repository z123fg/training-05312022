/**function 24 */
function bubbleSort(x)
{
    var arry = x;
    for(var i = 0; i < arry.length; i++)
    {
        for (var j = 0; j < (arry.length -i -1); j++)
        {
            if (arry[j] <= arry[j+1])
            {
                var temp = arry[j];
                arry[j] = arry[j+1];
                arry[j+1] = temp;
            }
        }
    }

    console.log(arry);
}

console.log("function 24: ");
var x = [1,2,3,4,5];
var y = [8, 18, 35, 2, 458, 29, 383, 593, 28, 99];
var z = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
bubbleSort(x);
bubbleSort(y);
bubbleSort(z);