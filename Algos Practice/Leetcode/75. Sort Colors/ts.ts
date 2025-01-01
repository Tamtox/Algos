function quickSort<T>(arr: T[]): T[] {
  if (arr.length < 2) {
    return arr; // Base case: arrays of 0 or 1 element are already sorted
  }
  const pivot = arr[arr.length - 1];
  const left: T[] = [];
  const right: T[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

function sortColors(nums: number[]): void {
  nums = quickSort<number>(nums);
  console.log(nums);
}

function quickSort(arr) {
  if (arr.length < 2) {
    return arr; // Base case: arrays of 0 or 1 element are already sorted
  }
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
