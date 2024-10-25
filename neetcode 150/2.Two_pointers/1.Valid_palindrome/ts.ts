function isPalindrome(s: string): boolean {
    const strArr:string[] = [];
    for(let i = 0; i < s.length; i++) {
      const char = s[i].toLowerCase();
      if(char.match(/[a-z0-9]/)) {
        strArr.push(char);
      }
      
    }
    let res = true;
    for(let i = 0; i < strArr.length / 2; i++) {
      if(strArr[i] !== strArr[strArr.length - i - 1]) {
        res = false;
        break;
      }
    }
    return res;
};