interface Array<T> {
  groupBy(fn: (item: T) => string): Record<string, T[]>;
}

Array.prototype.groupBy = function (fn) {
  console;
  const obj = {};
  for (const item of this) {
    const key = fn(item);
    if (obj[key] !== undefined) {
      obj[key].push(item);
    } else {
      obj[key] = [item];
    }
  }
  return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
