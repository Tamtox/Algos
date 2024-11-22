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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  const nodes: number[] = [];
  let currNode = head;
  while (currNode) {
    nodes.push(currNode.val);
    currNode = currNode.next;
  }
  currNode = head;
  for (let i = 0; i < nodes.length; i++) {
    if (!currNode) break;
    currNode.val = nodes[nodes.length - 1 - i];
    currNode = currNode.next;
  }
  return head;
}

function reverseListNoExtraSpace(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
