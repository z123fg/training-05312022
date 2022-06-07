let funcParameter = function(func) {
  let test = func();
  console.log(test);
}

let test = function() {
  return "test";
}

funcParameter(test);