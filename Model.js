export default class Model {
  set(key, val) {
    this[key] = val;
    return this;
  }

  get(key) {
    if (!this.has(key)) {
      throw new Error(`No field in model for key: ${key}`);
    }
    return this[key];
  }

  has(key) {
    return this.hasOwnProperty(key);
  }

  update(partial) {
    Object.entries(partial).forEach(([key, value]) => this.set(key, value));
  }
}
