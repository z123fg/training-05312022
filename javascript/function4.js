/*function 4*/
function alphabeticalOrder(x)
{
    var y = "";
    var aValue = 97;
    while (aValue < 123)
    {
        for (var i = 0; i < x.toString().length; i++)
        {
            var c = x.slice(i, i+1);
            if (c.charCodeAt() === aValue)
            {
                //console.log(c);
                y+=c;
            } 
        }
        aValue++;
    }
    console.log(y);
}

console.log("function 4: ");
var x = "webmaster";
var y = "exicutable";
alphabeticalOrder(x);
alphabeticalOrder(y);