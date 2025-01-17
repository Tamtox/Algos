// https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript
function createCounter(n: number): () => number {
    let count = n;
  return function() {
      return count++;
  }
}
