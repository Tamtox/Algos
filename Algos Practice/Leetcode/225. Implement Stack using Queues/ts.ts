class ListNode {
  constructor(public next: ListNode | null, public val: number) {
    this.next = next;
    this.val = val;
  }
}

class MyStack {
  head?: ListNode;
  count: number;
  constructor() {
    this.head = undefined;
    this.count = 0;
  }

  push(x: number): void {
    const newNode = new ListNode(null, x);
    if (this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.count += 1;
  }

  pop(): number {
    if (this.head) {
      let num = this.head.val;
      if (this.count === 1) {
        this.head = undefined;
        this.count = 0;
      } else {
        if (this.head.next !== null) {
          this.head = this.head.next;
          this.count -= 1;
        }
      }
      return num;
    } else {
      return -1;
    }
  }

  top(): number {
    return this.head ? this.head.val : -1;
  }

  empty(): boolean {
    return this.count === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
