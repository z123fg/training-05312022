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
var x = "madam";
var y = "Alex";
palindrome(x);
palindrome(y);