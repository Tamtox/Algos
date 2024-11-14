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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const nodes: ListNode[] = [];
    let curr = head;
    while(curr) {
      nodes.push(curr);
      curr = curr.next;
    }
    if(nodes.length === 1) {
      return null;
    }
    if(n === 1) {
      nodes[nodes.length - 2].next = null; 
    } else if (n === nodes.length) {
      return nodes[1];
    } else {
      nodes[nodes.length - n - 1].next = nodes[nodes.length - n + 1];
    }
    return head;
};