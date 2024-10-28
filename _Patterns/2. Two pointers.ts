// Two pointers - 

export const binarySearch = (arr: number[], target: number): number => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

export const isPalindrome = (s: string): boolean => {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!s[left].match(/[a-zA-Z0-9]/)) {
      left++;
    } else if (!s[right].match(/[a-zA-Z0-9]/)) {
      right--;
    } else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}