type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (expected: any) => {
      if(val === expected) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (expected: any) => {
      if(val !== expected) {
        return true;
      } else {
        throw new Error("Equal");
      }
  }
}
}