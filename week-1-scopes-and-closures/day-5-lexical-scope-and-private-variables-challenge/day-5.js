// Implement a module that maintains private state using closures.
// Example: A bankAccount function that keeps track of balance privately.

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
