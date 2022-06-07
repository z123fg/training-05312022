let positiveInteger = function(num) {

  let positiveIntegers = [];

  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      positiveIntegers.push(i);
    }
  }
  console.log(positiveIntegers);
  return positiveIntegers


}

positiveInteger(12);