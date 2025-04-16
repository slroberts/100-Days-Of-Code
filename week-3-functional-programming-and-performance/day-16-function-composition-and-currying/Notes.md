# Function Composition & Currying

## 🔁 Function Composition

Concept: Combining simple functions to build more complex ones.

Example:

```js
const isGreaterThan = (min) => (value) => value > min;
const isLessThan = (max) => (value) => value < max;

const isInRange = (min) => (max) => (value) =>
  isGreaterThan(min)(value) && isLessThan(max)(value);

const isTwentySomething = isInRange(19)(30);
console.log(isTwentySomething(25)); // true
```

Improved with "and" Function:

```js
const and = (conditions) => (value) =>
  conditions.every((condition) => condition(value));

const isInRange = (min) => (max) => and([isGreaterThan(min), isLessThan(max)]);

const isEven = (value) => value % 2 === 0;

const isEvenAndInRange = and([isEven, isInRange(19)(30)]);
console.log(isEvenAndInRange(24)); // true
```

By creating small, reusable functions and combining them, your code becomes more readable and maintainable.

## 🍛 Currying

Concept: Transforming a function with multiple arguments into a series of functions each taking a single argument.​

Example:

```js
const distance = (start) => (end) =>
  Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));

const flag = { x: 0, y: 0 };
const players = [
  { name: 'Alice', position: { x: 3, y: 5 } },
  { name: 'Benji', position: { x: -4, y: -4 } },
  { name: 'Clarissa', position: { x: -2, y: 8 } },
];

const distanceFromFlag = distance(flag);
const distances = players.map((player) => distanceFromFlag(player.position));
console.log(distances);
```

Currying allows you to create specialized functions like distanceFromFlag, enhancing code reusability and clarity.

## ✅ Benefits

- Modularity: Build complex logic from simple, testable functions.

- Reusability: Create functions that can be easily reused in different contexts.

- Readability: Express logic in a clear and concise manner.
