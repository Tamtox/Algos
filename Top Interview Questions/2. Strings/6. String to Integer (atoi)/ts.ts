function myAtoi(s: string): number {
  let numStarted = false;
  let isNegative = false;
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const charCode = char.charCodeAt(0) - 48;
    if (numStarted) {
      if (char === "0") {
        continue;
      }
      if (charCode < 0 || charCode > 9) {
        break;
      }
      num = num * 10 + charCode;
    } else {
      if (char === "0" || char === " ") {
        continue;
      } else {
        if (charCode < 0 || charCode > 9) {
          return 0;
        }
        numStarted = true;
        if (char === "-" || char === "+") {
          isNegative = char === "-" ? true : false;
        }
        num = charCode;
      }
    }
  }
  return num;
}
