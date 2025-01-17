type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  let callCount = 0;
  const dict = new Map<string, number>();
  return function (...args) {
    const key = [...args].toString();
    const item = dict.get(key);
    if (item !== undefined) {
      return item;
    } else {
      callCount++;
      const res = fn(...args);
      dict.set(key, res);
      return res;
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
