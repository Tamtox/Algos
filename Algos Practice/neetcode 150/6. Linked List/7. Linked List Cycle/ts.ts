/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  const set: Set<ListNode> = new Set();
  let curr = head;
  while(curr) {
    if(set.has(curr)) {
      return true;
    }
    set.add(curr);
    curr = curr.next;
  }
  return false;
};