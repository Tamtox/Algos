function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const result: number[] = [];
  const set1 = new Set<number>();
  const set2 = new Set<number>();
  for (let i = 0; i < A.length; i++) {
    let common = 0;
    if (A[i] === B[i]) {
      common++;
    } else {
      if (set2.has(A[i])) {
        common++;
      }
      if (set1.has(B[i])) {
        common++;
      }
    }
    if (i > 0) {
      common += result[result.length - 1];
    }
    result.push(common);
    set1.add(A[i]);
    set2.add(B[i]);
  }
  return result;
}
