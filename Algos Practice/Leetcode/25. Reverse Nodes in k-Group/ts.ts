class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const nodes: ListNode[] = [];
  let curr = head;
  let nextNode = head;
  while (curr) {
    nodes.push(curr);
    curr = curr.next;
  }
  let newHead = nodes[nodes.length - 1];
  return newHead;
}
