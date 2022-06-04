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

console.log("\n");



/*function 2*/
function palindrome(x)
{
    var xList = new Array();
    var y = "";
    var j = x.toString().length;
    var isPalindrome = false;
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

    if (x == y)
    {
        isPalindrome = true;
    }

    if (isPalindrome == true)
    {
        console.log(`${x} is Palindrome.`)
    }
    else{
        console.log(`${x} is not Palindrome.`)
    }
}

console.log("function 2: ");
x = "madam";
y = "Alex";
palindrome(x);
palindrome(y);

console.log("\n");



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
x = "dog";
y = "Alexander";
allCombos(x);
allCombos(y);

console.log("\n");



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
x = "webmaster";
y = "exicutable";
alphabeticalOrder(x);
alphabeticalOrder(y);

console.log("\n");



/*function 5*/ 
function capitolizeWords(x)
{
    var y = "";
    var capitolizeLetter = true;
    
    for (var i = 0; i < x.toString().length; i++)
    {
        var c = x.slice(i, i+1);
        if (capitolizeLetter == true)
        {
            y += c.toUpperCase();
            capitolizeLetter = false;
        }
        else if (c == " ")
        {
            y+= c;
            capitolizeLetter = true;
        }
        else{
            y+= c;
        }
    }
    console.log(y);
}

console.log("function 5: ");
x = "the quick brown fox";
y = "tell me, for whom do you fight?"
capitolizeWords(x);
capitolizeWords(y);

console.log("\n");



/*function 6*/
function longestWord(x)
{
    var y= "";
    var temp = "";
    xWordLength = 0;
    xTempLength = 0;
    //console.log(x.length.toString())
    for (var i = 0; i<x.toString().length; i++)
    {
        var c = x.slice(i, i+1);
        //console.log(i);
        if (c != " ")
        {
            temp += c;
            xTempLength++;
        }
        else
        {
            if (xTempLength > xWordLength)
            {
                y = temp;
                xWordLength = xTempLength;
                //console.log(y);
            }
            xTempLength = 0;
            temp = "";
        }
    }
    if (xTempLength > xWordLength)
    {
        y = temp;
        xWordLength = xTempLength;
    }
    console.log(y);
}

console.log("function 6: ")
x = "Web Development Tutorial"
y = "According to all known laws of aviation"
longestWord(x);
longestWord(y);

console.log("\n");



/*function 7*/
function numOfVowels(x){
    var y = 0;
    for (var i = 0; i < x.toString().length; i++)
    {
        var c = x.slice(i, i+1);
        if(c == 'A' || c == 'a' ||
        c == 'E' || c == 'e' ||
        c == 'I' || c == 'i' ||
        c == 'O' || c == 'o' ||
        c == 'U' || c == 'u'){
            y++;
        }
    }
    console.log(y);
}

console.log("function 7: ");
x = "The quick brown fox";
y = "I've come to make an announcement";
numOfVowels(x);
numOfVowels(y);

console.log("\n");


/*function 8 */
function primeNumber(x){
    var isPrime = true;
}
/**to come back to later */

/**function 9 */
function dataType(x)
{
    console.log(typeof x)
}

console.log("function 9: ");
x = "string";
y = false;
z = 4.2;
dataType(x);
dataType(y);
dataType(z);

console.log("\n");

/**function 10: */
function matrix(x)
{

}
/**to come back to later*/

/**fucntion 11: */
function secTopAndBottom(x)
{
    var secLow = 0;
    var secHig = 0;
    var low = 0;
    var high = 0;

    for(var i= 0; i < x.Array().length; i++){
        
    }
}

/**to come back to later. */

/**function 12 */
function perfectNumber(){

}
/**to come back to later. */

/**function 13 */
function positiveInteger(){

}
/**to come back to later. */

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
x = 46;
y = 167;
spitCoins(x);
spitCoins(y);