const countNodesDfs = (node: TreeNode | null, count: number) => {
  if (!node) {
    return count;
  }
  count++;
  const left = countNodesDfs(node.left, 0);
  const right = countNodesDfs(node.right, 0);
  return count + left + right;
};

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  return countNodesDfs(root, 0);
}
