let getFunctionName = function () {
  console.log(arguments.callee.name);
}

getFunctionName();