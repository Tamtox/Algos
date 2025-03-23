const numsMap = {
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

function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  if (num1 === "1") {
    return num2;
  }
  if (num2 === "1") {
    return num1;
  }
  let result = "";
  return result;
}
