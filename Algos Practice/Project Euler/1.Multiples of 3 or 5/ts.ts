function multiplesOf3Or5(number) {
  const mults:number[] = [];
  for(let i = 0; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      mults.push(i);
    }
  }
  return mults.reduce((acc, curr) => acc + curr, 0);
}