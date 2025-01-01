function firstUniqChar(s: string): number {
  const map = new Map<string, number[]>();
  for (let i = 0; i < s.length; i++) {
    const mapArr = map.get(s[i]);
    map.set(s[i], mapArr ? [...mapArr, i] : [i]);
  }
  for (let entry of map) {
    if (entry[1].length === 1) {
      return entry[1][0];
    }
  }
  return -1;
}
