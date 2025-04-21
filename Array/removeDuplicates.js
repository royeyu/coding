/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let list = [nums[0]]
  for(let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i-1]) {
          list.push(nums[i])
          nums[list.length-1] = nums[i]
      }
  }
  return list.length
};