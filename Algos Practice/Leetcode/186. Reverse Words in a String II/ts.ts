/**
 Do not return anything, modify s in-place instead.
 */
function reverseWords(s: string[]): void {
  let leftStart = 0;
  let leftEnd = 0;
  let rightStart = s.length - 1;
  let rightEnd = s.length - 1;
  let leftWord: string[] = [];
  let leftWordReady = false;
  let rightWord: string[] = [];
  let rightWordReady = false;
  while (leftEnd <= rightStart) {
    if (leftWordReady && rightWordReady) {
      // Swap
      s = rightWord.concat(s.slice(leftEnd + 1, rightStart), leftWord);
      leftEnd++;
      leftStart = leftEnd;
      rightStart--;
      rightEnd = rightStart;
      leftWord = [];
      rightWord = [];
      leftWordReady = false;
      rightWordReady = false;
    }
    if (s[leftStart] !== " ") {
      leftEnd = leftStart;
      while (leftEnd < s.length) {
        if (s[leftEnd + 1] === " ") {
          break;
        }
        leftEnd++;
      }
      leftWord = s.slice(leftStart, leftEnd + 1);
      leftWordReady = true;
    } else {
      leftStart++;
    }
    if (s[rightEnd] != " ") {
      rightStart = rightEnd;
      while (rightStart >= 0) {
        if (s[rightStart - 1] === " ") {
          break;
        }
        rightStart--;
      }
      rightWord = s.slice(rightStart, rightEnd + 1);
      rightWordReady = true;
    } else {
      rightEnd--;
    }
  }
}
