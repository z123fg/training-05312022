/**function 21 */
function fixedArrLen(x,y)
{
    var arr = x;
    var subsetNum = y;
    var subsetStr = "";
    var subsets = [];

    for (var i = 0; i < arr.length-subsetNum+1; i++)
    {
        for (var j = i+subsetNum-1; j < arr.length; j++)
        {
            for (var k = j; k > j-subsetNum+1; k--)
            {
                //console.log(arr[k]);
                subsetStr += arr[k].toString();
                subsetStr += ", ";
            }
            subsetStr += arr[i].toString();
            subsets.push(subsetStr);
            subsetStr = "";
        }
    }

    console.log(subsets)
}

console.log("function 21: ");
var x = [1, 2, 3];
var y = [5, 6, 7, 8, 9];
var z = [59, 61, 67, 71, 73, 79, 83, 89, 97]
fixedArrLen(x, 2);
fixedArrLen(y, 3);
fixedArrLen(z, 5);