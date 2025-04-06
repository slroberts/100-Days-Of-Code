# 🎯 Lexical Scope and Private Variables Challenge

```js
function createBankAccount() {
  let balance = 0; //Private variable
  let transactions = [];
  return {
    deposit(money) {
      balance = balance + money;
      transactions.push(`Deposited +$${money}`);
      console.log(`Deposited $${money}. New balance: $${balance}`);
    },
    withdraw(money) {
      balance = balance - money;
      transactions.push(`Withdrew -$${money}`);
      console.log(`Withdrew $${money}. New balance: $${balance}`);
    },
    getBalance() {
      console.log(`Current balance: $${balance}`);
    },
    getTransactions() {
      console.log('Transaction History:');
      transactions.forEach((t) => console.log(t));
      return [...transactions];
    },
  };
}

const bankAccount = createBankAccount();
bankAccount.deposit(25);
bankAccount.deposit(100);
bankAccount.withdraw(50);
bankAccount.getBalance();
bankAccount.getTransactions();

// Cannot directly access balance:
console.log(bankAccount.balance); // Undefined
console.log(bankAccount.transactions); // Undefined
```

This function is a example of **closures**, **lexical scope**, and how to use them to create private state in JavaScript.

## 🧠 Key Concepts

1. Closures Create Private Variables

- ✅ balance and transactions are not accessible from outside createBankAccount.

- ✅ They are closed over by the returned functions (deposit, withdraw, etc.).

- ✅ Even after createBankAccount finishes executing, those inner functions retain access to the variables in their lexical scope.

### 💡 A closure is a function that “remembers” the variables from its surrounding scope, even after that outer scope has finished executing.

2. Lexical Scope

- ✅ The functions inside the returned object (deposit, withdraw, etc.) can access balance and transactions because they were defined in the same lexical scope (i.e., inside createBankAccount).

- ✅ This is why the private state stays intact and consistent between calls.

3. Encapsulation

- ✅ You’re mimicking object-oriented encapsulation: exposing only the methods that should interact with your state, and hiding the internal state from outside access.

- ✅ External code can’t directly modify balance or transactions, which helps prevent bugs or misuse.

```js
console.log(bankAccount.balance); // undefined ✅
console.log(bankAccount.transactions); // undefined ✅
```

This is how JavaScript modules (or service-like objects) often protect state.

4. Functional Factory Pattern

- ✅ createBankAccount is a factory function — it returns an object that behaves like a class instance but is created via a function.

- ✅ This is a lightweight alternative to using class or new.
