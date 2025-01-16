// Merge Sort - is a Divide and Conquer algorithm.
// It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.

// Sort in place
function mergeInPlace(
  arr: number[],
  left: number,
  mid: number,
  right: number
): void {
  const n1 = mid - left + 1;
  const n2 = right - mid;
  // Create temp arrays
  const LeftArray = new Array(n1);
  const RightArray = new Array(n2);
  // Copy data to temp arrays L[] and R[]
  for (let i = 0; i < n1; i++) LeftArray[i] = arr[left + i];
  for (let j = 0; j < n2; j++) RightArray[j] = arr[mid + 1 + j];
  let i = 0,
    j = 0;
  let k = left;
  // Merge the temp arrays back into arr[left..right]
  while (i < n1 && j < n2) {
    if (LeftArray[i] <= RightArray[j]) {
      arr[k] = LeftArray[i];
      i++;
    } else {
      arr[k] = RightArray[j];
      j++;
    }
    k++;
  }
  // Copy the remaining elements of L[], if there are any
  while (i < n1) {
    arr[k] = LeftArray[i];
    i++;
    k++;
  }
  // Copy the remaining elements of R[], if there are any
  while (j < n2) {
    arr[k] = RightArray[j];
    j++;
    k++;
  }
}

function mergeSortInPlace(arr: number[], start: number, end: number): void {
  if (start >= end) {
    return;
  }
  const mid = Math.floor((start + end) / 2);
  mergeSortInPlace(arr, start, mid);
  mergeSortInPlace(arr, mid + 1, end);
  mergeInPlace(arr, start, mid, end);
}

// Sort using extra space
function merge<T>(left: T[], right: T[]): T[] {
  const result: T[] = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
}

function mergeSort<T>(array: T[]): T[] {
  if (array.length <= 1) {
    return array; // Base case: array with 0 or 1 element is already sorted
  }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}
