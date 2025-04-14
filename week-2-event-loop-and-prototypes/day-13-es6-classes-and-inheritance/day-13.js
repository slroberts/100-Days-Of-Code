// Convert a function prototype class into an ES6 class with inheritance.

// 1. class Person
// This is a blueprint for creating person-like objects. It includes:

// A constructor that sets name and age when a new object is created.

// A greet() method that logs a message with the person's name and age.

// A haveBirthday() method that increments the age and logs a birthday message.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  haveBirthday() {
    this.age++;
    console.log(
      `Happy birthday ${this.name}! You are now ${this.age} years old.`
    );
  }
}

// 2. class Man extends Person
// This creates a new class Man that inherits from Person using the extends keyword.

// ✅ What super(name, age) does:
// It calls the constructor of the Person class so that name and age are initialized properly. Without it, the Man class wouldn't have access to those properties.

class Man extends Person {
  constructor(name, age) {
    super(name, age);
  }
}

// 3. Creating an instance:
// john is a new object of class Man.

// Since Man inherits from Person, john has access to all the methods of Person.

const john = new Man('John', 30);

// 4. Using the methods:

john.greet();
// "Hello, my name is John and I am 30 years old."

john.haveBirthday();
// "Happy birthday John! You are now 31 years old."

// ✅ Summary
// Person is a class with properties and methods.

// Man is a subclass of Person (inherits from it).

// super() is used to call the parent constructor.

// Created a Man object (john) and used methods from the parent class.
