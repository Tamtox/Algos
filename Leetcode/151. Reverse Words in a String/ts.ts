function reverseWords(s: string): string {
  s = s.trim();
  let result = "";
  let word = "";
  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    if (word.length > 0) {
      if (i === 0) {
        if (char !== " ") {
          word = `${char}${word}`;
        }
        result += word;
      }
      if (char !== " ") {
        word = `${char}${word}`;
      } else {
        result += `${word} `;
        word = "";
      }
    } else {
      if (char !== " ") {
        word = `${char}${word}`;
        if (i === 0) {
          result += word;
        }
      }
    }
  }
  return result;
}
