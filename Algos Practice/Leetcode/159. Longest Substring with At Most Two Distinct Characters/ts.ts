function lookUp(s: string, index: number) {
  const char = s[index];
  for (let i = index - 1; i >= 0; i--) {
    if (s[i] !== char) {
      return i + 1;
    }
  }
  return 0;
}

function lengthOfLongestSubstringTwoDistinct(s: string): number {
  if (s.length < 1) {
    return 0;
  }
  if (s.length < 2) {
    return 1;
  }
  let max = 1;
  let left = 0;
  let right = 1;
  const set = new Set<string>(s[left]);
  while (right < s.length) {
    if (set.has(s[right]) === false) {
      if (set.size < 2) {
        set.add(s[right]);
      } else {
        max = Math.max(right - left, max);
        set.clear();
        set.add(s[right]);
        const index = lookUp(s, right - 1);
        set.add(s[index]);
        left = index;
      }
    }
    if (right === s.length - 1 && left !== right) {
      max = Math.max(right - left + 1, max);
    }
    right++;
  }
  return max;
}
