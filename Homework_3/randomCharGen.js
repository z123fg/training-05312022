let randomCharGen = function(length) {

  let randomChars = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for (let i = 0; i < length; i++) {
    randomChars += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  //console.log(randomChars);
  return randomChars;

}

randomCharGen(12);