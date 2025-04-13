# 🔁 What is a Prototype?

In JavaScript, every object has an internal link to another object called its prototype. This link is used when trying to access properties or methods that don’t exist directly on the object.

```js
const obj = {
  greet() {
    console.log('Hello');
  },
};

const anotherObj = Object.create(obj);
anotherObj.greet(); // "Hello"
```

- anotherObj doesn’t have a greet method, so JS looks up the prototype chain and finds it in obj.

## 🧬 Prototype Chain

Think of it like a chain of fallbacks. If a property isn’t found on the object itself, JavaScript keeps checking the prototype chain until it finds it — or hits null.

```js
console.log(anotherObj.toString()); // Found in Object.prototype
```

If you go deep enough, all objects eventually link up to Object.prototype, the root object.

```js
Object.getPrototypeOf(Object.prototype); // null
```

## 🔧 Function Prototypes

When you create a function, it automatically gets a prototype property:

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const alice = new Person('Alice');
alice.sayHi(); // "Hi, I'm Alice"
```

Here’s what’s happening:

    - alice is an instance of Person.

    - alice.__proto__ === Person.prototype.

    - So when you call alice.sayHi(), it’s found in Person.prototype.

## 🔄 Prototype Inheritance Example

You can manually set up inheritance between objects:

```js
const animal = {
  eats: true,
};

const rabbit = Object.create(animal);
rabbit.hops = true;

console.log(rabbit.eats); // true (inherited)
console.log(rabbit.hops); // true (own property)
```

## ⚠️ Gotchas

- Don’t confuse prototype (on constructor functions) with **proto** (on objects).

- Arrow functions don’t have their own this, so don’t use them in prototypes.

- Avoid extending native prototypes like Array.prototype unless you really know what you’re doing.
