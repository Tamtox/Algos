import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int [] res = {-1, -1};
        HashMap<Integer, Integer> dict = new HashMap<Integer , Integer>();
        for(int i = 0; i < nums.length; i++) {
          Integer item = dict.get(target - nums[i]);
          if(item != null) {
            res[0] = i;
            res[1] = item;
            return res;
          } else {
            dict.put(nums[i], i);
          }
        }
        return res;
    }
}

