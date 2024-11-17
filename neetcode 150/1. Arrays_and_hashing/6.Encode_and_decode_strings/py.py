
class Solution:
    def encode(self, strs: List[str]) -> str:
      if not strs: return ""
      res = ''
      for str in strs:
        res += res + '/' + str
      return res
    def decode(self, s: str) -> List[str]:
      arr = []
      subStr = ''
      for i in range(len(s)):
        if s[i] == '/':
          arr.append(subStr)
          subStr = ''
        else:
          subStr += s[i]
