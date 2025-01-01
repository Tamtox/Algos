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

function getSum(node: TreeNode, isLeft: boolean) {
  if (!node.left && !node.right) {
    if (isLeft) {
      return node.val;
    } else {
      return 0;
    }
  }
  let sum = 0;
  if (node.left) {
    const left = getSum(node.left, true);
    sum += left;
  }
  if (node.right) {
    const right = getSum(node.right, false);
    sum += right;
  }
  return sum;
}

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let left = 0;
  if (root.left) {
    left = getSum(root.left, true);
  }
  let right = 0;
  if (root.right) {
    right = getSum(root.right, false);
  }
  return left + right;
}
