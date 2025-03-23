function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = [];
  let stack: { val: number; index: number }[] = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > stack[stack.length - 1].val) {
      result[stack[stack.length - 1].index] = i - stack[stack.length - 1].index;
      stack.pop();
    }
    result.push(0);
    stack.push({ val: temperatures[i], index: i });
  }
  return result;
}
