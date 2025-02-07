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

function determineDepth(node: TreeNode | null, count: number) {
  if (!node) {
    return count;
  }
  count++;
}

function isBalanced(root: TreeNode | null): boolean {}
