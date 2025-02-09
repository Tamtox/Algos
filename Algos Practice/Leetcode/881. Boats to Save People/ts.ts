function numRescueBoats(people: number[], limit: number): number {
  people.sort((x, y) => x - y);
  let result = 0;
  let left = 0;
  let right = people.length - 1;
  while (left <= right) {
    if (people[right] === limit) {
      result++;
      right--;
      continue;
    }
    if (people[right] + people[left] === limit) {
      left++;
      right--;
      result++;
    } else if (people[right] + people[left] > limit) {
      right--;
      result++;
    } else {
      left++;
      right--;
      result++;
    }
  }
  return result;
}
