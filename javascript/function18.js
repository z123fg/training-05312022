/**function 18 */
function binarySearch(x, y)
{
    var arry = x; 
    var target = y;
    var tarStart = Math.floor(arry.length/2);
    var arrayMid = Math.floor(arry.length/2);
    var arrayLength = arry.length;
    var comparisons = 0;

    for(var i = 0; i < arrayLength; i++)
    {
        for (var j = 0; j < (arrayLength -i -1); j++)
        {
            if (arry[j] > arry[j+1])
            {
                var temp = arry[j];
                arry[j] = arry[j+1];
                arry[j+1] = temp;
            }
        }
    }

    //console.log(arry);
    comparisons++;
    var tempTar = arry[tarStart];
    var tempArr = [];
    var newArr = [];
    //console.log(tarStart);

    while (tempTar !== target)
    {
        if (comparisons === 1)
        {
            if (target < tempTar)
            {
                for (var i = 0; i < arrayMid; i++)
                {
                    tempArr.push(arry[i]);
                } 
            }
            else
            {
                for (var i = arrayMid; i < arrayLength; i++)
                {
                    tempArr.push(arry[i]);
                }
            }
        }
        else{
            if (target < tempTar)
            {
                for (var i = 0; i < arrayMid; i++)
                {
                    tempArr.push(newArr[i]);
                } 
            }
            else
            {
                for (var i = arrayMid; i < arrayLength; i++)
                {
                    tempArr.push(newArr[i]);
                }
            }
        }

        newArr = tempArr;
        arrayLength = newArr.length;
        tarStart = Math.floor(arrayLength/2);
        arrayMid = Math.floor(arrayLength/2);
        //console.log(newArr);
        tempArr = [];

        if (arrayLength <= 2)
        {
            for(var i = 0; i < arrayLength; i++)
            {
                if (newArr[i] === target){
                    tempTar = newArr[i];
                }
            }
        }
        else
        {
            tempTar = newArr[arrayMid];
            //console.log(tempTar);
        }
        comparisons++;
        //console.log(newArr);
    }
    console.log(`It took ${comparisons} comparisons to find ${target} in this array.`);
}

console.log("function 18: ")
var x = [1,2,3,4,5];
var y = [8, 18, 35, 2, 458, 29, 383, 593, 28, 99];
binarySearch(x, 2);
binarySearch(y, 458);