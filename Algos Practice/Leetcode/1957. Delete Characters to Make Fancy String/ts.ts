function makeFancyString(s: string): string {
  let result = "";
  let left = 0;
  let right = 1;
  while (left < s.length) {
    const leftChar = s[left];
    const rightChar = s[right];
    if (leftChar !== rightChar) {
      const diff = right - left;
      if (diff >= 2) {
        result += `${leftChar}${leftChar}`;
      } else {
        result += leftChar;
      }
      left = right;
    }
    right++;
  }
  return result;
}
