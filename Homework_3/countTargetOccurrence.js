let countTargetOccurrence = function(str, input) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === input) {
      count++;
    }
  }
  console.log(count);
  return count;
}

countTargetOccurrence("microsoft", "o");