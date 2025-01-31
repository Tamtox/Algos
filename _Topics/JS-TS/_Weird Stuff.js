// Javascript does not reassign object passed as argument ---------------------------------------------------------
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
// Output: { a: 2 }

// Let and Var references ------------------------------------------------------------------------------------------
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Prints: 3, 3, 3 (not 0, 1, 2)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Prints: 0, 1, 2