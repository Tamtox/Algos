

function isValid(s: string): boolean {
    const len = s.length;
    if(len %2 !== 0) return false;
    const stack: string[] = [];
    for(let i = 0; i < len; i++) {
      const char = s[i];
      if(char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else {
        if(char === ')' || char === '}' || char === ']') {
          if(char === ')') {
            if(stack[stack.length - 1] !== '(') return false;
            else stack.pop();
          } else if(char === ']') {
            if(stack[stack.length - 1] !== '[') return false;
            else stack.pop();
          } else {
            if(stack[stack.length - 1] !== '{') return false;
            else stack.pop();
          }
        } else {
          return false;
        }
      }
    }
    if(stack.length > 0) return false;
    return true;
};