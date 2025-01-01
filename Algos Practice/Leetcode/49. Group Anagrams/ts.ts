function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const str of strs) {
    const key = str.split("").sort().join();
    const item = map.get(key);
    map.set(key, item ? [...item, str] : [str]);
  }
  return [...map.values()];
}
