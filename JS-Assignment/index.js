// 1.
function reverseNum(num) {
  return (parseFloat(
    num.toString().split('').reverse().join('')
  )* Math.sign(num))
}

console.log(reverseNum(543.21))