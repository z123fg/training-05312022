/**function 20 */
function stridGen(x)
{
    //console.log("int method")
    var idLength = x;
    //console.log(idLength);
    var id = "";
    for(var i = 0; i < idLength; i++)
    {    
        var type = Math.floor(Math.random() * 3);
        //console.log(type);
        //var type = 0;
        //console.log("char 0");
        switch (type)
        {
            case 0:
                //console.log("char 0");
                var num = Math.floor(Math.random() * 26);
                var char = String.fromCharCode(65 + num)
                //console.log(char);
                id += char;
                break;
            case 1:
                var num = Math.floor(Math.random() * 26);
                var char = String.fromCharCode(97 + num)
                //console.log(char);
                id += char;
                break;
            case 2:
                var num = Math.floor(Math.random() * 10)
                id += num;
                break;
        }
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