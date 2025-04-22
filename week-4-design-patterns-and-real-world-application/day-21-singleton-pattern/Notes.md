# Singleton Design Pattern

### Definition:

A singleton ensures a class has only one instance and provides a global point of access to it.

## Key Concepts:

- Why use it?
  To avoid multiple instances of a class (e.g., for configuration, caching, state management, or logging).

- Common use cases:

  - App settings

  - Database connections

  - Caches

  - Logging service

## Basic Implementation (Lazy Instantiation):

```js
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.data = 'I am the only instance';
    Singleton.instance = this;
  }

  getData() {
    return this.data;
  }
}

const a = new Singleton();
const b = new Singleton();

console.log(a === b); // true
```

- The class checks if an instance already exists before creating a new one.

- If it exists, it returns the existing instance.

## Module Pattern Singleton (using closures):

```js
const Singleton = (() => {
  let instance;

  function createInstance() {
    const obj = new Object('I am the instance');
    return obj;
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(a === b); // true
```

- Encapsulated with an IIFE.

- Private instance variable ensures only one object is ever created.

## ES6 Module Singleton (Recommended)

Since ES6 modules are singleton by default (each import returns the same instance), you can do:

```js
// logger.js
class Logger {
  log(msg) {
    console.log(`[LOG]: ${msg}`);
  }
}
const logger = new Logger();
export default logger;

// app.js
import logger from './logger.js';
logger.log('This is a singleton log');
```

### Pros:

- Ensures a single shared resource.

- Controlled access to the instance.

### Cons:

- Can make unit testing harder (global state).

- May be considered an anti-pattern if overused.
