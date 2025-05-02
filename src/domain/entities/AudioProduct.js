class AudioProduct {
  constructor(src) {
    if (!src) {
      throw new Error("Subclasses of AudioProduct must provide a 'src'.");
    }
    this.srcBase = src;
  }

  create(src = this.srcBase, loop = true, volume = 1) {
    throw new Error("Method 'create()' must be implemented in subclasses.");
  }
}

export default AudioProduct;