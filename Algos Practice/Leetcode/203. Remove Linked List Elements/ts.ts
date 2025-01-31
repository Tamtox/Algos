class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return head;
  }
  let curr: ListNode | null = head;
  const result: ListNode[] = [];
  while (curr !== null) {
    if (curr.val !== val) {
      result.push(curr);
    }
    curr = curr.next;
  }
  if (result.length === 0) {
    return null;
  }
  for (let i = 0; i < result.length; i++) {
    if (i === result.length - 1) {
      result[i].next = null;
      break;
    }
    result[i].next = result[i + 1];
  }
  return result[0];
}
