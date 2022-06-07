/**function 29 */
function functionName(x)
{
    console.log(`This function reads functions, and the name of this function is ${x}`);
}

function exFunct(){
    console.log("This is a function");
}

console.log("function 29: ");
const functObj = exFunct.name;
functionName(functObj);