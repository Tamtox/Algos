function majorityElement(nums: number[]): number {
  let result: number = 0;
  let resultCount: number = 0;
  const counter: { [key: number]: number } = {};
  for (let num of nums) {
    counter[num] ? (counter[num] += 1) : (counter[num] = 1);
  }
  const entries = Object.entries(counter);
  for (let entry of entries) {
    const entryNum = Number(entry[0]);
    const entryCount = Number(entry[1]);
    if (entryCount > resultCount) {
      result = entryNum;
      resultCount = entryCount;
    }
  }
  return result;
}
