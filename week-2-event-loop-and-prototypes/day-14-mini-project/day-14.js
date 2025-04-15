// Build a simple pub/sub (event emitter) in JavaScript.
// The event emitter should have the following methods:
// 1. `on(event, listener)`: Subscribe to an event with a listener.
// 2. `emit(event, data)`: Emit an event with data.
// 3. `off(event, listener)`: Unsubscribe from an event with a listener.
// 4. `once(event, listener)`: Subscribe to an event with a listener that is called only once.

class EventEmitter {
  constructor() {
    this.events = {}; // Stores event names and their listeners
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(data));
    }
  }

  off(event, listenerToRemove) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      (listener) => listener !== listenerToRemove
    );
  }

  once(event, listener) {
    const wrapper = (data) => {
      listener(data);
      this.off(event, wrapper); // Remove listener after it's called once
    };
    this.on(event, wrapper);
  }
}

// Example usage:
const emitter = new EventEmitter();

function handleEvent(data) {
  console.log('Event received:', data);
}

emitter.on('hello', handleEvent);
emitter.emit('hello', { msg: 'Hello World' }); // logs "Event received: { msg: 'Hello World' }"

emitter.off('hello', handleEvent);
emitter.emit('hello', { msg: 'This will not be logged' }); // nothing happens

emitter.once('onceEvent', (data) => {
  console.log('This should appear only once', data);
});

emitter.emit('onceEvent', { once: true }); // logs once
emitter.emit('onceEvent', { once: true }); // nothing happens
