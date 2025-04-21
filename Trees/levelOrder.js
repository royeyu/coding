//  Binary Tree Level Order Traversal

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const list = [];
  const traversal = (node, layer) => {
      if (!node) return;
      if (!list[layer]) list[layer] = [];
      list[layer].push(node.val);
      traversal(node.left, layer + 1);
      traversal(node.right, layer + 1);
  };
  traversal(root, 0);
  return list;
};


// Example usage
import { TreeNode, arrayToTree } from '../utils.js';

const root = [3,9,20,null,null,15,7]
const traversalResult = levelOrder(arrayToTree(root));
console.log("traversalResult:", JSON.stringify(traversalResult));