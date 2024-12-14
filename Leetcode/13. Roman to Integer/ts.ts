const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const nums = s.split("").map((c) => roman[c]);
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < nums[i + 1]) {
      result = result - num;
    } else {
      result = result + num;
    }
  }
  return result;
}
