function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const sMappings = new Map<string, string>();
  const tMappings = new Map<string, string>();
  for (let i = 0; i < s.length; i++) {
    const sMapping = sMappings.get(s[i]);
    const tMapping = tMappings.get(s[t]);
    if (!sMapping && !tMapping) {
      sMappings.set(s[i], t[i]);
      tMappings.set(t[i], s);
    }
  }
  return true;
}
