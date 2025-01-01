function intersect(nums1: number[], nums2: number[]): number[] {
  const map1 = new Map<number, number>();
  const map2 = new Map<number, number>();
  for (let num of nums1) {
    const val = map1.get(num);
    map1.set(num, val ? val + 1 : 1);
  }
  for (let num of nums2) {
    const val = map2.get(num);
    map2.set(num, val ? val + 1 : 1);
  }
  const result: number[] = [];
  for (const [key1, val1] of map1) {
    const val2 = map2.get(key1);
    if (val2) {
      const times = Math.min(val1, val2);
      for (let i = 0; i < times; i++) {
        result.push(key1);
      }
    }
  }
  return result;
}
