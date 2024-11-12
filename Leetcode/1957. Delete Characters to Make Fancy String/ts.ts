function makeFancyString(s: string): string {
  let result = '';
  let i = 0;
  while(i < s.length) {
    const char = s[i];
    if(i < s.length - 2) {
      let j = i + 1;
      while(j < s.length) {
        if(s[j] !== char) break;
        j++;
      }
    } else {
      result+= char;
    }
    i++;
  }
  return result;
};