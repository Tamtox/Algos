// Merge Sort - is a Divide and Conquer algorithm.
// It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.

function mergeInPlace(
  arr: number[],
  start: number,
  mid: number,
  end: number
): void {
  let i = start; // Start of the first half
  let j = mid + 1; // Start of the second half
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

function mergeSortInPlace(arr: number[], start: number, end: number): void {
  if (start >= end) {
    return;
  }
  // Find the middle point
  const mid = Math.floor((start + end) / 2);
  // Recursively sort the first and second halves
  mergeSortInPlace(arr, start, mid);
  mergeSortInPlace(arr, mid + 1, end);

  // Merge the sorted halves
  mergeInPlace(arr, start, mid, end);
}
