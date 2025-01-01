public class Solution
{
    public ListNode MergeTwoLists(ListNode list1, ListNode list2)
    {
        if (list1 == null) return list2;
        if (list2 == null) return list1;
        ListNode result = new ListNode(0, null);
        ListNode currentResult = result;
        ListNode currentList1 = list1;
        ListNode currentList2 = list2;
        while(currentList1 != null || currentList2 != null)
        {
            if (currentList1 == null && currentList2 == null) break;
            if (currentList1 != null && currentList2 != null)
            {
                if(currentList1.val < currentList2.val) 
                {
                    currentResult.val = currentList1.val;
                    currentList1 = currentList1.next;
                    currentResult.next = new ListNode(0, null);
                    currentResult = currentResult.next;
                } else if(currentList2.val < currentList1.val)
                {
                    currentResult.val = currentList2.val;
                    currentList2 = currentList2.next;
                    currentResult.next = new ListNode(0, null);
                    currentResult = currentResult.next;
                } else
                {
                    currentResult.val = currentList1.val;
                    currentList1 = currentList1.next;
                    currentResult.next = new ListNode(0, null);
                    currentResult = currentResult.next;
                    currentResult.val = currentList2.val;
                    currentList2 = currentList2.next;
                    if(currentList1 != null || currentList2 != null)
                    {
                        currentResult.next = new ListNode(0, null);
                        currentResult = currentResult.next;
                    }
                }
            } else
            {
                if(currentList1 == null)
                {
                    currentResult.val = currentList2.val;
                    currentList2 = currentList2.next;
                    if(currentList2 != null)
                    {
                        currentResult.next = new ListNode(0, null);
                        currentResult = currentResult.next;
                    }
                    continue;
                }
                if (currentList2 == null)
                {
                    currentResult.val = currentList1.val;
                    currentList1 = currentList1.next;
                    if (currentList1 != null)
                    {
                        currentResult.next = new ListNode(0, null);
                        currentResult = currentResult.next;
                    }
                    continue;
                }
            }
        }
        return result;
    }
}