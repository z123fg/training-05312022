/**function 19 */
function biggerThanNum(x, y){
    var list = x;
    var tarNum = y;
    var arrBiggerThanNum = [];

    for (var i = 0; i < list.length; i++)
    {
        if (list[i] > tarNum)
        {
            arrBiggerThanNum.push(list[i]);
        }
    }

    console.log(`The values that are bigger than ${tarNum} in this arry are ${arrBiggerThanNum}.`);
}

console.log("function 19: ");
var x = [1,2,3,4,5];
var y = [8, 18, 35, 2, 458, 29, 383, 593, 28, 99];
biggerThanNum(x, 3);
biggerThanNum(y, 99);