// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223


function reverse_number(number)
{
    str=number.toString();
    return str.split("").reverse("").join("");
}
console.log(Number(reverse_number(32243)));