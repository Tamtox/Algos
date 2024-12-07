function strStr(haystack: string, needle: string): number {
  if (haystack === needle) {
    return 0;
  }
  if (needle.length > haystack.length) {
    return -1;
  }
  let index = -1;
  for (let i = 0; i < haystack.length; i++) {
    const char = haystack[i];
    if (char === needle[0]) {
      if (i + needle.length > haystack.length) {
        break;
      }
      const slice = haystack.slice(i, i + needle.length);
      if (slice === needle) {
        return i;
      }
    }
  }
  return index;
}
