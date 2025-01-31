public class MyStack {
  List<int> stack;
    public MyStack() {
      this.stack = new List<int>();
    }
    
    public void Push(int x) {
        this.stack.Add(x);
    }
    
    public int Pop() {
      int num = this.stack[this.stack.Count - 1];
      this.stack.RemoveAt(this.stack.Count - 1);
      return num;
    }
    
    public int Top() {
        return this.stack[this.stack.Count - 1];
    }
    
    public bool Empty() {
      return this.stack.Count == 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.Push(x);
 * int param_2 = obj.Pop();
 * int param_3 = obj.Top();
 * bool param_4 = obj.Empty();
 */