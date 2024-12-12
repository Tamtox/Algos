function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let result = 1;
  let queue = [root];
  let level: TreeNode[] = [];
  let index = 0;
  while (index < queue.length) {
    const node = queue[index];
    if (node?.left) {
      level.push(node.left);
    }
    if (node?.right) {
      level.push(node.right);
    }
    if (index === queue.length - 1) {
      if (level.length > 0) {
        result++;
      }
      queue = [...level];
      level = [];
      index = -1;
    }
    index++;
  }
  return result;
}
