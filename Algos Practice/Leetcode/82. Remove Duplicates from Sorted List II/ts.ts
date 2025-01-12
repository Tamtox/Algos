class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || head.next === null) {
    return head;
  }
  const newItems: ListNode[] = [];
  let left = head;
  let right = left.next;
  while (right !== null) {
    if (left.val !== right.val) {
      if (left.next === right) {
        newItems.push(left);
      }
      left = right;
    }
    if (right.next === null && left === right) {
      newItems.push(right);
    }
    right = right.next;
  }
  for (let i = 0; i < newItems.length; i++) {
    if (i === newItems.length - 1) {
      newItems[i].next = null;
    } else {
      newItems[i].next = newItems[i + 1];
    }
  }
  return newItems.length > 0 ? newItems[0] : null;
}
