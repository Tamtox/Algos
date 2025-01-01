function rotate(nums: number[], k: number): void {
  let offset = k;
  if (k >= nums.length) {
    offset = k % nums.length;
  }
  const copy = [...nums];
  for (let i = 0; i < nums.length; i++) {
    let newIndex = i + offset;
    if (newIndex >= nums.length) {
      newIndex = newIndex - nums.length;
    }
    console.log(newIndex);
    nums[newIndex] = copy[i];
  }
}
