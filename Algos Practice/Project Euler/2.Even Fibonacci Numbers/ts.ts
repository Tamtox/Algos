function fiboEvenSum(n) {
  const fib = [1,1];
  let sum = 0;
  for(let i = 2; i < n; i++) {
    const newNum = fib[i - 1] + fib[i - 2];
    if(newNum > n) {
      break;
    }
    fib.push(newNum);
    if(newNum % 2 === 0) {
      sum += newNum;
    }
  }
  return sum;
}