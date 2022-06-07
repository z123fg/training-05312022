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
    if(input === '1'){
        return false;
    }else if(input > 1){
        
    }
}

console.log(qEight(5));
