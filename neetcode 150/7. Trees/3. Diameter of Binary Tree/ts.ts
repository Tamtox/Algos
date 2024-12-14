function dfs(node: TreeNode | null, count: number) {
  if (!node) {
    return count;
  }
  count++;
  return Math.max(dfs(node.left, count), dfs(node.right, count));
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const depthLeft = dfs(root.left, 0);
  const depthRight = dfs(root.right, 0);
  return depthLeft + depthRight;
}
