//Question 1:
function qOne(input){
    if(!isNaN(input))
        return input.split("").reverse().join("");
    else
        return "Please input number.";

    // try{
    //     if(isNaN(input)){
    //         throw "Error";
    //     }
    // }catch{
    //     input = input.split("");
    //     input = input.reverse();
    //      input = input.join("");

    //      return input;
    // }
}
console.log(qOne("32245"));

//Question 2:
function qTwo(input){
    var reversed = input.replace(" ","");
    reversed = reversed.split("").reverse().join("");

    input = input.replace(" ","");

    if(reversed === input.replace(" ",""))
        return true;
    else
        return false;
}
console.log(qTwo("nurses run"));

//Question 3:
function qThree(input){
    //input = input.split("");
    var output = [];
    for(let i = 0; i < input.length;i++){
        for(let j = i+1; j <input.length+1;j++){
            output.push(input.slice(i,j));
        }
    }
    return output;
}
console.log(qThree("dog"));

//Question 4:
function qFour(input){
    input = input.split("");
    input.sort();
    input = input.join("");
    return input;
}
console.log(qFour("webmaster"));

//Question 5:
function qFive(input){
    var temp = input.split(" ");
    var output = [];
    for(let i = 0; i < temp.length;i++){
        output.push(temp[i].charAt(0).toUpperCase()+temp[i].slice(1));
    }
    return output;
}
console.log(qFive("the quick brown fox"));

//Question 6:
function qSix(input){
    var temp = input.split(" ");
    var output = temp[0];
    for(let i = 1;i < temp.length;i++){
        if(output.length < temp[i].length){
            output = temp[i];
        }
    }
    return output;
}
console.log(qSix("Web Development Tutorial"));

//Question 7:
function qSeven(input){
    var temp = input.replace(" ","");
    var counter = 0;
    for(let i = 0; i < temp.length; i ++){
         if(temp[i] === 'a' || temp[i] === 'e' || temp[i] === 'i' || temp[i] === 'o'|| temp[i] === 'u'){
             counter ++;
         }
    }
    return counter;
}
console.log(qSeven("The quick brown fox"));

//Question 8:
function qEight(input){
    if(input < 4){
        return false;
    }else{
        for(var x = 2; x < input; x++)
        {
            if(input % x === 0)
            {
                return false;
            }
        }
        return true;
    }
}
console.log(qEight(9));

//Question 9: --Not working
// function qNine(input){
//     // for(let i = 0; i < input.length; i++){
//     //     if(typeof input[i] == )
//     // }

//     if(typeof input === Number)
//         console.log("yes");
// }
// console.log(qNine(12));

//Question 10:
function qTen(){
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            if(i == j)
                console.log("1");
            else
                console.log('0');
        }
    }
}
qTen();

//Question 11:
function qTOne(input){
    input.sort();
    var output = [];
    output.push(input[1]);
    output.push(input[input.length-2]);
    return output;
}
console.log(qTOne([1,3,4,5,2]));

//Question 12:
function qTTwo(input){
    var output = [];
    for(let i = 0; i < input; i ++){
        if(input % i == 0)
            output.push(i);
    }

    var sum = 0;
    for(let i = 0; i < output.length; i ++){
        sum += output[i];
    }

    if(input == sum)
        return true;
    else 
        return false;
}

console.log(qTTwo(28));

//Question 13:
function qTThree(input){
    if(input > 0 )
    {
        var output = [];
        for(let i = 0; i < input; i ++){
            if(input % i == 0)
                output.push(i);
        }
        return output;
    }
    else
        return "Not a positive number."
}

console.log(qTThree(9));

//Question 14: Don't understand the question 
function qTFour(){

}
//console.log(qTFour());

//Question 15:
function qTFive(b, n){
    var output = 1;
    for (var i = 1; i <= n; i++)
    {
        output = b * output;        
    }
        
    return output;
}

console.log(qTFive(2,3));

//Question 16: Don't understand the question 
function qTSix(input){
    var output="";
    for (var i = 0;i < input.length; i++)
    {
        if(output.indexOf(input.charAt(i)) == -1)
            output += input[i];  
    }
  return output;  
}
console.log(qTSix("thequickbrownfoxjumpsoverthelazydog"));

function qTSeven(){
    
}