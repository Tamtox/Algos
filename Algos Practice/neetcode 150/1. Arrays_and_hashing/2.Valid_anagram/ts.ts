  function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    const map1 = new Map<string,number>();
    for(const char of s) {
      const item = map1.get(char);
      map1.set(char, item ? item + 1 : 1);
    }
    const map2 = new Map<string,number>();
    for(const char of t) {
      const item = map2.get(char);
      map2.set(char, item ? item + 1 : 1);
    }
    for(const [key] of map1) {
      const item1 = map1.get(key);
      const item2 = map2.get(key);
      if(item1 !== item2) return false
    }
    return true
  };