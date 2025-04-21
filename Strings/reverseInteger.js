/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
  const str = Math.abs(x).toString()
  const reversedStr = str.split('').reverse().join('')
  const reversedNum = parseInt(reversedStr) * Math.sign(x)
  if (reversedNum < Math.pow(-2, 31) || reversedNum > Math.pow(2, 31) - 1) {
    return 0
  }
  return reversedNum
};