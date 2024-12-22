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

const traverseBool = (node: TreeNode, currSum: number, target: number) => {
  currSum += node.val;
  if (!node.left && !node.right) {
    if (currSum === target) {
      return true;
    } else {
      return false;
    }
  }
  let left = false;
  if (node.left) {
    left = traverseBool(node.left, currSum, target);
  }
  let right = false;
  if (node.right) {
    right = traverseBool(node.right, currSum, target);
  }
  return left || right;
};

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }
  return traverseBool(root, 0, targetSum);
}
