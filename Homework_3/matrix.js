let matrix = function(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
      result[i][j] = 0;
    }
    result[i][i] = 1;
  }
  console.log(result);
  return result;
}

matrix(4);