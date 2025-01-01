function plusOne(digits: number[]): number[] {
  let carry = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    const num = digits[i];
    let newNum = carry + num;
    if (i === digits.length - 1) {
      newNum += 1;
    }
    if (newNum > 9) {
      carry = Math.floor(newNum / 10);
      newNum = newNum % 10;
    } else {
      carry = 0;
    }
    digits[i] = newNum;
  }
  if (carry > 0) {
    digits.unshift(carry);
  }
  return digits;
}
