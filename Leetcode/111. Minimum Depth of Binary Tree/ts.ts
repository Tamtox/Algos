function minDepthSearch(node: TreeNode | null, count: number) {
  if (!node) {
    return count;
  }
  count++;
  return Math.max(
    minDepthSearch(node.left, count),
    minDepthSearch(node.right, count)
  );
}

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const left = minDepthSearch(root.left, 1);
  const right = minDepthSearch(root.right, 1);
  if (left === 1) {
    return right;
  }
  if (right === 1) {
    return left;
  }
  return Math.min(left, right);
}
