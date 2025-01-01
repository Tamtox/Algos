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

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let level = 1;
  let parents = [root];
  let children: TreeNode[] = [];
  for (let i = 0; i < parents.length; i++) {
    const parent = parents[i];
    if (parent.left) {
      children.push(parent.left);
    }
    if (parent.right) {
      children.push(parent.right);
    }
    if (i === parents.length - 1) {
      if (children.length > 0) {
        level++;
      } else {
        break;
      }
      let parents = [...children];
      children = [];
      if (parents.length > 0) {
        i = -1;
      }
    }
  }
  return level;
}
