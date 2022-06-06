/**Funtion 15 */
function exponent(x, y)
{
    var b = x;
    var n = y;
    var r = 1;

    for(var i = 0; i < n; i++)
    {
        r *= b;
    }

    console.log(`Base ${b} with exponent ${n} is ${r}`);
}

console.log("Function 15: ");
exponent(2, 2);
exponent(3, 2);
exponent(2, 3);
exponent(16, 4);
exponent(4, 16);
exponent(5, 3);