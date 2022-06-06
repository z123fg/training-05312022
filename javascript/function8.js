/*function 8 */
function primeNumber(x){
    var isPrime = false;

    if (x % 2 != 0 &&
        x % 3 != 0 &&
        x % 4 != 0)
        {
            isPrime = true;
        }
    
    if (isPrime === true)
    {
        console.log(`${x} is a prime number`);
    }
    else
    {
        console.log(`${x} is NOT a prime number`);
    }
}

console.log("function 8: ");
var x = 7;
var y = 14;
var z = 97;
primeNumber(x);
primeNumber(y);
primeNumber(z);