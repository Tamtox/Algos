// My solution too slow
function threeSumMy(nums: number[]): number[][] {
  const len = nums.length;
  const dict = new Map<number, number[]>();
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    const indexes = dict.get(num);
    dict.set(num, indexes ? [...indexes, i] : [i]);
  }
  const sorted = Array.from(dict.keys()).sort((a, b) => a - b);
  const combinations = new Set<string>();
  const result: number[][] = [];
  for (let i = 0; i < sorted.length; i++) {
    const num1 = sorted[i];
    for (let j = i; j < sorted.length; j++) {
      const num2 = sorted[j];
      if (num1 === num2) {
        const indexes = dict.get(num1);
        if (!indexes) continue;
        if (indexes.length < 2) continue;
      }
      const num3 = 0 - (num1 + num2);
      const combination = [num1, num2, num3].sort((a, b) => a - b);
      if (combinations.has(combination.join(""))) continue;
      const indexes = dict.get(num3);
      if (!indexes) continue;
      if (num3 === num1 || num3 === num2) {
        if (num3 === num1 && num3 === num2) {
          if (indexes.length < 3) continue;
        } else {
          if (indexes.length < 2) continue;
        }
      }
      if (indexes.length < 1) continue;
      combinations.add(combination.join(""));
      result.push(combination);
    }
  }
  return result;
}

// Correct solution
function threeSum(nums: number[]): number[][] {
  const len = nums.length;
  const sorted = nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const combinations = new Set<string>();
  for (let i = 0; i < sorted.length; i++) {
    const num1 = sorted[i];
    let j = i + 1;
    let k = len - 1;
    while (j < k) {
      const num2 = sorted[j];
      const num3 = sorted[k];
      const sum = num1 + num2 + num3;
      if (sum === 0) {
        const combination = [num1, num2, num3].sort((a, b) => a - b);
        if (combinations.has(combination.join(""))) {
          j++;
          k--;
          continue;
        }
        combinations.add(combination.join(""));
        result.push(combination);
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
}
