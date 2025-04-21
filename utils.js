export class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function arrayToTree(arr) {
  if (!arr.length) return null;

  const nodes = arr.map(val => (val === null ? null : new TreeNode(val)));
  for (let i = 0; i < nodes.length; i++) {
      if (nodes[i] !== null) {
          const leftIndex = 2 * i + 1;
          const rightIndex = 2 * i + 2;
          nodes[i].left = leftIndex < nodes.length ? nodes[leftIndex] : null;
          nodes[i].right = rightIndex < nodes.length ? nodes[rightIndex] : null;
      }
  }
  return nodes[0]; // 返回根节点
}
