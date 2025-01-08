/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findMaxDepth(node: TreeNode | null, num: number) {
  if (!node) {
    return num;
  }
  num++;
  return Math.max(findMaxDepth(node.left, num), findMaxDepth(node.right, num));
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const left = findMaxDepth(root.left, 0);
  const right = findMaxDepth(root.right, 0);
  return Math.max(
    left + right,
    diameterOfBinaryTree(root.left),
    diameterOfBinaryTree(root.right)
  );
}
