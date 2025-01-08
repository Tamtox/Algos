class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  left--;
  right--;
  const nodes: ListNode[] = [];
  let curr = head;
  while (curr) {
    nodes.push(curr);
    curr = curr.next;
  }
  if (nodes.length < 2) {
    return head;
  }
  for (let i = right; i >= left; i--) {
    if (i === left) {
      if (right < nodes.length - 1) {
        nodes[i].next = nodes[right + 1];
      } else {
        nodes[i].next = null;
      }
      break;
    }
    nodes[i].next = nodes[i - 1];
  }
  if (left > 0) {
    nodes[left - 1].next = nodes[right];
  }
  return left === 0 ? nodes[right] : head;
}
