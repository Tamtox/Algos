function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const numsCpy = [...nums1];
  let indexM = 0;
  let indexN = 0;
  let index = 0;
  const len = m + n;
  while (index < len) {
    if (indexM >= m) {
      nums1[index] = nums2[indexN];
      indexN++;
      index++;
      continue;
    }
    if (indexN >= n) {
      nums1[index] = numsCpy[indexM];
      indexM++;
      index++;
      continue;
    }
    const num1 = numsCpy[indexM];
    const num2 = nums2[indexN];
    if (num1 === num2) {
      nums1[index] = numsCpy[indexM];
      indexM++;
      index++;
      nums1[index] = nums2[indexN];
      indexN++;
    } else if (num1 < num2) {
      nums1[index] = numsCpy[indexM];
      indexM++;
    } else {
      nums1[index] = nums2[indexN];
      indexN++;
    }
    index++;
  }
}
