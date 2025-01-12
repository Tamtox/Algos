type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const result: ArrayType[] = [];
  const dict = new Map<number, number>();
  let index = 0;
  for (const item of arr1) {
    result.push(item);
    dict.set(item.id, index);
    index++;
  }
  for (const item of arr2) {
    const existing = dict.get(item.id);
    if (existing !== undefined) {
      const keys = Object.keys(item);
      for (const key of keys) {
        result[existing][key] = item[key];
      }
    } else {
      result.push(item);
    }
  }
  result.sort((x, y) => x.id - y.id);
  return result;
}
