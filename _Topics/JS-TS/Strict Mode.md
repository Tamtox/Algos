- Strict Mode - is ES 5 feature, which allows you to place a program or a function in a strict operating context. That will not allow you to use some of the features of the language that are considered to be error-prone or unsafe
- The strict mode is declared by adding the string literal `"use strict";` at the beginning of a script or a function
- Example of using strict mode:
  ```js
  "use strict";
  // Using variables (objects) without declaring them will cause an error
  x = 3.14;
  // Deleting a variable, object or function is not allowed
  var y = 3.14;
  delete y;
  // Duplicating a parameter name is not allowed
  function myFunction(x, y, x) { }
  // Octal numeric literals are not allowed
  var x = 010;
  // Octal escape characters are not allowed
  var x = "\010";
  // Writing to a read-only property is not allowed
  var obj = {};
  Object.defineProperty(obj, "x", { value: 0, writable: false });
  obj.x = 3.14;
  // Writing to a get-only property is not allowed
  var obj = { get x() { return 0; } };
  obj.x = 3.14;
  // Deleting an undeletable property is not allowed
  delete Object.prototype;
  // Using `eval` is not allowed
  eval("var x = 3.14;");
  // Using `arguments` is not allowed
  function myFunction() {
    arguments++;
  }
  // Using `with` is not allowed
  with (Math) { x = cos(2); }
  // Using `this` in a strict mode will return `undefined`
  function myFunction() {
    return this;
  }

  ```