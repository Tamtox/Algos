// Prefix sum - is a way to speed up range queries. It is a way to store the cumulative sum of the elements in an array.
// For example, if we have an array [1, 2, 3, 4, 5], the prefix sum array would be [1, 3, 6, 10, 15].

const calculateSum = (arr: number[]): number[] => {
  let sum = 0;
  const prefixSum = [sum];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    prefixSum.push(sum);
  }
  return prefixSum;
};
