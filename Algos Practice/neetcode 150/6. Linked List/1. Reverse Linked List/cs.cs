/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode ReverseList(ListNode head) {
        List<int> list = new();
        ListNode current = head;
        while (current != null) {
            list.Add(current.val);
            current = current.next;
        }
        current = head;
        for(int i = 0; i < list.Count; i++) {
            current.val = list[list.Count - i - 1];
            current = current.next;
        }
        return head;
    }
}