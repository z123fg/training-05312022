let uniqueChars = function(str) {
  let strCopy = str;
  let unique = "";

  for (let i = 0; i < str.length; i++) {
    if (unique.indexOf(str.charAt(i)) === -1) {
      unique += str[i];
    }
  }
  return unique;

}

uniqueChars("thequickbrownfoxjumpsoverthelazydog");