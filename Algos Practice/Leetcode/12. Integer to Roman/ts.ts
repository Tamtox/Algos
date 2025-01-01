const nums = {
  "0": "",
  "1": "I",
  "2": "II",
  "3": "III",
  "4": "IV",
  "5": "V",
  "6": "VI",
  "7": "VII",
  "8": "VIII",
  "9": "IX",
};

const tens = {
  "0": "",
  "1": "X",
  "2": "XX",
  "3": "XXX",
  "4": "XL",
  "5": "L",
  "6": "LX",
  "7": "LXX",
  "8": "LXXX",
  "9": "XC",
};

const hundreds = {
  "0": "",
  "1": "C",
  "2": "CC",
  "3": "CCC",
  "4": "CD",
  "5": "D",
  "6": "DC",
  "7": "DCC",
  "8": "DCCC",
  "9": "CM",
};

const thousands = {
  "0": "",
  "1": "M",
  "2": "MM",
  "3": "MMM",
};

function intToRoman(num: number): string {
  let result = "";
  const numStr = num.toString();
  const len = numStr.length;
  let grade = 1;
  for (let i = 0; i < len; i++) {
    const char = numStr[len - 1 - i];
    if (grade === 1) {
      result = `${nums[char]}`;
    } else if (grade === 10) {
      result = `${tens[char]}${result}`;
    } else if (grade === 100) {
      result = `${hundreds[char]}${result}`;
    } else {
      result = `${thousands[char]}${result}`;
    }
    grade *= 10;
  }
  return result;
}
