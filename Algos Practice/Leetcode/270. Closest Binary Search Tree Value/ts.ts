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

function findClosest(node: TreeNode | null, currVal: number, target: number) {
  if (!node) {
    return currVal;
  }
  let val = node.val;
  if (node.left) {
    const left = findClosest(node.left, 0, target);
    const diffVal = Math.abs(val - target);
    const diffLeft = Math.abs(left - target);
    if (diffLeft < diffVal) {
      val = left;
    } else if (diffLeft === diffVal) {
      val = Math.min(val, left);
    }
  }
  if (node.right) {
    const right = findClosest(node.right, 0, target);
    const diffVal = Math.abs(val - target);
    const diffLeft = Math.abs(right - target);
    if (diffLeft < diffVal) {
      val = right;
    } else if (diffLeft === diffVal) {
      val = Math.min(val, right);
    }
  }
  return val;
}

function closestValue(root: TreeNode | null, target: number): number {
  if (!root) {
    return 0;
  }
  return findClosest(root, root.val, target);
}
