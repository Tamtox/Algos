function characterReplacement(s: string, k: number): number {}

function test1(obj) {
  obj = { a: 1 };
  return obj;
}

function test() {
  const obj = { a: 2 };
  test1(obj);
  console.log(obj);
}
test();
