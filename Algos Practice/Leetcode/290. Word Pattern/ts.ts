function wordPattern(pattern: string, s: string): boolean {
  const map = new Map<string, string>();
  const reverseMap = new Map<string, string>();
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    const word = map.get(pattern[i]);
    const reverseMapItem = reverseMap.get(words[i]);
    if (word !== undefined) {
      if (word !== words[i] || pattern[i] !== reverseMapItem) {
        return false;
      }
    } else {
      if (reverseMapItem !== undefined) {
        return false;
      }
      map.set(pattern[i], words[i]);
      reverseMap.set(words[i], pattern[i]);
    }
  }
  return true;
}
