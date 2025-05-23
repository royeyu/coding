// Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) {
      return 0
  }
  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)
  const max = Math.max(leftDepth, rightDepth) + 1
  return max
};