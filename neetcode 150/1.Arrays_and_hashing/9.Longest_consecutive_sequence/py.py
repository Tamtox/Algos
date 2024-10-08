class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
      if len(nums) == 0:
        return 0
        numSet = set(nums)
        for num in nums:
          numSet.add(num)
        longestStreak = 1
        for num in numSet:
          if num - 1 not in numSet:
            currentNum = num
            currentStreak = 1
            while currentNum + 1 in numSet:
              currentNum += 1
              currentStreak += 1
            longestStreak = max(longestStreak, currentStreak)
        return longestStreak