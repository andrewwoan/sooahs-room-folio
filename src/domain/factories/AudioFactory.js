class AudioFactory {
  create(src, loop, volume) {
    throw new Error("Method 'create()' must be implemented in subclasses to create audio products.");
  }
}

export default AudioFactory;