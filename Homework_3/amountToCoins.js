let amountToCoins = function(coins) {
  let totalCoins = [];

  while (coins > 0) {
    if (coins >= 25) {
      coins -= 25;
      totalCoins.push(25);
    }
    if (coins < 25 && coins >= 10) {
      coins -= 10;
      totalCoins.push(10);
    }

    if (coins < 10 && coins >= 5) {
      coins -= 5;
      totalCoins.push(5);
    }

    if (coins > 0 && coins < 5) {
      coins -= 1;
      totalCoins.push(1);
    }
  }
  console.log(totalCoins);
}

amountToCoins(46);