function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }
  if (s1 === s2) {
    return true;
  }
  const letterMap = new Map<string, string>();
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (letterMap.size >= 2) {
        return false;
      } else {
        letterMap.set(s1[i], s2[i]);
      }
    }
  }
  for (const [key, val] of letterMap) {
    const item2 = letterMap.get(val);
    if (!item2 || item2 !== key) {
      return false;
    }
  }
  return true;
}
