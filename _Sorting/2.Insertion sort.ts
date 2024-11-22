// Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.
// Time complexity: O(n^2)

const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    const key = arr[i];
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};
