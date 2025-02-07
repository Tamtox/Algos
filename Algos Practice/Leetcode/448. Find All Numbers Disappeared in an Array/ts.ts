function merge(nums: number[], left: number, mid: number, right: number) {
  const leftLen = mid - left + 1;
  const rightLen = right - mid;
  const leftArr = new Array(leftLen);
  const rightArr = new Array(rightLen);
  for (let i = 0; i < leftLen; i++) {
    leftArr[i] = nums[left + i];
  }
  for (let i = 0; i < rightLen; i++) {
    rightArr[i] = nums[mid + 1 + i];
  }
  let i = 0;
  let j = 0;
  let index = left;
  while (i < leftLen && j < rightLen) {
    if (leftArr[i] <= rightArr[j]) {
      nums[index] = leftArr[i];
      i++;
    } else {
      nums[index] = rightArr[j];
      j++;
    }
    index++;
  }
  while (i < leftLen) {
    nums[index] = leftArr[i];
    i++;
    index++;
  }
  while (j < rightLen) {
    nums[index] = rightArr[j];
    j++;
    index++;
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

function findDisappearedNumbers(nums: number[]): number[] {
  mergeSort(nums, 0, nums.length - 1);
  const result: number[] = [];
  let duplicates = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      if (nums[i] !== 1) {
        for (let j = 1; j < nums[i]; j++) {
          result.push(j);
        }
      }
    } else {
      if (nums[i] - nums[i - 1] > 1) {
        for (let j = nums[i - 1] + 1; j < nums[i]; j++) {
          result.push(j);
        }
      } else if (nums[i] - nums[i - 1] === 0) {
        duplicates++;
      }
    }
  }
  if (result.length === 0 && duplicates > 0) {
    let item = nums[nums.length - 1] + 1;
    for (let i = 0; i < duplicates; i++) {
      result.push(item);
      item++;
    }
  } else {
    if (nums.length > 2 && nums[nums.length - 1] === nums[nums.length - 2]) {
      result.push(nums[nums.length - 1] + 1);
    }
  }
  return result;
}
