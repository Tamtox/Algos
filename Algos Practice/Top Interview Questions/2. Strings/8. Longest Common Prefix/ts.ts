function longestCommonPrefix(strs: string[]): string {
  let result = strs[0];
  for (const str of strs) {
    const len = Math.min(result.length, str.length);
    let newResult = "";
    for (let i = 0; i < len; i++) {
      if (result[i] === str[i]) {
        newResult += result[i];
      } else {
        break;
      }
    }
    result = newResult;
  }
  return result;
}
