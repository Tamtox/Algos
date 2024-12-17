const numsMap = {
  "0": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
};

function multiply(num1: string, num2: string): string {
  const nums: number[] = [];
  for (let i = 0; i < num1.length; i++) {
    const n1 = numsMap[num1[num1.length - 1 - i]];
    let res = 0;
    let carry = 0;
    let mult = 1;
    for (let j = 0; j < num2.length; j++) {
      const n2 = numsMap[num2[num2.length - 1 - j]];
      const subSum = n1 * n2 + carry;
      carry = subSum > 9 ? Math.floor(subSum / 10) : 0;
      if (res === 0) {
        res = subSum % 10;
      } else {
        res = (subSum % 10) * mult + res;
      }
      mult *= 10;
    }
    if (carry > 0) {
      res = carry * mult + res;
    }
    nums.push(res);
  }
  let result = 0;
  let mult = 1;
  for (let num of nums) {
    result = result === 0 ? num : num * mult + result;
    mult *= 10;
  }
  return result + "";
}
