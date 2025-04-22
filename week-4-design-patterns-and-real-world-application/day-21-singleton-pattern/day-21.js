// Implement a practical singleton pattern in JavaScript.
class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.connection = this.connect();
    Database.instance = this;
  }

  connect() {
    console.log('Connecting to the database...');
    return 'Database connection';
  }

  getConnection() {
    return this.connection;
  }
}
// Usage
const db1 = new Database();
const db2 = new Database();
console.log(db1.getConnection()); // "Database connection"
console.log(db2.getConnection()); // "Database connection"
console.log(db1 === db2); // true, both are the same instance
// The singleton pattern ensures that a class has only one instance and provides a global point of access to it.
// In this example, the Database class uses a static property to store the instance.
// When a new instance is created, it checks if an instance already exists. If it does, it returns the existing instance.
// This pattern is useful for managing shared resources, such as database connections or configuration settings.
