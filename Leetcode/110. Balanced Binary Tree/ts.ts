function dfs(node: TreeNode | null, count) {
  if (!node) {
    return count;
  }
  count++;
  return Math.max(dfs(node.left, count), dfs(node.right, count));
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  const left = dfs(root.left, 0);
  const right = dfs(root.right, 0);
  return Math.abs(left - right) <= 1;
}
