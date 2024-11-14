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

/**
 Do not return anything, modify head in-place instead.
 */

function reorderList(head: ListNode | null): void {
  const ptrs:ListNode[] = [];
  let curr = head;
  while(curr) {
    ptrs.push(curr);
    curr = curr.next;
  }
  if(ptrs.length === 2 || ptrs.length === 1) {
    return;
  }
  const mid = Math.ceil(ptrs.length / 2);
  for(let i = 0; i < mid; i++) {
    if(i === mid - 1) {
      if(mid %2 === 0) {
        const node =  ptrs[i];
        const next = ptrs[ptrs.length - 1 - i];
        node.next = next;
        next.next = null;
      } else {
        const node = ptrs[i];
        node.next = null;
      }
      break;
    }
    const node = ptrs[i];
    const next = ptrs[i + 1];
    const newNext = ptrs[ptrs.length - 1 - i];
    node.next = newNext;
    newNext.next = next;
  }
};