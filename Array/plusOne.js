/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for(let i = digits.length; i >= 0; i--) {
      if(i === 0 && digits[i] === 0) {
        digits.unshift(1)
      } else if(digits[i-1] !== 9) {
        digits[i-1]++
        break
      } else {
        digits[i-1] = 0
      }
  }
  return digits
};

console.log(plusOne([9]))