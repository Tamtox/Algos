function includesAll(
  map1: { [key: string]: number },
  map2: { [key: string]: number }
) {
  for (const key in map2) {
    if (map1[key] === undefined || map1[key] < map2[key]) {
      return false;
    }
  }
  return true;
}

function minWindow(s: string, t: string): string {
  if (t.length > s.length) {
    return "";
  }
  const tMap: { [key: string]: number } = {};
  for (const char of t) {
    tMap[char] = (tMap[char] || 0) + 1;
  }
  const sMap: { [key: string]: number } = {};
  for (let i = 0; i < t.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
  }
  let min = s + "a";
  let left = 0;
  let right = t.length;
  if (includesAll(sMap, tMap)) {
    min = s.slice(left, right);
  }
  while (left < s.length) {
    const isValid = includesAll(sMap, tMap);
    if (isValid) {
      if (right - left + 1 < min.length) {
        min = s.slice(left, right);
      }
      if (sMap[s[left]] === 1) {
        delete sMap[s[left]];
      } else {
        sMap[s[left]] = sMap[s[left]] - 1;
      }
      left++;
      if (right - left + 1 < t.length) {
        break;
      }
    } else {
      if (right === s.length) {
        break;
      }
      sMap[s[right]] = (sMap[s[right]] || 0) + 1;
      right++;
    }
  }
  return min === s + "a" ? "" : min;
}
