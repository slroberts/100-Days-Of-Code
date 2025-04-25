# 🔁 Strategy Pattern

Definition: Encapsulates interchangeable behaviors (strategies) and uses them depending on context.

## 🧠 Core Concept

- Define a family of algorithms (strategies)

- Encapsulate each one

- Make them interchangeable at runtime

## 🧱 Structure

```js
class Context {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  execute(data) {
    return this.strategy.doAction(data);
  }
}

class StrategyA {
  doAction(data) {
    return `A: ${data}`;
  }
}

class StrategyB {
  doAction(data) {
    return `B: ${data}`;
  }
}
```

## ⚙️ Usage

```js
const context = new Context();
context.setStrategy(new StrategyA());
context.execute('test'); // "A: test"
```

## ✅ Use When:

- You need multiple interchangeable behaviors

- You want to follow Open/Closed Principle (add without modifying)

- You want to avoid big if/else or switch statements

## 📦 In Practice (API example):

```js
const strategies = {
  get: () => fetch('/api').then((r) => r.json()),
  post: () => fetch('/api', { method: 'POST' }),
};

const apiContext = {
  set(type) {
    this.strategy = strategies[type];
  },
  execute() {
    return this.strategy();
  },
};
```
