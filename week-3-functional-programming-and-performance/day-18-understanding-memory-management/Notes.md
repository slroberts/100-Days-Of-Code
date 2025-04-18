# 🧠 JavaScript Memory Management

### 1. Memory Lifecycle

    - JavaScript automatically allocates and frees memory.

    - The cycle has three steps:

        1. Allocation – When variables and objects are created.

        2. Use – Reading/writing to those variables/objects.

        3. Release – Memory is freed when data is no longer needed.

### 2. Allocation

    - Happens when:

        - Variables are declared (var, let, const).

        - Objects, arrays, functions are created.

        - DOM elements are referenced.

### 3. Garbage Collection (GC)

    - JavaScript engines (like V8) automatically remove unused memory.

    - GC is non-deterministic – runs when the engine decides it's time.

### 4. Reachability

    - Core concept for memory cleanup: If an object is reachable, it won’t be collected.

    - Reachable = accessible from:

        - Global scope

        - Local variables still in use

        - Objects referenced by reachable objects

### 5. Common Memory Leaks

    - Unreferenced DOM elements still tied to event handlers.

    - Closures holding onto data that's no longer needed.

    - Forgotten timers (setInterval without clearInterval).

    - Detached DOM nodes held in JS variables.

    - Overly large structures (like global arrays/objects) not cleared.

## 6. Best Practices

    - Dereference unused objects: myVar = null

    - Clean up event listeners and intervals.

    - Avoid global variables.

    - Use tools like Chrome DevTools to track memory usage and leaks.
