function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    for(const num of nums) {
      const item = map.get(num);
      map.set(num, item ? item + 1 : 1)
    }
    const arr = Array.from(map.entries());
    arr.sort((x,y) => y[1] - x[1]);
    return arr.slice(0, k).map(x => x[0]);
};