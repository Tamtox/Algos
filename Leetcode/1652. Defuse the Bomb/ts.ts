function decrypt(code: number[], k: number): number[] {
  const result: number[] = [];
  for (let i = 0; i < code.length; i++) {
    if (k === 0) {
      result.push(0);
    } else {
      let index = k < 0 ? i - 1 : i + 1;
      let count = Math.abs(k);
      let sum = 0;
      while (count > 0) {
        if (index < 0) {
          index = code.length + index;
        }
        if (index >= code.length) {
          index = code.length - index;
        }
        sum += code[index];
        index = k < 0 ? index - 1 : index + 1;
        count--;
      }
      result.push(sum);
    }
  }
  return result;
}
