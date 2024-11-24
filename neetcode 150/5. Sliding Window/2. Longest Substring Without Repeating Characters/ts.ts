function lengthOfLongestSubstring(s: string): number {
  const window: string[] = [];
  let longest = 0;
  for (const char of s) {
    const possibleIndex = window.indexOf(char);
    if (possibleIndex !== -1) {
      window.splice(0, possibleIndex + 1);
    }
    window.push(char);
    longest = Math.max(longest, window.length);
  }
  return longest;
}
