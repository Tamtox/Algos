function shortestDistance(
  wordsDict: string[],
  word1: string,
  word2: string
): number {
  const w1Indexes: number[] = [];
  const w2Indexes: number[] = [];
  for (let i = 0; i < wordsDict.length; i++) {
    if (wordsDict[i] === word1) {
      if (i > 0 && wordsDict[i - 1] === word2) {
        return 1;
      }
      if (i < wordsDict.length - 1 && wordsDict[i + 1] === word2) {
        return 1;
      }
      w1Indexes.push(i);
    }
    if (wordsDict[i] === word2) {
      if (i > 0 && wordsDict[i - 1] === word1) {
        return 1;
      }
      if (i < wordsDict.length - 1 && wordsDict[i + 1] === word1) {
        return 1;
      }
      w2Indexes.push(i);
    }
  }
  let diff = wordsDict.length;
  for (let i = 0; i < w1Indexes.length; i++) {
    for (let j = 0; j < w2Indexes.length; j++) {
      diff = Math.min(diff, Math.abs(w1Indexes[i] - w2Indexes[j]));
    }
  }
  return diff;
}
