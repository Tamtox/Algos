function dfs(node: TreeNode | null, count: number) {
  if (!node) {
    return count;
  }
  count++;
  return Math.max(dfs(node.left, count), dfs(node.right, count));
}

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  return dfs(root, 0);
}
