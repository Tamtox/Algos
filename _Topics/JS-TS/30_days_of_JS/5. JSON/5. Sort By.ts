type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number;

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  const cpy = JSON.parse(JSON.stringify(this));
  const key = fn(cpy[0]);
  console.log(key);
  return cpy;
}
