public class Solution {
    public int MaxArea(int[] height) {
        var left = 0;
        var right = height.Length - 1;
        var max = (right - left) * Math.Min(height[left], height[right]);
        while(left < right) {
            if(height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
            max = Math.Max(max, (right - left) * Math.Min(height[left], height[right]));
        }
        return max;
    }
}