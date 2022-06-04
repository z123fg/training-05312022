/*function 1*/
function reverseNum(x){
    var xList = new Array();
    var y = "";
    var j = x.toString().length; 
    //console.log(y);
    for (let i = 0; i < x.toString().length+1; i++)
    {
        //console.log(x.slice(i,i+1));
        xList.push(x.slice(i,i+1));
    }

    while (j >= 0)
    {
        y += xList[j];
        //console.log(y);
        j--;
    }
    console.log(y);
}

console.log("function 1: ");
var x = "32454";
var y = "6732849";
reverseNum(x);
reverseNum(y);