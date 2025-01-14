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

function validate(node: TreeNode, isValid: boolean) {
  if (node.left === null && node.right === null) {
    return isValid;
  }
  let currValid = true;
  if (node.left !== null) {
    if (node.left.val > node.val) {
      currValid = false;
    }
    if (node.right !== null && node.left.val > node.right.val) {
      currValid = false;
    }
  }
  if (node.right !== null) {
    if (node.right.val < node.val) {
      currValid = false;
    }
  }
  return validate(node.left, currValid) && validate;
}

function isValidBST(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }
}
