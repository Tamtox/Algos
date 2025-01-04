function mergeAlternately(word1: string, word2: string): string {
  let index1 = 0;
  let index2 = 0;
  let result = "";
  while (index1 < word1.length && index2 < word2.length) {
    result += word1[index1];
    result += word2[index2];
    index1++;
    index2++;
  }
  if (index1 < word1.length) {
    result += word1.slice(index1, word1.length);
  }
  if (index2 < word2.length) {
    result += word2.slice(index2, word2.length);
  }
  return result;
}
