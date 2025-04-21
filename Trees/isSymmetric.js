// Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const check = (left, right) => {
    if (left === null && right === null) return true
    if (left === null && right !== null) return false
    if (right === null && left !== null) return false
    if (left.val !== right.val) return false
    return check(left.left, right.right) && check(left.right, right.left)
  }
  return check(root.left, root.right);
};