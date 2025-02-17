function asteroidCollision(asteroids: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0) {
      result.push(asteroids[i]);
    } else {
      let isValid = true;
      while (isValid) {
        if (result.length < 1) {
          result.push(asteroids[i]);
          isValid = false;
        } else {
          if (result[result.length - 1] > 0) {
            if (result[result.length - 1] + asteroids[i] === 0) {
              result.pop();
              isValid = false;
            } else if (result[result.length - 1] + asteroids[i] > 0) {
              isValid = false;
            } else {
              result.pop();
            }
          } else {
            result.push(asteroids[i]);
            isValid = false;
          }
        }
      }
    }
  }
  return result;
}
