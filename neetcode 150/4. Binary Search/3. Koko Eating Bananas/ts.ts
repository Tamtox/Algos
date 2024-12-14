function minEatingSpeed(piles: number[], h: number): number {
  const sorted = piles.sort((x, y) => x - y);
  let min = sorted[sorted.length - 1];
}
