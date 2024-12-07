class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteNode(node: ListNode | null): void {
  if (!node) return;
  const next = node?.next;
  const afterNext = next?.next;
  if (next) {
    node.val = next.val;
    node.next = afterNext ? afterNext : null;
  }
}
