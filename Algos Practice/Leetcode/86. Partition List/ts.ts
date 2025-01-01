class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) {
    return head;
  }
  const nodesBefore: ListNode[] = [];
  const nodesAfter: ListNode[] = [];
  let curr: ListNode | null = head;
  while (curr) {
    if (curr.val < x) {
      nodesBefore.push(curr);
    } else {
      nodesAfter.push(curr);
    }
    curr = curr.next;
  }
  for (let i = 0; i < nodesBefore.length; i++) {
    if (i === nodesBefore.length - 1) {
      nodesBefore[i].next = null;
      break;
    }
    nodesBefore[i].next = nodesBefore[i + 1];
  }
  for (let i = 0; i < nodesAfter.length; i++) {
    if (i === nodesAfter.length - 1) {
      nodesAfter[i].next = null;
      break;
    }
    nodesAfter[i].next = nodesAfter[i + 1];
  }
  if (nodesBefore.length > 0 && nodesAfter.length > 0) {
    nodesBefore[nodesBefore.length - 1].next = nodesAfter[0];
  }
  return nodesBefore.length > 0 ? nodesBefore[0] : nodesAfter[0];
}
