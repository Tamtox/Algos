function minEatingSpeed(piles: number[], h: number): number {
  const sortedPiles = piles.sort((a, b) => a - b);
  let left = 1;
  let right = sortedPiles[sortedPiles.length - 1];
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let hours = 0;
    for (let i = 0; i < sortedPiles.length; i++) {
      hours += Math.ceil(sortedPiles[i] / mid);
      if (hours > h) {
        break;
      }
    }
    if (hours > h) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
