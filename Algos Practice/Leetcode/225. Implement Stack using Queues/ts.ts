class MyStack {
  stack: number[] = [];
  constructor() {
    this.stack = [];
  }

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number {
    const elem = this.stack.pop();
    return elem || -1;
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  empty(): boolean {
    return this.stack.length === 0 ? true : false;
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
