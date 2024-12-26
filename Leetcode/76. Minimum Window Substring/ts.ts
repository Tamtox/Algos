function minWindow(s: string, t: string): string {
  if (t.length > s.length) {
    return "";
  }
  const sMap = new Map<string, number[]>();
  const tCount = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    const item = sMap.get(s[i]);
    sMap.set(s[i], item ? [...item, i] : [i]);
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
    if (sItem.length < item[1]) {
      return "";
    }
  }
  let left = 0;
  let moveLeft = true;
  let right = s.length - 1;
  let moveRight = true;
  while (moveLeft || moveRight) {
    if (moveLeft) {
      const sItemLeft = sMap.get(s[left]);
      const tItemLeft = tCount.get(s[left]);
      if (sItemLeft && tItemLeft) {
      }
    }
    if (moveRight) {
      const sItemRight = sMap.get(s[right]);
      const tItemRight = tCount.get(s[right]);
      if (sItemRight && tItemRight) {
      }
    }
  }
  return s.slice(left, right + 1);
}
