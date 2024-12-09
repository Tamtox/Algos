function containsNearbyDuplicateSlow(nums: number[], k: number): boolean {
  const map = new Map<number, number[]>();
  for (let i = 0; i < nums.length; i++) {
    const arr = map.get(nums[i]);
    if (arr) {
      arr.push(i);
    } else {
      map.set(nums[i], [i]);
    }
  }
  for (const arr of map.values()) {
    for (let i = 0; i < arr.length; i++) {
      const index1 = arr[i];
      for (let j = i + 1; j < arr.length; j++) {
        const index2 = arr[j];
        if (Math.abs(index1 - index2) <= k) {
          return true;
        }
      }
    }
  }
  return false;
}
