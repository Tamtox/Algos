

class ListNode {
  next: ListNode | null;
  val: number;
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(!list1) return list2;
    if(!list2) return list1;
    if(!list1 && !list2) return null;
    let head = new ListNode();
    let curr = head;
    let curr1: ListNode | null = list1;
    let curr2: ListNode | null = list2;
    while(curr1 || curr2) {
      if(curr1 && curr2) {
        if(curr1.val  === curr2.val) {
          curr.val = curr1.val;
          curr.next = new ListNode();
          curr = curr.next;
          curr1 = curr1.next;
          curr.val = curr2.val;
          curr2 = curr2.next;
          if(curr1 || curr2) {
            curr.next = new ListNode();
            curr = curr.next;
          }
        } else if(curr1.val < curr2.val) {
          curr.val = curr1.val;
          curr1 = curr1.next;
          if(curr1 || curr2) {
            curr.next = new ListNode();
            curr = curr.next;
          }
        } else {
          curr.val = curr2.val;
          curr2 = curr2.next;
          if(curr1 || curr2) {
            curr.next = new ListNode();
            curr = curr.next;
          }
        }
      } else if(curr1) {
        curr.val = curr1.val;
        curr1 = curr1.next;
        if(curr1 || curr2){
          curr.next = new ListNode();
          curr = curr.next;
        }
      } else if(curr2) {
        curr.val = curr2.val;
        curr2 = curr2.next;
        if(curr1 || curr2){
          curr.next = new ListNode();
          curr = curr.next;
        }
      } else {
        break;
      }
    }
    return head;
};