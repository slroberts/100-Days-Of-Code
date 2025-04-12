const person = {
  name: 'Mira',
};

// 🔹 1. Function with .call()
function greetCall(greeting) {
  console.log(`${greeting}, I'm ${this.name}`);
}

greetCall.call(person, 'Hello');
// Output: "Hello, I'm Mira"

//.call() invokes the function immediately with this set to person.

// Arguments are passed individually.

// 🔹 2. Function with .apply()
function greetApply(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

greetApply.apply(person, ['Hi', '!']);
// Output: "Hi, I'm Mira!"

// .apply() is like .call(), but arguments are passed as an array.

// 🔹 3. Function with .bind()

function greetBind(greeting) {
  console.log(`${greeting}, I'm ${this.name}`);
}

const boundGreet = greetBind.bind(person);
boundGreet('Hey');
// Output: "Hey, I'm Mira"

// .bind() doesn't invoke the function right away—it returns a new function with this permanently bound.
