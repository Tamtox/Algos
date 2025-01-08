function findPermutations(str: string) {
  if (str.length < 2) {
    return [str];
  }
  const result: string[] = [];
  for (let i = 0; i < str.length; i++) {
    const remaining = str.slice(0, i) + str.slice(i + 1);
    for (const perm of findPermutations(remaining)) {
      result.push(str[i] + perm);
    }
  }
  return result;
}
