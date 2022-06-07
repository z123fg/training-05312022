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
console.log("Question 1: " + qOne("32245"));

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
console.log("Question 2: " + qTwo("nurses run"));

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
console.log("Question 3: " + qThree("dog"));

//Question 4:
function qFour(input){
    input = input.split("");
    input.sort();
    input = input.join("");
    return input;
}
console.log("Question 4: " + qFour("webmaster"));

//Question 5:
function qFive(input){
    var temp = input.split(" ");
    var output = [];
    for(let i = 0; i < temp.length;i++){
        output.push(temp[i].charAt(0).toUpperCase()+temp[i].slice(1));
    }
    return output;
}
console.log("Question 5: " + qFive("the quick brown fox"));

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
console.log("Question 6: " + qSix("Web Development Tutorial"));

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
console.log("Question 7: " + qSeven("The quick brown fox"));

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
console.log("Question 8: " + qEight(9));

//Question 9: 
function qNine(input){
    var dtypes = [Function, RegExp, Number, String, Boolean, Object], i, len;
    
    if (typeof input === "object" || typeof input === "function") 
    {
        for (i = 0, len = dtypes.length; i < len; i++) 
        {
            if (value instanceof dtypes[i])
            {
                return dtypes[i];
            }
        }
    }
    return typeof input;
}
console.log("Question 9: " + qNine(12));

//Question 10:
function qTen(){
    console.log("Question 10: ");
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
console.log("Question 11: " + qTOne([1,3,4,5,2]));

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

console.log("Question 12: " + qTTwo(28));

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

console.log("Question 13: " + qTThree(9));

//Question 14:
function qTFour(amount, input){
    var output = [];
    for (let i = 0; i < input.length; i++) {
      if (amount >= input[i]) {
        amount = amount - input[i];
        output.push(input[i])
        i--;
      }
    }

    return output;
}
console.log("Question 14: " + qTFour(46, [25, 10, 5, 2, 1]));

//Question 15:
function qTFive(b, n){
    var output = 1;
    for (var i = 1; i <= n; i++)
    {
        output = b * output;        
    }
        
    return output;
}
console.log("Question 15: " + qTFive(2,3));

//Question 16: Don't understand the question but completed
function qTSix(input){
    var output="";
    for (var i = 0;i < input.length; i++)
    {
        if(output.indexOf(input.charAt(i)) == -1)
            output += input[i];  
    }
  return output;  
}
console.log("Question 16: " + qTSix("thequickbrownfoxjumpsoverthelazydog"));

//Question 17: Not sure what to do...
function qTSeven(input){
}
console.log("Question 17: " + qTSeven("aabec"));

//Question 18:
function qTEight(input, key){
    let l = 0;
    let r = input.length - 1;
    let mid;
    while (r >= l) {
         mid = l + Math.floor((r - l) / 2);
  
        if (input[mid] == key)
            return "The index of the search is " + mid;
  
        if (input[mid] > key)
            r = mid - 1;
        else
            l = mid + 1;
    }
    return "The element is not in the list.";
}
console.log("Question 18: " + qTEight([3, 4, 9, 10, 17, 30], 9));

//Question 19:
function qTNine(input, key){
    var output = [];
    for(let i = 0; i < input.length; i++){
        if(input[i] >= key)
            output.push(input[i]);
    }
    
    if(output.length > 1)
        return output;
    else 
        return "No element in the list is larger than the key.";
}
console.log("Question 19: " + qTNine([3, 4, 9, 10, 17, 30], 41));

//Question 20:
function qTwenty(length){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var output = '';
    for ( let i = 0; i < length; i++ ) {
        output += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return output;
}
console.log("Question 20: " + qTwenty(7));

//Question 21: Only subset for 2... Need to upgrade
function qTwOne(input){
    let output = []
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            output.push([input[j], input[i]]);
        }
    }
    return output;
}
console.log("Question 21: " + qTwOne([1,2,3]));

//Question 22:
function qTwTwo(input,key){
    var output = 0;
    for(let i = 0; i < input.length; i++){
        if(input[i] == key)
            output++;
    }
    return output;
}
console.log("Question 22: " + qTwTwo('microsoft.com','o'));

//Question 23:
function qTwThree(input){
    var output = [];
    for(let i = 0; i < input.length; i ++){
        if(input.indexOf(input[i]) == input.lastIndexOf(input[i]))
            output.push(input[i])
    }

    if(output.length > 0)
        return output;
    else 
        return "There is no first not repeated character in the string.";
}
console.log("Question 23: " + qTwThree('abacddbec'));

//Question 24:
function qTwFour(input){
    for(var i = 0; i < input.length; i++)
    { 
        for(var j = 0; j < ( input.length - i -1 ); j++)
        {
          if(input[j] < input[j+1])
          {
            var temp = input[j];
            input[j] = input[j + 1];
            input[j+1] = temp;
          }
        }
      }
    return input;
}
console.log("Question 24: " + qTwFour([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//Question 25:
function qTwFive(input){
    var output = "";
    for(let i = 0; i < input.length-1; i ++){
        if(input[i].length > input[i+1].length)
            output = input[i];
        else
            output = input[i+1];
    }

    return output;
}
console.log("Question 25: " + qTwFive(["Australia", "Germany", "United States of America"]));

//Question 26: Not sure how to approach
function qTwSix(){

}

//Question 27: Not sure how to approach
function qTwSeven(){

}

//Question 28:
function another(){
    return "In the another.";
}
function qTwEight(){
    return another();
}
console.log("Question 28: " + qTwEight());

//Question 29:
function qTwNine() {
    return arguments.callee.name;
}
console.log("Question 29: " + qTwNine());



