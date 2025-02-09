function isValid(
  s1Map: { [key: string]: number },
  s2Map: { [key: string]: number }
) {
  for (const key in s1Map) {
    if (s2Map[key] === undefined || s2Map[key] !== s1Map[key]) {
      return false;
    }
  }
  return true;
}

function checkInclusion(s1: string, s2: string): boolean {
  if (s2.length < s1.length) {
    return false;
  }
  const s1Map: { [key: string]: number } = {};
  for (const char of s1) {
    s1Map[char] = (s1Map[char] || 0) + 1;
  }
  const s2Map: { [key: string]: number } = {};
  for (let i = 0; i < s1.length; i++) {
    const char = s2[i];
    s2Map[char] = (s2Map[char] || 0) + 1;
  }
  if (isValid(s1Map, s2Map)) {
    return true;
  }
  let left = 0;
  let right = s1.length;
  while (right < s2.length) {
    s2Map[s2[right]] = (s2Map[s2[right]] || 0) + 1;
    if (s2Map[s2[left]] === 1) {
      delete s2Map[s2[left]];
    } else {
      s2Map[s2[left]] = s2Map[s2[left]] - 1;
    }
    if (isValid(s1Map, s2Map)) {
      return true;
    }
    left++;
    right++;
  }
  if (isValid(s1Map, s2Map)) {
    return true;
  }
  return false;
}
