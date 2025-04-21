/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let newlist = []
  let map = {}
  nums1.forEach(x => {
      map[x] ? map[x]++ : map[x] = 1
  })
  nums2.forEach(y => {
      if(map[y]) {
          newlist.push(y)
          map[y]--
      }
  })
  return newlist
};