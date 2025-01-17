type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  if (n === 0) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      const subArr = flat(item, n - 1);
      arr = arr.slice(0, i).concat(subArr, arr.slice(i + 1));
      i = i + subArr.length - 1;
    }
  }
  return arr;
};
