function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const queue1 = [p];
  const queue2 = [q];
  while (queue1.length > 0) {
    const node1 = queue1.shift();
    const node2 = queue2.shift();
    if (node1?.val !== node2?.val) {
      return false;
    }
    if (node1?.left) {
      if (!node2?.left) {
        return false;
      }
      queue1.push(node1.left);
    }
    if (node1?.right) {
      if (!node2?.right) {
        return false;
      }
      queue1.push(node1.right);
    }
    if (node2?.left) {
      if (!node1?.left) {
        return false;
      }
      queue2.push(node2.left);
    }
    if (node2?.right) {
      if (!node1?.right) {
        return false;
      }
      queue2.push(node2.right);
    }
  }
  return true;
}
