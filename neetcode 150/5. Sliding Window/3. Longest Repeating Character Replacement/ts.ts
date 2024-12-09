function characterReplacementMy(s: string, k: number): number {
  if (s.length <= k) return s.length;
  let longest = 0;
  const map = new Map<string, number[]>();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const mapChar = map.get(char);
    map.set(char, mapChar ? [...mapChar, i] : [i]);
  }
  if (map.size === 1) {
    return s.length;
  }
  for (const [key, values] of map) {
    for (let i = 0; i < values.length; i++) {
      let index = values[i];
      let current = 1;
      let remainder = k;
      for (let j = i + 1; j < values.length; j++) {
        const newIndex = values[j];
        const diff = newIndex - 1 - index;
        if (diff <= remainder) {
          index = newIndex;
          current = current + diff + 1;
          remainder -= diff;
        } else {
          current = current + remainder;
          remainder = 0;
          break;
        }
      }
      if (remainder > 0) {
        current =
          remainder + current < s.length ? remainder + current : s.length;
      }
      longest = Math.max(current, longest);
    }
  }
  return longest;
}
