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

public class Solution
{
    public void ReorderList(ListNode head)
    {
        List<ListNode> ptrs = new();
        var current = head;
        while (current != null)
        {
            ptrs.Add(current);
            current = current.next;
        }
        if (ptrs.Count == 2 || ptrs.Count == 1)
        {
            return;
        }
        int mid = (int)Math.Ceiling(ptrs.Count / 2.0);
        for (int i = 0; i < mid; i++)
        {
            if (i == mid - 1)
            {
                if (mid % 2 == 0)
                {
                    var node = ptrs[i];
                    var next = ptrs[ptrs.Count - 1 - i];
                    node.next = next;
                    next.next = null;
                }
                else
                {
                  var node = ptrs[i];
                  node.next = null;
                }
                break;
            } else {
            var node = ptrs[i];
            var next = ptrs[i + 1];
            var newNext = ptrs[ptrs.Count - 1 - i];
            node.next = newNext;
            newNext.next = next;
            }
        }
    }
}