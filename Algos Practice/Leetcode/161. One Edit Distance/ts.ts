function isOneEditDistance(s: string, t: string): boolean {
  if (s === t) {
    return false;
  }
  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();
  let indexS = 0;
  let indexT = 0;
  while (indexS < s.length || indexT < t.length) {
    if (indexS < s.length) {
      const item = sMap.get(s[indexS]);
      sMap.set(s[indexS], item ? item + 1 : 1);
    }
    if (indexT < t.length) {
      const item = tMap.get(t[indexT]);
      tMap.set(t[indexT], item ? item + 1 : 1);
    }
    indexS++;
    indexT++;
  }
  let diffs = 0;
  for (const item of sMap) {
    const itemT = tMap.get(item[0]);
    if (!itemT) {
      diffs += item[1];
    } else {
      diffs += Math.abs(item[1] - itemT);
    }
  }
  for (const item of sMap) {
    const itemT = tMap.get(item[0]);
    if (!itemT) {
      diffs += item[1];
    }
  }
  return diffs !== 1 ? false : true;
}
