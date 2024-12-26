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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }
  let newHead = head;
  let len = 0;
  let curr: ListNode | null = head;
  let next: ListNode | null = curr.next;
  let count = 1;
  // Find first unique
  while (next) {
    if (curr.val !== next.val) {
      if (len === 0) {
      } else {
      }
    } else {
      count++;
    }
    next = next.next;
  }
  return newHead;
}
