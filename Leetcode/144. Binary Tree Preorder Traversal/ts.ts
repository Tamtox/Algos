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

const traverse = (node: TreeNode, arr: number[]) => {
  arr.push(node.val);
  if (!node?.left && !node?.right) {
    return;
  }
  if (node.left) {
    traverse(node.left, arr);
  }
  if (node.right) {
    traverse(node.right, arr);
  }
};

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const arr = [];
  traverse(root, arr);
  return arr;
}
