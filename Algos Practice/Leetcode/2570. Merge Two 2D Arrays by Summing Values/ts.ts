function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const result: number[][] = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    const item1 = nums1[i];
    const item2 = nums2[j];
    if (item1[0] === item2[0]) {
      result.push([item1[0], item1[1] + item2[1]]);
      i++;
      j++;
    } else if (item1[0] < item2[0]) {
      result.push(item1);
      i++;
    } else {
      result.push(item2);
      j++;
    }
  }
  while (i < nums1.length) {
    result.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    result.push(nums2[j]);
    j++;
  }
  return result;
}
