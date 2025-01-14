const digitsToLetters: { [key: string]: string[] } = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  const result: string[] = [];
  let amount = 1;
  for (let i = 0; i < digits.length; i++) {
    amount *= digitsToLetters[digits[i]].length;
  }
  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    for (let j = 0; j < amount; j++) {
      const item = result[j];
      let index = Math.floor(j / (amount / digitsToLetters[digit].length));
      if (!item) {
        result.push(digitsToLetters[digit][index]);
      } else {
        result[j] += digitsToLetters[digit][index];
      }
    }
  }
  return result;
}
