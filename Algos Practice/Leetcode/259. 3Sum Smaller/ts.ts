function merge(nums: number[], left: number, mid: number, right: number): void {
  const leftLen = mid - left + 1;
  const rightLen = right - mid;
  const leftArr = Array(leftLen);
  const rightArr = Array(rightLen);
  for (let i = 0; i < leftLen; i++) {
    leftArr[i] = nums[i + left];
  }
  for (let i = 0; i < rightLen; i++) {
    leftArr[i] = nums[i + mid + 1];
  }
  let i = 0;
  let j = 0;
  let k = left;
  while (i < leftLen && j < rightLen) {
    if (leftArr[i] <= rightArr[j]) {
      nums[k] = leftArr[i];
      i++;
    } else {
      nums[k] = rightArr[j];
      j++;
    }
    k++;
  }
  while (i < leftLen) {
    nums[k] = leftArr[i];
    i++;
    k++;
  }
  while (j < rightLen) {
    nums[k] = rightArr[j];
    j++;
    k++;
  }
}

function mergeSort(nums: number[], left: number, right: number) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  mergeSort(nums, left, mid);
  mergeSort(nums, mid + 1, right);
  merge(nums, left, mid, right);
}

function threeSumSmaller(nums: number[], target: number): number {
  mergeSort(nums, 0, nums.length);
}
