function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) {
    if (!subRoot) {
      return true;
    } else {
      return false;
    }
  }
  if (!subRoot) {
    return false;
  }
}
