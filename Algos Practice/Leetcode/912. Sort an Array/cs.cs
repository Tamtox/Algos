public class Solution
{
    private void merge(int[] nums, int left, int mid, int right)
    {
        int leftLen = mid - left + 1;
        int rightLen = right - mid;
        int[] leftArr = new int[leftLen];
        int[] rightArr = new int[rightLen];
        for (int k = 0; k < leftLen; k++)
        {
            leftArr[k] = nums[left + k];
        }
        for (int k = 0; k < rightLen; k++)
        {
            rightArr[k] = nums[mid + k + 1];
        }
        int i = 0;
        int j = 0;
        int index = left;
        while (i < leftLen && j < rightLen)
        {
            if (leftArr[i] <= rightArr[j])
            {
                nums[index] = leftArr[i];
                i++;
            }
            else
            {
                nums[index] = rightArr[j];
                j++;
            }
            index++;
        }
        while(i < leftLen)
        {
            nums[index] = leftArr[i];
            i++;
            index++;
        }
        while (j < rightLen)
        {
            nums[index] = rightArr[j];
            j++;
            index++;
        }
    }
    private void mergeSort(int[] nums, int left, int right)
    {
        if (left >= right)
        {
            return;
        }
        int mid = (left + right) / 2;
        mergeSort(nums, left, mid);
        mergeSort(nums, mid + 1, right);
        merge(nums, left, mid, right);
    }
    public int[] SortArray(int[] nums)
    {
        mergeSort(nums, 0, nums.Length - 1);
        return nums;
    }
}