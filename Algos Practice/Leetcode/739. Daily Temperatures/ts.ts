type Stack = { val: number; index: number }[];

function findIndex(arr: Stack, num: number) {
  if (num < arr[0].val) {
    return -1;
  }
  if (num === arr[0].val) {
    return 0;
  }
  if (num > arr[arr.length - 1].val) {
    return arr.length;
  }
  if (num === arr[arr.length - 1].val) {
    return arr.length - 1;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid].val === num) {
      if (arr[mid - 1].val < num) {
        return mid;
      } else {
        let index = mid - 1;
        while (arr[index].val >= num) {
          index--;
        }
      }
    } else if (arr[mid].val > num) {
    } else {
    }
  }
  return 0;
}

function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = [];
  const stack: Stack = [];
  for (let i = 0; i < temperatures.length - 1; i++) {
    if (temperatures[i] < temperatures[i + 1]) {
      result.push(1);
    } else {
      stack.push({ val: temperatures[i], index: i });
      result.push(0);
    }
  }
  result.push(0);
  return result;
}
