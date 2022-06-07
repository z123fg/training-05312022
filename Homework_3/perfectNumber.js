let perfectNumber = function(num) {
  let perfectNum = false;
  let divisors = [];
  let total = 0;
  for (let i = 1 ; i < num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  for (let k = 0; k < divisors.length; k++) {
    total += divisors[k];
  }

  if (total === num && ((total + 6)/2) === 6) {
    perfectNum = true;
  }
  console.log(perfectNum);
}

perfectNumber(6);