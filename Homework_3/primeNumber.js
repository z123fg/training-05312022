let primeNumber = function(num) {
  let result = true;
  let counter = 1;
  let notPrimeNumber;

  if (num == 1) {
    return true;
  }

  while (counter < num) {
    for (let i = 1; i < num; i++) {
      notPrimeNumber = counter * i;
      if (notPrimeNumber === num) {
        result = false;
      }
    }
    counter++;
  }
  console.log(result);
  return result;

}

primeNumber(17);