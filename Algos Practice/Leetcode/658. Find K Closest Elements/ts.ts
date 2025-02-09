function findClosestElements(arr: number[], k: number, x: number): number[] {
  if (x <= arr[0]) {
    return arr.slice(0, k);
  }
  if (x >= arr[arr.length - 1]) {
    return arr.slice(arr.length - k);
  }
  let left = 0;
  let right = arr.length - 1;
  let index = -1;
  let isPresent = false;
  if (index < 0) {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === x) {
        index = mid;
        isPresent = true;
        break;
      } else if (arr[mid] > x) {
        if (arr[mid - 1] < x) {
          index = mid;
          break;
        }
        right = mid - 1;
      } else {
        if (arr[mid + 1] > x) {
          index = mid;
          break;
        }
        left = mid + 1;
      }
    }
  }
  if (isPresent) {
    k--;
  }
  let leftOffset = Math.ceil(k / 2);
  let rightOffset = Math.floor(k / 2);
  return arr.slice(
    Math.max(index - leftOffset, 0),
    Math.min(index + rightOffset, arr.length)
  );
}
