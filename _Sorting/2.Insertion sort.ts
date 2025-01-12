// Time complexity: O(n^2)
// Selection sort goes through the array and inserts each element in its correct position in the sorted part of the array

const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    let left = 0;
    let right = i - 1;
    let pos = -1;
    if (arr[left] >= num) {
      pos = left;
    }
    if (arr[right] <= num) {
      pos = right + 1;
    }
    if (pos === -1) {
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === num) {
          pos = mid;
          break;
        } else if (arr[mid] > num) {
          if (arr[mid - 1] <= num) {
            pos = mid - 1;
            break;
          }
          right = mid - 1;
        } else {
          if (arr[mid + 1] >= num) {
            pos = mid + 1;
            break;
          }
          left = mid + 1;
        }
      }
    }
    arr.splice(pos, 0, num);
    arr.splice(i + 1, 1);
  }
  return arr;
};
