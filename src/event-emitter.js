class SimpleEventEmitter {
  #events = {};

  on(event, cb) {
    if (!this.#events[event]) this.#events[event] = [];
    this.#events[event].push(cb);
  }

  off(event, cb) {
    if (!this.#events[event]) return;
    this.#events[event] = this.#events[event].filter((fn) => fn !== cb);
  }

  emit(event, data) {
    if (!this.#events[event]) return;
    for (const cb of this.#events[event]) cb(data);
  }
}

export const eventEmitter = new SimpleEventEmitter();
