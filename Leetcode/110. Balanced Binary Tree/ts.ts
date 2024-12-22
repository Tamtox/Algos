class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(node: TreeNode | null, depth: number) {
  if (!node) {
    return depth;
  }
  depth++;
  return Math.max(maxDepth(node.left, depth), maxDepth(node.right, depth));
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  const leftDepth = maxDepth(root.left, 0);
  const rightDepth = maxDepth(root.right, 0);
  if (Math.abs(leftDepth - rightDepth) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
}
