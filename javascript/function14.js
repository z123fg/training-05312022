/**function 14 */
function spitCoins(x){
    var amountLeft = x;
    var coins = new Array();

    while (amountLeft != 0)
    {
        if (amountLeft >= 100){
            coins.push(100);
            amountLeft -= 100;
        }
        else if (amountLeft >= 50){
            coins.push(50);
            amountLeft -= 50;
        }
        else if (amountLeft >= 25){
            coins.push(25);
            amountLeft -= 25;
        }
        else if (amountLeft >= 10){
            coins.push(10);
            amountLeft -= 10;
        }
        else if (amountLeft >= 5){
            coins.push(5);
            amountLeft -= 5;
        }
        else if (amountLeft >= 2){
            coins.push(2);
            amountLeft -= 2;
        }
        else{
            coins.push(1);
            amountLeft -= 1;
        }
    }
    console.log(coins);
}

console.log("function 14: ");
var x = 46;
var y = 167;
spitCoins(x);
spitCoins(y);