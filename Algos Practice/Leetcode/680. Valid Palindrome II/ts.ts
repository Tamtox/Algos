function isValid(str: string) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function validPalindrome(s: string): boolean {
  let errorCount = 0;
  let left = 0;
  let right = s.length - 1;
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[left] !== s[right]) {
      if (errorCount > 0) {
        return false;
      }
      let isValidWithoutLeft = isValid(s.slice(left + 1, right + 1));
      let isValidWithoutRight = isValid(s.slice(left, right));
      if (isValidWithoutLeft) {
        left++;
        errorCount++;
      } else if (isValidWithoutRight) {
        right--;
        errorCount++;
      } else {
        return false;
      }
    }
    left++;
    right--;
  }
  return true;
}
