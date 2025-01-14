class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeNodes(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  let left: ListNode | null = head;
  let right: ListNode | null = head.next;
  const sums: number[] = [];
  let sum = 0;
  while (right !== null) {
    if (right.val === 0) {
      if (sum !== 0) {
        sums.push(sum);
      }
      sum = 0;
      left = right;
    } else {
      sum += right.val;
    }
    right = right.next;
  }
  if (sums.length == 0) {
    return null;
  }
  head.val = sums[0];
  if (sums.length < 2) {
    return head;
  }
  let curr: ListNode | null = head.next;
  for (let i = 1; i < sums.length; i++) {
    if (i === sums.length - 1) {
      curr.next = null;
      break;
    }
    curr.val = sums[i];
    curr = curr.next;
  }
  return head;
}
