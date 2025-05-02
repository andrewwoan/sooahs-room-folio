import AudioFactory from "../../../domain/factories/AudioFactory.js";
import HowlProduct from "../products/HowlProduct.js";

class HowlFactory extends AudioFactory  {
  create(src, loop, volume) {
    const howlProductInstance = new HowlProduct(src, loop, volume);
    const backgroundMusic = howlProductInstance.create();
    return backgroundMusic;
  }
}

export { HowlFactory };
