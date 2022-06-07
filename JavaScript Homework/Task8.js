// Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

const primetest = (num)=>{

    for(var i =2; i<num; i++)
    {
        if(num % i===0)
        {
            console.log("Number is Not Prime");
            return;
        }
    else{
        console.log("Number is Prime");
        return;
    }

}
}
primetest(37);
