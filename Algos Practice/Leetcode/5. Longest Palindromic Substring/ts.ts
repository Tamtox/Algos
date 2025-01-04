function longestPalindrome(s: string): string {
  if (s.length < 1) {
    return "";
  }
  if (s.length < 2) {
    return s[0];
  }
  let max = s[0];
  for (let i = 0; i < s.length; i++) {
    if (s[i - 1] === s[i + 1]) {
    }
    if (s[i] === s[i + 1]) {
    }
  }
  return max;
}
