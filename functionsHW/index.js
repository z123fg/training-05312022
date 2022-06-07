//#1
function reverse(num){
    newNum = parseInt(num.toString().split('').reverse().join(''))
    console.log(newNum)
    return(newNum)
    }

reverse(34223)


//#2
function isPalindrone(str){
    let reversedStr = str.split(' ').reverse().join('')
    if(str === reversedStr){
      console.log(str , 'is a palindrone')
        }else{
      console.log(str , 'is not a palindrone')
    }
    console.log(reversedStr)
    }
    
    isPalindrone('racecar')

    //#3
    function generateAllStrings(str){
        var buff = [];
        var res = [];
        for (i=0;i<str.length;i++){
            buff = [str[i]];
            var index=0;
            while(res[index]){
                buff.push(''+res[index]+str[i]);
                index++;
            }
            res = res.concat(buff);
        }
        console.log(res)
        
        }
        
        generateAllStrings('dog')

//#4

function alphabetize(str){
	var alphabetizedStr = str.split('').sort().join('')
  console.log(alphabetizedStr)
}

alphabetize('webmaster')


//#5
function titleCase(str){
    str = str.toLowerCase().split(' ')
    for(let i=0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
    }
    str = str.join(' ')
    console.log(str)
    }
    
    titleCase('the quick brown fox jumped over the lazy dog')

    //#6
    function findLongestWord(str) {
        var longestWord = str.split(' ').reduce((longest, currentWord) => {
          return currentWord.length > longest.length ? currentWord : longest;
        }, "");
        console.log(longestWord)
        return longestWord.length;
      }
      
      
      findLongestWord('web development master')

    //#7
    function countVowels(str){
        let strArr = str.toLowerCase().split('')
      let vowels = [] 
      
      for(let i=0; i<strArr.length; i ++){
      
          if(
        strArr[i] === 'a' ||
        strArr[i] === 'e' ||
        strArr[i] === 'i' ||
        strArr[i] === 'o' ||
        strArr[i] === 'u'
            ){
            vowels.push(str[i])
        } 
      }
     console.log(`${str} has ${vowels.length} vowels`)
    }
    
    countVowels('webmaster')

    //8
    function prime(num) {
        var isPrime = true
        if (num === 1) {
          isPrime = true
        }
        if (num > 1) {
      
          for (var i = 2; i < num; i++) {
            if (num % i == 0) {
              isPrime = false
              break
            }
      
          }
          if (isPrime) {
            console.log(`${num} is prime`)
          } else {
            console.log(`${num} is not prime`)
          }
        }
      }
      
      prime(13)
      

      //9
      function findType(arg){
        console.log(typeof(arg))
    }
    
    findType('string')
    findType(23)
    findType({})

//10
function matrix(n) {

    var i;
    var j;

    for (i=0; i < n; i++)
    {
      for (j=0; j < n; j++)
      {
           if (i === j)
           {
            
             console.log(' 1 ');
           }
                  
           else 
            {
             console.log(' 0 ');}
            }
         console.log('----------');
       }
   }
matrix(4);


//#11
function seceondHighestSecondLowest(arr){
	ans = []
  index = arr.length-2
  
	arr = arr.sort()
  ans.push(arr[1])
  ans.push(arr[index])
  console.log(ans)
}


seceondHighestSecondLowest([1,2,3,4,5])

//#12
function perfectNumber(num) {
    var factors = []
    for (let i = 1; i < num; i++) {
      if (num % i == 0) {
        factors.push(i)
      }
    }
    var sum = factors.reduce(function(a, b) {
      return a + b;
    }, 0);
  
  
    if (num === sum) {
      console.log(`${num} is a perfect number`)
    } else {
      console.log(`${num} is not a perfect number`)
    }
  }
  
  perfectNumber(6)
  perfectNumber(28)
  perfectNumber(7)

//#13
function factorize(num) {
    var factors = []
    for (let i = 1; i < num; i++) {
      if (num % i == 0) {
        factors.push(i)
      }
    }
    console.log(factors)
  }
  
  factorize(22)

  //#14
  function amountTocoins(amount, coins) {
    if (amount === 0) {
      return [];
    } else {
      if (amount >= coins[0]) {
        left = (amount - coins[0]);
        return [coins[0]].concat(amountTocoins(left, coins));
      } else {
        coins.shift();
        return amountTocoins(amount, coins);
      }
    }
  }
  console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
  

  //#15
  function powers(b, n) {
    let ans = Math.pow(b, n)
    console.log(ans)
  }
  
  powers(2, 2)
  powers(2, 3)
  powers(2, 4)
  powers(3, 3)
   

