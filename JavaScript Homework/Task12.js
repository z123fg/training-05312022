const PerfectNum = (num) => {
    if (num <= 1) return false;
    let divisor = ~~(num / 2);
    let sum = 0;
    while (divisor >= 1) {
      if (num % divisor === 0) {
        sum += divisor;
      }
      divisor--;
    }
    return sum === num;
  };
  