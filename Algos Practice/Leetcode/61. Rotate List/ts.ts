class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) {
    return head;
  }
  const nodes: ListNode[] = [];
  let curr: ListNode | null = head;
  while (curr) {
    nodes.push(curr);
    curr = curr.next;
  }
  if (k >= nodes.length) {
    k = k % nodes.length;
  }
  if (k === 0) {
    return head;
  }
  const newHeadIndex = nodes.length - k;
  const newEnd = newHeadIndex - 1;
  nodes[newEnd].next = null;
  if (newHeadIndex === nodes.length - 1) {
    nodes[newHeadIndex].next = nodes[0];
  } else {
    nodes[nodes.length - 1].next = nodes[0];
  }
  return nodes[newHeadIndex];
}
