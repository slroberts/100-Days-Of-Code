# 🧾 Immutable EventEmitter Breakdown

### 1. Constructor

```js
constructor(events = {}) {
  this.events = { ...events };
}
```

- Initializes the events object.

- Uses a shallow copy ({ ...events }) to ensure we're not mutating the original object passed in.

### 2. on(event, listener)

```js
const listeners = this.events[event] || [];
const newEvents = {
  ...this.events,
  [event]: [...listeners, listener],
};
return new ImmutableEventEmitter(newEvents);
```

- Grabs current listeners for the event.

- Creates a new array with the new listener added.

- Returns a new instance of ImmutableEventEmitter with the updated events.

📌 No mutation of this.events.

### 3. emit(event, data)

```js
(this.events[event] || []).forEach((listener) => listener(data));
return this;
```

- Triggers all listeners for a given event.

- Does not modify any internal state.

- Returns this so it can be chained or reused.

📌 Emits are stateless operations.

### 4. off(event, listenerToRemove)

```js
const newListeners = this.events[event].filter(
  (listener) => listener !== listenerToRemove
);
const newEvents = {
  ...this.events,
  [event]: newListeners,
};
return new ImmutableEventEmitter(newEvents);
```

- Filters out the specified listener.

- Creates a new copy of events with the updated listener list.

- Returns a new instance (immutability preserved).

### 5. once(event, listener)

```js
const wrapper = (data) => {
  listener(data);
  // manual off needed after calling
};
return this.on(event, wrapper);
```

- Wraps the listener in another function that calls the original and is intended to remove itself.

- Note: With immutability, self-removal isn't automatic — we’d need to call .off() manually after emitting.

## ✅ Summary

| Feature       | Traditional EventEmitter    | Immutable Version                             |
| ------------- | --------------------------- | --------------------------------------------- |
| Mutates state | Yes                         | No                                            |
| on()          | Pushes to array             | Returns new instance with updated array       |
| emit()        | Calls listeners             | Same                                          |
| off()         | Filters array in-place      | Filters into new array                        |
| once()        | Self-removes inside wrapper | Requires manual .off()                        |
| Reusability   | Single mutable instance     | New instance per change (pure function style) |
