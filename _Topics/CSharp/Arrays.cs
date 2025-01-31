class Arrays {
  public static Arrays() {
    // Declare an array of integers with a length
    int[] nums1 = new int[5];
    // Declare an array of integers with elements
    int[] nums2 = new int[] { 1, 2, 3, 4, 5 };
    int[] nums3 = { 1, 2, 3, 4, 5 };
    // 2D array
    int[,] nums4 = new int[2, 3];
    // Jagged array
    int[][] nums5 = {
      new int[3],
      new int[2]
    }
    nums5[0] = new int[3];
    nums5[1] = new int[2];
    // Sort an array
    Array.Sort(nums3);
    // Reverse an array
    Array.Reverse(nums3);
    // Find the index of an element in an array
    int index = Array.IndexOf(nums3, 3);
    // Copy an array
    int[] nums6 = new int[10];
    Array.Copy(nums3, nums6, 5);
    // Concat arrays
    int[] nums7 = {1, 2, 3};
    int[] nums8 = {4, 5, 6};
    int[] nums9 = nums7.Concat(nums8).ToArray();
    // Expand an array
    Array.Resize(ref nums6, 15);
    // Clear an array
    Array.Clear(nums6, 0, 15);

  }
}