# 🧠 Observer Pattern

## 🔍 What Is the Observer Pattern?

- A behavioral design pattern where an object (the subject) maintains a list of observers that get notified automatically of any state changes.

- Promotes loose coupling between the subject and its observers.

- Useful in real-time and event-driven environments (e.g., live data feeds, UI state updates, collaborative tools).

## 🧩 Key Concepts & Components

1. Subject (Publisher)

   - Holds the state and a list of observers.

   - Has methods to:

     - subscribe(observer)

     - unsubscribe(observer)

     - notify(data)

2. Observer (Subscriber)

   - An object with an update(data) method (or equivalent).

   - It reacts when the subject notifies of changes.

## 🧱 Basic JavaScript Implementation

```js
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log('Updated with:', data);
  }
}
```

## ⚙️ Use Cases

- UI Components: Reacting to data/state changes.

- Chat Apps / Collab Tools: Broadcasting updates to all participants.

- Real-Time Systems: Stock tickers, IoT dashboards.

- Custom Event Emitters: Pub/sub utilities.

## 💡 Benefits

- Decouples the subject and observers — clean architecture.

- Scalable — observers can be added/removed dynamically.

- Reusable — subjects don’t care how many observers there are or what they do.

## ⚠️ Caveats

- Watch for memory leaks (unsubscribe when necessary).

- Overuse can lead to complexity if not managed well.
