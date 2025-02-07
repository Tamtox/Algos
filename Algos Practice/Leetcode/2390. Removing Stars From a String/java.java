
class Solution {
  public String removeStars(String s) {
      StringBuilder chars = new StringBuilder();
      for(int i = 0; i < s.length(); i++) {
        if(s.charAt(i) == '*') {
          chars.deleteCharAt(chars.length() - 1);
        } else {
          chars.append(s.charAt(i));
        }
      }
      return chars.toString();
  }
}