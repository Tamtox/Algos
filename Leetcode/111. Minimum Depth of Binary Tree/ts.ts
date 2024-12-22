function dfs(node: TreeNode, num: number) {
  num++;
  if (node.left === null && node.right === null) {
    return num;
  }
  if (node.left === null) {
    return dfs(node.right, num);
  }
  if (node.right === null) {
    return dfs(node.left, num);
  }
  return Math.min(dfs(node.left, num), dfs(node.right, num));
}

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  if (root.left === null) {
    return dfs(root.right, 1);
  }
  if (root.right === null) {
    return dfs(root.left, 1);
  }
  const left = dfs(root.left, 1);
  const right = dfs(root.right, 1);
  return Math.min(left, right);
}
