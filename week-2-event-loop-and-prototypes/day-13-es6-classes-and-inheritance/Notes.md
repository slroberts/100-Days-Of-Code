# 🏛️ JavaScript Classes

JavaScript class syntax is a cleaner way to create objects and deal with inheritance. It's syntactic sugar over the existing prototype-based inheritance.

## 🔧 Creating a Class

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Method
  area() {
    return this.height * this.width;
  }
}
```

- constructor() ➡️ special method for initializing new objects

- Methods defined inside the class are added to the prototype

## 🧬 Inheritance with extends

```js
class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Calls parent constructor
  }
}
```

- extends ➡️ allows a class to inherit from another

- super() ➡️ calls the parent class's constructor

## 💡 Class Features

- ✅ Supports getters/setters

```js
get area() {
  return this.calcArea();
}
```

- ✅ Can use static methods

```js
static describe() {
  return "A shape class";
}
```

- ✅ Works with computed property names

```js
class Weird {
  ['say' + 'Hi']() {
    console.log('Hi!');
  }
}
```

## 🧱 Class Expressions

Classes can also be anonymous or named expressions:

```js
let MyClass = class {
  constructor(name) {
    this.name = name;
  }
};
```

## ⚠️ Key Things to Remember

- Classes are not hoisted like functions 🚫

- Methods inside classes are non-enumerable 🕵️

- Always use super() before accessing this in a subclass 🔑

- Classes run in strict mode by default 🧼
