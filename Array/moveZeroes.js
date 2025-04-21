/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let lastZeroFlag = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      lastZeroFlag = i
      for(let j = lastZeroFlag + 1; j < nums.length; j++) {
        if(nums[j] !== 0) {
          nums[i] = nums[j]
          nums[j] = 0
          lastZeroFlag++
          break
        }
        if (lastZeroFlag === nums.length - 1) {
          return
        }
      }
    }
  }
};

var moveZeroes = function(nums) {
  let nonZeroIndex = 0; // 记录下一个非零元素应该放置的位置

  // 第一步：将所有非零元素移动到数组前面
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          nums[nonZeroIndex] = nums[i];
          nonZeroIndex++;
      }
  }

  // 第二步：将剩余的位置填充为零
  for (let i = nonZeroIndex; i < nums.length; i++) {
      nums[i] = 0;
  }
};

var moveZeroes = function(nums) {
  let nonZeroIndex = 0; // 记录下一个非零元素应该放置的位置

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          // 只有当 i 不等于 nonZeroIndex 时才进行交换，避免不必要的操作
          if (i !== nonZeroIndex) {
              [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
          }
          nonZeroIndex++;
      }
  }
};