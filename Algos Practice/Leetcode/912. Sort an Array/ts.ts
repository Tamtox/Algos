function merge(arr: number[], start: number, mid: number, end: number): void {
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      i++;
    } else {
      const value = arr[j];
      let index = j;
      while (index > i) {
        arr[index] = arr[index - 1];
        index--;
      }
      arr[i] = value;
      i++;
      mid++;
      j++;
    }
  }
}

function mergeSort(arr: number[], start: number, end: number) {
  if (start >= end) {
    return;
  }
  const mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
}

function sortArray(nums: number[]): number[] {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
}
