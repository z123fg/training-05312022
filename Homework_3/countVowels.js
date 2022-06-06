let countVowels = function(str) {
  let vowels = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u"
  };
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels[str[i]] !== undefined) {
      count++
    }
  }
  console.log(count);
  return count;
}

countVowels("The quick brown fox");