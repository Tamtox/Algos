// Decorator - is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.
// Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Arguments: ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Result: ${result}`);
    return result;
  };
  return descriptor;
}

class DecoratorExample {
  @log
  sum(a: number, b: number): number {
    return a + b;
  }
}
