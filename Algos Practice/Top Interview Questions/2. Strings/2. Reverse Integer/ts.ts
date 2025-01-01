function reverse(x: number): number {
  if (x === 0) return 0;
  let isNegative = x < 0 ? true : false;
  if (isNegative) {
    x = x * -1;
  }
  let numsStr = "";
  while (x > 0) {
    const num = x % 10;
    numsStr += num;
    x = Math.floor(x / 10);
  }
  let right = 0;
  while (right < numsStr.length) {
    if (numsStr[right] !== "0") {
      break;
    }
    right++;
  }
  if (right !== 0) {
    numsStr = numsStr.slice(right);
  }
  const result = parseInt(numsStr);
  const limit = Math.pow(2, 31);
  if (result > limit || result < -1 * limit) {
    return 0;
  }
  return isNegative ? result * -1 : result;
}
