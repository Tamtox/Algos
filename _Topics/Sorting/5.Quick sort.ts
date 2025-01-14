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

function partition(arr: number[], low: number, high: number) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

function swap(arr: number[], i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSortInPlace(arr: number[], low: number, high: number): void {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSortInPlace(arr, low, pi - 1);
    quickSortInPlace(arr, pi + 1, high);
  }
}
