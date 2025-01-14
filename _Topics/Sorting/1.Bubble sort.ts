// Bubble sort - continuously swaps adjacent elements if they are in the wrong order
// Time complexity: O(n^2)

const bubbleSort = (arr: number[]): void => {
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};
