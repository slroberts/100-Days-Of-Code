// Refactor an existing function to avoid mutations and follow immutability.
class ImmutableEventEmitter {
  constructor(events = {}) {
    this.events = { ...events }; // shallow copy to keep it immutable
  }

  on(event, listener) {
    const listeners = this.events[event] || [];
    const newEvents = {
      ...this.events,
      [event]: [...listeners, listener],
    };
    return new ImmutableEventEmitter(newEvents);
  }

  emit(event, data) {
    (this.events[event] || []).forEach((listener) => listener(data));
    return this; // no state change
  }

  off(event, listenerToRemove) {
    if (!this.events[event]) return this;

    const newListeners = this.events[event].filter(
      (listener) => listener !== listenerToRemove
    );

    const newEvents = {
      ...this.events,
      [event]: newListeners,
    };

    return new ImmutableEventEmitter(newEvents);
  }

  once(event, listener) {
    const wrapper = (data) => {
      listener(data);
      // Note: emit is stateless, so you must manually use `off`
    };
    return this.on(event, wrapper);
  }
}

// Example usage:
let emitter = new ImmutableEventEmitter();

function handleEvent(data) {
  console.log('Event received:', data);
}

emitter = emitter.on('hello', handleEvent);
emitter.emit('hello', { msg: 'Hello World' }); // logs

emitter = emitter.off('hello', handleEvent);
emitter.emit('hello', { msg: 'This will not be logged' }); // nothing

const logOnce = (data) => console.log('Once only:', data);
emitter = emitter.on('onceEvent', logOnce);
emitter.emit('onceEvent', { once: true });
emitter = emitter.off('onceEvent', logOnce);
emitter.emit('onceEvent', { once: true }); // nothing
