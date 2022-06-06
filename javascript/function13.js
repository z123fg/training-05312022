/**function 13 */
function posFactors(x){
    var factors = [];
    var posInt = x;

    for(var i = 1; i<= posInt; i++)
    {
        if (posInt % i === 0)
        {
            factors.push(i);
        }
    }
    console.log(factors);
}

console.log("function 13: ");
var x = 15;
var y = 36;
var z = 79;
posFactors(x);
posFactors(y);
posFactors(z);