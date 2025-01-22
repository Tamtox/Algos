// Merge Sort - is a Divide and Conquer algorithm.
// It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.

// Sort in place
function merge(arr: number[], left: number, mid: number, right: number): void {
  // Calculate lengths of two subarrays
  const leftLength = mid - left + 1;
  const rightLength = right - mid;
  // Create temporary arrays
  const leftArr = new Array(leftLength);
  const rightArr = new Array(rightLength);
  // Copy data to temporary arrays
  for (let i = 0; i < leftLength; i++) {
    leftArr[i] = arr[left + i];
  }
  for (let i = 0; i < rightLength; i++) {
    rightArr[i] = arr[mid + 1 + i];
  }
  // Merge the temporary arrays back into arr[left..right]
  let i = 0; // Initial index of left subarray
  let j = 0; // Initial index of right subarray
  let k = left; // Initial index of merged subarray
  // Compare and merge elements from temp arrays back into original array
  while (i < leftLength && j < rightLength) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }
  // Copy remaining elements of leftArr[] if any
  while (i < leftLength) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }
  // Copy remaining elements of rightArr[] if any
  while (j < rightLength) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}

function mergeSort(arr: number[], left: number, right: number): void {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}
