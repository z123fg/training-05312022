/**function 17 */
function charOccurance(x, y){
    var str = x;
    var char = y;
    var numOccur = 0;

    for(var i = 0; i < str.toString().length; i++)
    {
        var tempChar = str.slice(i, i+1);

        if(tempChar === char)
        {
            numOccur++;
        }
    }

    console.log(`${str} has ${numOccur} occurances of the letter ${char}.`);
}

console.log("function 17");
charOccurance("thequickbrownfoxjumpsoverthelazydog", 'u');
charOccurance("supercalifragilisticexpialidocious", "a");