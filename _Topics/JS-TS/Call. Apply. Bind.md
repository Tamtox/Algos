- Call, Apply, Bind - are used to bind a function to an object this context

```js
// Call - calls a function with a given this value and arguments provided individually
function greet() {
  return `Hello, ${this.name}!`;
}
const person = { name: 'John' };
console.log(greet.call(person)); // Hello, John!
// Apply - calls a function with a given this value and arguments provided as an array
function greet(greeting) {
  return `${greeting}, ${this.name}!`;
}
const person = { name: 'John' };
console.log(greet.apply(person, ['Hello'])); // Hello, John!
// Bind - creates a new function that, when called, has its this keyword set to the provided value
function greet() {
  return `Hello, ${this.name}!`;
}
const person = { name: 'John' };
const greetPerson = greet.bind(person);
```