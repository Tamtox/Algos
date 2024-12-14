function myAtoi(s: string): number {
  let isNegative = false;
  let signEncountered = false;
  let leadingZeros = false;
  let result = 0;
  let numStarted = false;
  const nums = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
  };
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (nums[char] !== undefined) {
      if (char === "0") {
        if (numStarted) {
          numStarted = true;
          result = result === 0 ? nums[char] : result * 10 + nums[char];
        } else {
          leadingZeros = true;
        }
      } else {
        numStarted = true;
        result = result === 0 ? nums[char] : result * 10 + nums[char];
      }
    } else {
      if (char === "+" || char === "-") {
        if (leadingZeros) {
          return 0;
        }
        if (signEncountered) {
          if (numStarted) {
            continue;
          } else {
            return 0;
          }
        }
        numStarted = true;
        signEncountered = true;
        if (char === "-") {
          isNegative = true;
        }
        continue;
      } else if (char === " ") {
        if (leadingZeros) {
          break;
        }
        if (numStarted) {
          break;
        }
      } else {
        break;
      }
    }
  }
  if (isNegative) {
    result = -result;
  }
  const maxInt = 2147483647;
  if (result > maxInt) {
    result = maxInt;
  }
  if (result < -maxInt) {
    result = -maxInt + -1;
  }
  return result;
}
