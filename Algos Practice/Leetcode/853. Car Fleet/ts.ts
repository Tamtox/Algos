function carFleet(target: number, position: number[], speed: number[]): number {
  let items = position.map((pos, index) => {
    return {
      pos: pos,
      speed: speed[index],
      time: (target - pos) / speed[index],
    };
  });
  items.sort((x, y) => x.pos - y.pos);
  let result = 0;
  for (let i = items.length - 1; i > 0; i--) {
    if (items[i].time < items[i - 1].time) {
      result++;
    } else {
      items[i - 1] = items[i];
    }
  }
  if (items.length > 0) {
    result++;
  }
  return result;
}
