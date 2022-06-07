// Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function conUppercase(str){
var splitchar = str.split(' ');
var array = [];
for(var i=0; i<splitchar.length; i++){
array.push(splitchar[i].charAt(0).toUpperCase()+splitchar[i].slice(1));
}
return array.join(' ');
}
console.log(conUppercase("the quick brown fox"))