function divide(dividend: number, divisor: number): number {
  if (divisor === 0) return 0;
  let isNegative = dividend < 0 || divisor < 0;
  if (divisor < 0 && dividend < 0) isNegative = false;
  if (dividend < 0) dividend = -dividend;
  if (divisor < 0) divisor = -divisor;
  if (dividend < divisor) return 0;
  let num = 0;
  while (dividend >= divisor) {
    dividend -= divisor;
    num++;
  }
  if (isNegative) num = -num;
  return num;
}
