function reverseString(s: string[]): void {
  const mid = Math.ceil(s.length / 2);
  for (let i = 0; i < mid; i++) {
    const char = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = char;
  }
}
