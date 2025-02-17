class MinStack {
  stack: number[];
  sortedStack: number[];
  constructor() {
    this.stack = [];
    this.sortedStack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    if (this.sortedStack.length === 0) {
      this.sortedStack.push(val);
    } else {
      if (val <= this.sortedStack[0]) {
        this.sortedStack.unshift(val);
      } else if (val >= this.sortedStack[this.sortedStack.length - 1]) {
        this.sortedStack.push(val);
      } else {
        let left = 0;
        let right = this.sortedStack.length - 1;
        let index = 0;
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (this.sortedStack[mid] === val) {
            index = mid;
            break;
          } else if (this.sortedStack[mid] > val) {
            if (this.sortedStack[mid - 1] < val) {
              index = mid;
              break;
            }
            right = mid - 1;
          } else {
            if (this.sortedStack[mid + 1] > val) {
              index = mid + 1;
              break;
            }
            left = mid + 1;
          }
        }
        this.sortedStack.splice(index, 0, val);
      }
    }
  }

  pop(): void {
    if (this.stack.length === 0) {
      return;
    }
    const val = this.stack.pop();
    if (val === undefined) {
      return;
    }
    if (val === this.sortedStack[0]) {
      this.sortedStack.shift();
    } else if (val === this.sortedStack[this.sortedStack.length - 1]) {
      this.sortedStack.pop();
    } else {
      let left = 0;
      let right = this.sortedStack.length - 1;
      let index = 0;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (this.sortedStack[mid] === val) {
          index = mid;
          break;
        } else if (this.sortedStack[mid] > val) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
      this.sortedStack.splice(index, 1);
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.sortedStack[0];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
