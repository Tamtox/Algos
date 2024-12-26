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

const findPath = (node: TreeNode, path: string, result: string[]) => {
  path += `->${node.val}`;
  if (!node.left && !node.right) {
    result.push(path);
  }
  if (node.left) {
    findPath(node.left, path, result);
  }
  if (node.right) {
    findPath(node.right, path, result);
  }
};

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) {
    return [];
  }
  const result: string[] = [];
  if (!root.left && !root.right) {
    return [`${root.val}`];
  }
  if (root.left) {
    findPath(root.left, `${root.val}`, result);
  }
  if (root.right) {
    findPath(root.right, `${root.val}`, result);
  }
  return result;
}
