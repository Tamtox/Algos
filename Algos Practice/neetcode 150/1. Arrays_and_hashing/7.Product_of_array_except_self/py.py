class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        leftToRight = []
        rightToLeft = []
        mult = 1
        for num in nums:
          leftToRight.append(mult)
          mult*=num
        mult = 1
        for num in reversed(nums):
          rightToLeft.insert(0,mult)
          mult*=num
        result = []
        for i in range(len(nums)):
          if i == 0 :
            result.append(rightToLeft[i])
          elif i == len(nums)-1:
            result.append(leftToRight[i])
          else:
            result.append(leftToRight[i]*rightToLeft[i])
        return result