/**function 20 */
function stridGen(x)
{
    //console.log("int method")
    var idLength = x;
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //console.log(idLength);
    var id = "";
    /*for(var i = 0; i < idLength; i++)
    {    
        //var type = Math.floor(Math.random * 3);
        var type = 0;
        //console.log("char 0");
        switch (type)
        {
            case 0:
                //console.log("char 0");
                var num = Math.floor(Math.random * 26);
                var char = String.fromCharCode(65 + num)
                console.log(char);
                //id += String.fromCharCode(Math.floor(65 + Math.Random() * 26));
                break;
            case 1:
                break;
            case 2:
                break;
        }

        /*if (type === 0)
        {
            console.log("char 0");
        }
    }*/

    for(var i = 0; i < idLength; i++)
    {
        var p = Math.floor(Math.random() * chars.length)
        //console.log(p);
        //console.log(chars.slice(p,p+1))
        id += chars.slice(p, p+1);
    }

    console.log(id);
}

console.log("function 20: ");
var x = 10;
var y = 15;
var z = 25;
stridGen(x);
stridGen(y);
stridGen(z);