/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
  let result = "";
  for (let i = 0; i < strs.length; i++) {
    result += strs[i];
    if (i === strs.length - 1) {
      break;
    }
    result += "\n";
  }
  return result;
}
/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
  return s.split("\n");
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
