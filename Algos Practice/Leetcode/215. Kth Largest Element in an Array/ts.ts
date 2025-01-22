function merge(nums: number[], left: number, mid: number, right: number) {
  const leftLen = mid - left + 1;
  const rightLen = right - mid;
  const arrLeft = Array(leftLen);
  const arrRight = Array(rightLen);
  for (let i = 0; i < leftLen; i++) {
    arrLeft[i] = nums[left + i];
  }
  for (let i = 0; i < rightLen; i++) {
    arrRight[i] = nums[mid + 1 + i];
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

function findKthLargest(nums: number[], k: number): number {}
