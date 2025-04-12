# JavaScript this Keyword

The this keyword refers to the context in which a function is executed. It can vary depending on how a function is called.

## 🔹 Default Binding (Global Context)

```js
console.log(this); // In browsers, this is the window object
```

- In the global scope, this refers to the global object (window in browsers, global in Node.js).

- In strict mode ('use strict'), this is undefined.

## 🔹 Implicit Binding (Object Method)

```js
const user = {
  name: 'Leo',
  greet() {
    console.log(this.name);
  },
};
user.greet(); // "Leo"
```

- When a function is called as a method of an object, this refers to the object to the left of the dot.

## 🔹 Explicit Binding (call, apply, bind)

```js
function sayName() {
  console.log(this.name);
}
const person = { name: 'Sam' };
sayName.call(person); // "Sam"
sayName.apply(person); // "Sam"
const boundFn = sayName.bind(person);
boundFn(); // "Sam"
```

- call() and apply() invoke a function with a specific this.

- bind() returns a new function with bound this.

### Summary

| Method   | What it does                      | When it runs             | How arguments are passed          |
| -------- | --------------------------------- | ------------------------ | --------------------------------- |
| .call()  | Sets this, calls the function     | Immediately              | Individually (fn.call(this, a))   |
| .apply() | Sets this, calls the function     | Immediately              | As an array (fn.apply(this, [a])) |
| .bind()  | Sets this, returns a new function | When you invoke it later | Individually (fn.bind(this)(a))   |

## 🔹 Arrow Functions

```js
const obj = {
  name: 'Zoe',
  greet: () => console.log(this.name),
};
obj.greet(); // undefined (or global this)
```

- Arrow functions don’t have their own this.

- They inherit this from the enclosing scope (lexical this).

- Useful in callbacks or when you want to preserve context.

## 🔹 Constructors & Classes

```js
function Car(make) {
  this.make = make;
}
const honda = new Car('Honda');
console.log(honda.make); // "Honda"
```

- When used with new, this refers to the newly created object.

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
```

## 🔹 Losing Context

```js
const obj = {
  name: 'Jamie',
  greet() {
    console.log(this.name);
  },
};

const greet = obj.greet;
greet(); // undefined (or window.name in browsers)
```

- When a method is assigned to a variable or passed as a callback, it loses its context unless explicitly bound.

## 🧠 Pro Tips

- Use arrow functions when you need lexical this (e.g., inside setTimeout, or array methods).

- Use .bind() or arrow functions in class components (e.g., React) to avoid losing context.

- Always ask: "What is to the left of the dot when the function is called?"
