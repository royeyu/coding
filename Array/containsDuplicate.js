/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const newset = new Set()
  for(let num of nums) {
      if (newset.has(num)) {
          return true
      }
      newset.add(num)
  }
  return false
};