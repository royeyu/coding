/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const oldnums = [...nums]
  const mark = k % oldnums.length
  for(let i = 0;i < oldnums.length - mark;i++) {
      nums[i + mark] = oldnums[i]
  }
  for(let i = 0;i < mark;i++) {
      nums[i] = oldnums[oldnums.length - mark + i]
  }
};