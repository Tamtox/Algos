function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map<number, number>();
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const valsMap = new Map<number, number>();
  for (const [key, val] of map) {
    if (valsMap.has(val)) {
      return false;
    }
    valsMap.set(val, val);
  }
  return true;
}
