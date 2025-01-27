public class Solution {
    public int Candy(int[] ratings) {
        int result = ratings.Length;
        if(ratings.Length < 2) {
          return result;
        }
        if(ratings[0] > ratings[1]) {
          result++;
        }
        if(ratings[ratings.Length - 1] > ratings[ratings.Length - 2]) {
          result++;
        }
        for(int i = 1; i < ratings.Length - 1; i++) {
          if(ratings[i] > ratings[i - 1] || ratings[i] > ratings[i + 1]) {
            result++;
          }
        }
        return result;
    }
}