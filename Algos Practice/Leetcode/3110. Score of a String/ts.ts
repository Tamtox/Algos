function scoreOfString(s: string): number {
  let result = 0;
  for (let i = 1; i < s.length; i++) {
    let sub = Math.abs(s[i - 1].charCodeAt(0) - s[i].charCodeAt(0));
    if (sub < 0) {
      sub = -sub;
    }
    result += sub;
  }
  return result;
}
