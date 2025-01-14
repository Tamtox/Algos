
const bubbleSort = (arr: number[]) => {
  // Compares adjacent elements and swaps them if they are in the wrong order
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = 0; j < arr.length; j++) {
      const num2 = arr[j];
      if(num2 < arr[min]) min = j;
    }
    if(i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
}


const selectionSort = (arr:number[]) => {
  // Searches through array and swaps smallest number with starting number
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min]) min = j;
    }
    if(i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
}

const insertionSort = (arr: number[]) => {
  // Builds the final sorted array one item at a time
  for(let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
}
