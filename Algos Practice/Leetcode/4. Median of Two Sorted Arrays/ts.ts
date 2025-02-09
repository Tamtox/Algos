function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const arr = new Array(nums1.length + nums2.length);
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      arr[k] = nums1[i];
      i++;
    } else {
      arr[k] = nums2[j];
      j++;
    }
    k++;
  }
  while (i < nums1.length) {
    arr[k] = nums1[i];
    i++;
    k++;
  }
  while (j < nums2.length) {
    arr[k] = nums2[j];
    j++;
    k++;
  }
  const mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[mid] + arr[mid - 1]) / 2;
  } else {
    return arr[mid];
  }
}