//#16
function removeVowels(str) {
    var strArr = str.split('')
    strArr = strArr.filter((ele, index) => {
        return (
          strArr[index] !== 'a' &&
          strArr[index] !== 'e' &&
          strArr[index] !== 'i' &&
          strArr[index] !== 'o' &&
          strArr[index] !== 'u'
        )
      }).join('')
  console.log(strArr)
    }
  
  
  
  removeVowels('thequickbrownfoxjumpedoverthelazydog')

  //#17
  function findOccurances(str) {
    str = str.split('').sort().join('')
    let count = 1
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++
      }
      console.log(`${str[i]} has ${count} occurances`)
    }
  }
  
  findOccurances('webmaster')

  //#18
  function binarySearch(ar, el, compare_fn) {
    var m = 0;
    var n = ar.length - 1;
    while (m <= n) {
        var k = (n + m) >> 1;
        var cmp = compare_fn(el, ar[k]);
        if (cmp > 0) {
            m = k + 1;
        } else if(cmp < 0) {
            n = k - 1;
        } else {
            return k;
        }
    }
    return -m - 1;
}


  //#19
  function largerThan(arr, num) {
    arr = arr.filter(ele => {
      return ele > num
    })
    console.log(arr)
  }
  
  largerThan([1, 2, 3, 4, 5, 6, 7, 8,9,10], 2) //3,4,5,6,7,8,9,10

//#20
function makeid(l) {
    var text = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < l; i++) {
      text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
  }
  console.log(makeid(8));
  
//#21

//#22
function findAmountOfLetter(str, letter) {
    letterArr = []
    str = str.toLowerCase().split('')
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        letterArr.push(str[i])
      }
    }
    console.log(`${letter} occurs ${letterArr.length} times in ${str.join('')}`)
  
  }
  
  findAmountOfLetter('hello world', 'o')

  //#23
  function firstNonrepeating(str) {
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
      var char = str[i]
      if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) 		{
        console.log(char)
      }
    }
  }
  
  firstNonrepeating('abacddbec')

  //#24
  function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {
  
      for (var j = 0; j < (arr.length - i - 1); j++) {
  
        if (arr[j] > arr[j + 1]) {
  
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
  
    console.log(arr);
  }
  
  
  
  bblSort([234, 43, 55, 63, 5, 6, 235, 547]);
  

  //#25
  function longestCountry(arr) {
    var result = arr.reduce((longest, currentValue) => {
      console.log(longest)
      return currentValue.length > longest.length ? currentValue : longest
  
    }, '')
    console.log(result)
  }
  
  const countries = ['Australia', 'United States of America', 'Germany']
  
  longestCountry(countries)

  //#26
  function lengthOfLongestSubstring(s) {
    let longestStringLength = 0;
  
    for (let i = 0; i < s.length; i++) {
  
      let currentStringSet = new Set();
  
      for (let x = i; x < s.length; x++) {
        if (currentStringSet.has(s[x])) {
          break;
        } else {
          currentStringSet.add(s[x]);
        }
      }
      longestStringLength = Math.max(
        longestStringLength,
        currentStringSet.size
      );
    }
    console.log(longestStringLength)
    return longestStringLength;
  };
  
  lengthOfLongestSubstring('aabdcde')

  
  //#27
  function longestPalindrome(s) {
    if (s.length < 1) return "";
    let maxSubStart = 0;
    let maxSubLength = 0;
    for (let i = 0; i < s.length; i++) {
      const lengthCenteredAtChar = expandAroundCenter(s, i, i);
      const lengthCenteredAtSpace = expandAroundCenter(s, i, i + 1);
      const longestSubAtChar = Math.max(lengthCenteredAtChar, lengthCenteredAtSpace)
      if (longestSubAtChar > maxSubLength) {
        maxSubLength = longestSubAtChar;
        maxSubStart = i - Math.floor((maxSubLength - 1) / 2);
      }
    }
    console.log(s.substr(maxSubStart, maxSubLength))
    return s.substr(maxSubStart, maxSubLength);
  }
  
  function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }
  
  longestPalindrome('abacdacd')

  //#28


function greet() {
    return 'Hello';
}


function useFunction(user, func)
{

    const message = func();

    console.log(`${message} ${user}`);
}

useFunction('John', greet);
useFunction('Jack', greet)
useFunction('Sara', greet);
  

//29
function getName(){
	console.log(getName.name)
}

getName()