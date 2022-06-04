/*function 3*/
function allCombos(x)
{
    var y = "";
    for (var i = 0; i < x.toString().length+1; i++)
    {
        y = x.slice(i,i+1);
        console.log(y);
        for (var j = i+1; j < x.toString().length; j++)
        {
            y += x.slice(j,j+1);
            console.log(y);
        }
    }
}

console.log("function 3: ");
var x = "dog";
var y = "Alexander";
allCombos(x);
allCombos(y);