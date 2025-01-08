function findPalindrome(s: string, left: number, right: number): string {
  while (left >= 1 && right < s.length - 1) {
    if (s[left - 1] !== s[right + 1]) {
      break;
    }
    left--;
    right++;
  }
  return s.slice(left, right + 1);
}

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
      const subStr = findPalindrome(s, i - 1, i + 1);
      if (subStr.length > max.length) {
        max = subStr;
      }
    }
    if (s[i] === s[i + 1]) {
      const subStr = findPalindrome(s, i, i + 1);
      if (subStr.length > max.length) {
        max = subStr;
      }
    }
  }
  return max;
}
