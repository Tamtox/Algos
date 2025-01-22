function largestNumber(nums: number[]): string {
  const str = nums.map((x) => x.toString());
  str.sort((x, y) => x - y);
  return str.join("");
}
