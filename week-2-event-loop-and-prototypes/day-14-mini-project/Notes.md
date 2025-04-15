# Event Emitter

## 🔧 The Class Structure

```js
class EventEmitter {
  constructor() {
    this.events = {}; // key = event name, value = array of listeners
  }
```

- this.events is a dictionary (object) that stores event names as keys and arrays of functions (listeners) as values.

## ✅ 1. Subscribing to an Event: on(event, listener)

```js
on(event, listener) {
  if (!this.events[event]) {
    this.events[event] = [];
  }
  this.events[event].push(listener);
}
```

- Checks if the event name already exists in this.events.

- If not, it initializes it as an empty array.

- Then it adds the listener function to that event’s list.

## 🚀 2. Emitting an Event: emit(event, data)

```js
emit(event, data) {
  if (this.events[event]) {
    this.events[event].forEach((listener) => listener(data));
  }
}
```

- If the event exists, it loops through all the listeners and calls them with data.

- This simulates an event being “fired” and listeners “responding.”

## ❌ 3. Removing a Listener: off(event, listenerToRemove)

```js
off(event, listenerToRemove) {
  if (!this.events[event]) return;

  this.events[event] = this.events[event].filter(
    (listener) => listener !== listenerToRemove
  );
}
```

- If the event exists, it filters out the specific listener from the array, effectively unsubscribing it.

## 🔁 4. One-Time Listener: once(event, listener)

```js
once(event, listener) {
  const wrapper = (data) => {
    listener(data); // Call the original listener
    this.off(event, wrapper); // Remove after first call
  };
  this.on(event, wrapper);
}
```

- Creates a wrapper function that calls the original listener.

- Then, immediately unsubscribes itself so it only runs once.

- wrapper is passed to .on() instead of the original listener.

## 🧪 Example Usage

```js
const emitter = new EventEmitter();

function handleEvent(data) {
  console.log('Event received:', data);
}

emitter.on('hello', handleEvent);
emitter.emit('hello', { msg: 'Hello World' }); // listener is called

emitter.off('hello', handleEvent);
emitter.emit('hello', { msg: 'This will not be logged' }); // listener removed

emitter.once('onceEvent', (data) => {
  console.log('This should appear only once', data);
});
emitter.emit('onceEvent', { once: true }); // listener runs
emitter.emit('onceEvent', { once: true }); // nothing happens
```

## 🧠 Why This is Useful

This pattern is everywhere:

    - UI frameworks: buttons, inputs, etc.

    - Backend systems: message queues, logs.

    - State management: central event buses or stores.
