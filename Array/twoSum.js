/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

var twoSum = function(nums, target) {
  const seen = {}; // 创建一个对象作为哈希表

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];

      if (seen.hasOwnProperty(complement)) { // 检查补数是否存在
          return [seen[complement], i];
      }

      seen[nums[i]] = i; // 存储当前数字及其索引
  }

  return []; // 如果没有找到，返回空数组
};