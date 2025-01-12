type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  let val1 = await promise1;
  let val2 = await promise2;
  return new Promise((res, rej) => {
    res(val1 + val2);
  });
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
