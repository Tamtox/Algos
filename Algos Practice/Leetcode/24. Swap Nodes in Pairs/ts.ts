class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  const nodes: ListNode[] = [];
  let start: ListNode | null = head;
  while (start) {
    nodes.push(start);
    start = start.next;
  }
  if (nodes.length < 2) {
    return nodes[0];
  }
  let i = 0;
  let prevNode: ListNode | null = null;
  let newHead: ListNode | null = null;
  while (i < nodes.length) {
    const node = nodes[i];
    const nextNode = node.next;
    if (nextNode) {
      const afterNext = nextNode.next || null;
      nextNode.next = node;
      node.next = afterNext;
    }
    if (prevNode) {
      if (nextNode) {
        prevNode.next = nextNode;
      } else {
        prevNode.next = node;
      }
    }
    if (!newHead) {
      newHead = nextNode;
    }
    prevNode = node;
    i += 2;
  }
  return newHead;
}
