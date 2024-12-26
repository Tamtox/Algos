function numArrToNum(nums) {
  if (nums.length < 2) {
    return nums[0];
  }
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res = res * 10 + nums[i];
  }
  return res;
}

function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const backtrack = (path: number[], options: number[]) => {
    if (options.length === 0) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < options.length; i++) {
      const newOptions = options.slice(0, i).concat(options.slice(i + 1));
      path.push(options[i]);
      backtrack(path, newOptions);
      path.pop(); // Backtrack by removing the last added number
    }
  };
  backtrack([], nums);
  return result;
}

function nextPermutation(nums: number[]): void {
  if (nums.length < 2) {
    return;
  }
  const original = [...nums];
  nums.sort((x, y) => x - y);
  const permutations: number[][] = [];
}
