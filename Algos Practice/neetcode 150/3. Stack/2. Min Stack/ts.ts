class MinStack {
  stack:number[] = []
  min:number = 0;
  constructor() {
      
  }

  push(val: number): void {
    this.stack.push(val)
    if(val < this.min) this.min = val
  }

  pop(): void {
      
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min;
  }
}
