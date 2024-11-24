function characterReplacement(s: string, k: number): number {
  if (s.length <= k) return s.length;
  let longest = 0;
  let longestContinuousSubstrings = new Map<string, number[]>();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const nextChar = s[i + 1];
    if (nextChar === char) {
      let substring = char;
      let index = i + 1;
      while (index < s.length) {
        if (s[index] === char) {
          substring += char;
          index++;
        } else {
          break;
        }
      }
      longestContinuousSubstrings.set(substring, [i, index]);
    }
  }
  for (const [key, value] of longestContinuousSubstrings) {
  }
  return longest;
}
