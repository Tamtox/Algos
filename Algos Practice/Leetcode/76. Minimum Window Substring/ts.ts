function minWindow(s: string, t: string): string {
  if (t.length > s.length) {
    return "";
  }
  const sMap = new Map<string, number>();
  const tCount = new Map<string, number>();
  for (const char of s) {
    const item = sMap.get(char);
    sMap.set(char, item ? item + 1 : 1);
  }
  for (const char of t) {
    const count = tCount.get(char);
    tCount.set(char, count ? count + 1 : 1);
  }
  for (const item of tCount) {
    const sItem = sMap.get(item[0]);
    if (!sItem) {
      return "";
    }
    if (sItem < item[1]) {
      return "";
    }
  }
  let left = 0;
  let moveLeft = true;
  let right = s.length - 1;
  let moveRight = true;
  return s.slice(left, right + 1);
}
