// Implement a class using function prototypes (before using ES6 classes).
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// Adding a method to the prototype of Person
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
// Creating an instance of Person
const john = new Person('John', 30);
// Calling the greet method
john.greet(); // Output: Hello, my name is John and I am 30 years old.
// Adding another method to the prototype
Person.prototype.haveBirthday = function () {
  this.age++;
  console.log(
    `Happy birthday ${this.name}! You are now ${this.age} years old.`
  );
};
// Calling the haveBirthday method
john.haveBirthday(); // Output: Happy birthday John! You are now 31 years old.
