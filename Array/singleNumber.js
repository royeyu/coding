/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = {}
  nums.forEach(x => {
      if(!map[x]) {
        map[x] = true
      } else {
        delete map[x]
      }
  })
  return parseInt(Object.keys(map)[0])
};