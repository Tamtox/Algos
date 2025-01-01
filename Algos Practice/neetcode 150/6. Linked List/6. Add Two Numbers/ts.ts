class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const numArr1: number[] = [];
    const numArr2: number[] = [];
    let curr1 = l1;
    let curr2 = l2;
    while(curr1) {
        numArr1.push(curr1.val);
        curr1 = curr1.next;
    }
    while(curr2) {
        numArr2.push(curr2.val);
        curr2 = curr2.next;
    }
    const sumArr: number[] = [];
    let index1 = 0;
    let index2 = 0;
    let carry = 0;
    while(index1 < numArr1.length || index2 < numArr2.length) {
        const num1 = numArr1[index1] || 0;
        const num2 = numArr2[index2] || 0;
        const sum = num1 + num2 + carry;
        carry = Math.floor(sum / 10);
        sumArr.push(sum % 10);
        index1++;
        index2++;
    }
    if(carry) {
        sumArr.push(carry);
    }
    let head: ListNode | null = null;
    let curr: ListNode | null = null;
    for(let i = 0; i < sumArr.length; i++) {
        const node = new ListNode(sumArr[i]);
        if(!head) {
            head = node;
        }
        if(curr) {
            curr.next = node;
        }
        curr = node;
    }
    return head;
};