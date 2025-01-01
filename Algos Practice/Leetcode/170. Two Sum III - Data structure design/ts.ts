class TwoSum {
  arr: number[];
  constructor() {
    this.arr = [];
  }

  add(number: number): void {
    const arr = this.arr;
    if (arr.length === 0) {
      arr.push(number);
    } else {
      if (number <= arr[0]) {
        arr.unshift(number);
      } else if (number >= arr[arr.length - 1]) {
        arr.push(number);
      } else {
        let index = -1;
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (arr[mid] === number) {
            index = mid + 1;
            break;
          } else if (arr[mid] > number) {
            if (arr[mid - 1] <= number) {
              index = mid;
              break;
            }
            right = mid - 1;
          } else {
            if (arr[mid + 1] >= number) {
              index = mid + 1;
              break;
            }
            left = mid + 1;
          }
        }
        if (index > -1) {
          this.arr = arr
            .slice(0, index)
            .concat([number], arr.slice(index, arr.length));
        }
      }
    }
  }

  find(value: number): boolean {
    const arr = this.arr;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[left] + arr[right] > value) {
        right--;
      } else if (arr[left] + arr[right] < value) {
        left++;
      } else {
        return true;
      }
    }
    return false;
  }
}

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
