/**function 12 */
function perfectNumber(x){
    var isPerfect = false;
    var check = 0;
    var num = x;

    for (var i = 1; i<=num/2; i++)
    {
        if (num%i === 0)
        {
            check += i;
            //console.log(check);
        }
    }

    if (check === num && check !== 0)
    {
        isPerfect = true;
    }

    if (isPerfect == true)
    {
        console.log(`${num} is a perfect number`);
    }
    else{
        console.log(`${num} is NOT a perfect number`);
    }
}

console.log("function 12: ")
var x = 28;
var y = 512;
var z = 8128
perfectNumber(x);
perfectNumber(y);
perfectNumber(z);