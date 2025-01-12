type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  if (arr.length < 1) {
    return [];
  }
  if (arr.length <= size) {
    return [arr];
  }
  const result: Obj[][] = [];
  let i = 0;
  while (i < arr.length) {
    result.push(arr.slice(i, i + size));
    i = i + size;
  }
  return result;
}
