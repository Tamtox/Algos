// Bubble sort - uses nested loops to continuously swap elements until the array is sorted
// Time complexity: O(n^2)

const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let swapIndex = -1;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[i]) {
        swapIndex = j;
      }
    }
    if (swapIndex > -1) {
      const temp = arr[swapIndex];
      arr[swapIndex] = arr[swapIndex + 1];
      arr[swapIndex + 1] = temp;
    }
  }
  return arr;
};
