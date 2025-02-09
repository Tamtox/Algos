function characterReplacement(s: string, k: number): number {
  if (k >= s.length) {
    return s.length;
  }
  if (s.length < 1) {
    return 0;
  }
  const map = new Map<string, number>();
  let maxSize = 1;
  let mostCommon = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const rightCount = map.get(s[right]);
    map.set(s[right], rightCount !== undefined ? rightCount + 1 : 1);
    mostCommon = Math.max(mostCommon, (rightCount || 0) + 1);
    if (right - left + 1 - mostCommon > k) {
      const leftCount = map.get(s[left]);
      map.set(s[left], leftCount !== undefined ? leftCount - 1 : 0);
      left++;
    }
    maxSize = Math.max(maxSize, right - left + 1);
  }
  return maxSize;
}
