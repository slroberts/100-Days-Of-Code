# 🏭 Factory Design Pattern

### 🔹 Purpose:

The Factory Pattern provides a way to create objects without specifying the exact class or constructor. It's useful when object creation involves logic, configuration, or a need for abstraction.

### 🔧 How It Works:

A factory function returns new objects. Instead of using new ClassName() directly, you call a function that returns an object based on conditions or parameters.

### 🧱 Basic Structure:

```js
function createUser(role) {
  if (role === 'admin') {
    return { role: 'admin', permissions: ['read', 'write', 'delete'] };
  } else {
    return { role: 'user', permissions: ['read'] };
  }
}

const admin = createUser('admin');
```

### ✨ Advantages:

    - Abstracts object creation logic.

    - Improves flexibility and scalability.

    - Makes the code easier to maintain.

    - Encapsulates complex instantiation logic.

### 🧩 When to Use:

    - When object creation involves multiple steps or configuration.

    - When objects share structure but have different internal values.

    - When you want to decouple object creation from the rest of your codebase.

### 🔄 Comparison with Constructor Function:

- Constructor:

```js
function User(name) {
  this.name = name;
}
const user = new User('Alex');
```

- Factory:

```js
function createUser(name) {
  return { name };
}
const user = createUser('Alex');
```

Factory pattern doesn’t require new and avoids issues related to this.
