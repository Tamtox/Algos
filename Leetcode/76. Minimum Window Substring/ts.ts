function compareMaps(
  required: Map<string, number>,
  str: Map<string, number>
): boolean {
  for (let [key, value] of required) {
    if (str.get(key) !== value) return false;
  }
  return true;
}

function minWindow(s: string, t: string): string {
  if (t.length > s.length) return "";
  if (t.length === 1) return s.includes(t) ? t : "";
  let left = 0;
  let right = t.length - 1;
  const lettersRequired = new Map<string, number>();
  for (let char of t) {
    lettersRequired.set(char, (lettersRequired.get(char) || 0) + 1);
  }
  const validStrings = new Set<string>();
  let str = s.slice(0, t.length);
  const strLetterCount = new Map<string, number>();
  for (let char of str) {
    strLetterCount.set(char, (strLetterCount.get(char) || 0) + 1);
  }
  let strValid = compareMaps(lettersRequired, strLetterCount);
  if (strValid) validStrings.add(str);
  while (right < s.length && left < s.length - t.length) {
    const charRight = s[right];
  }
  return "";
}
