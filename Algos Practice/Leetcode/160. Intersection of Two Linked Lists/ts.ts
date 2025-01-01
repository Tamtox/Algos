class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  const visited = new Set<ListNode>();
  let curr1 = headA;
  let curr2 = headB;
  while (curr1 || curr2) {
    if (curr1) {
      if (visited.has(curr1)) {
        return curr1;
      }
      visited.add(curr1);
      curr1 = curr1.next;
    }
    if (curr2) {
      if (visited.has(curr2)) {
        return curr2;
      }
      visited.add(curr2);
      curr2 = curr2.next;
    }
  }
  return null;
}
