function characterReplacement(s: string, k: number): number {
  if (s.length <= k) return s.length;
  let longest = 0;
  const map = new Map<string, number[]>();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const mapChar = map.get(char);
    map.set(char, mapChar ? [...mapChar, i] : [i]);
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const indexes = map.get(char);
    let current = 0;
    let remainder = k;
    if (indexes) {
    }
  }
  return longest;
}
