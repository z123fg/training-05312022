/**function 28 */
function javascriptFunction(x)
{
    console.log(`This function reads functions, and the name of this function is ${x}`);
}

function exFunct(){
    console.log("This is a function");
}

console.log("function 28: ");
const functObj = exFunct.name;
javascriptFunction(functObj);