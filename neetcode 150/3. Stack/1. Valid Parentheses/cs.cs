public class Solution {
    public bool IsValid(string s) {
        var len = s.Length;
        if(len % 2 != 0) return false;
        var stack = new Stack<char>();
        for(var i = 0; i < len; i++) {
            var c = s[i];
            if(c == '(' || c == '[' || c == '{') {
                stack.Push(c);
            } else {
                if(stack.Count == 0) return false;
                var top = stack.Pop();
                if(c == ')' && top != '(') return false;
                if(c == ']' && top != '[') return false;
                if(c == '}' && top != '{') return false;
            }
        }
        if(stack.Count > 0) return false;
        return true;
    }
}