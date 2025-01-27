function test(obj: { [key: string]: string }) {
  obj = {
    name: "Joe",
  };
}

function call() {
  let obj = { name: "Alan" };
  test(obj);
  console.log(obj);
}

call();
