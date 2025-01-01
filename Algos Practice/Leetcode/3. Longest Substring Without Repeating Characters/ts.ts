function lengthOfLongestSubstring(s: string): number {
  if (s.length < 2) return s.length;
  let longest = 1;
  let left = 0;
  let right = 1;
  let substring = s[0];
  while (right < s.length) {
    const charRight = s[right];
    const index = substring.indexOf(charRight);
    if (index > -1) {
      longest = Math.max(substring.length, longest);
      left = left + index + 1;
      substring = substring.slice(index + 1) + charRight;
    } else {
      substring += charRight;
      longest = Math.max(substring.length, longest);
    }
    right++;
  }
  return longest;
}
