import { Howl } from "howler";
import AudioProduct from "../../../domain/entities/AudioProduct.js";

class HowlProduct extends AudioProduct {
    constructor(src, loop = true, volume = 1) {
        super(src);
        this.src = src;
        this.loop = loop;
        this.volume = volume;
    }

    create() {
        this.music = new Howl({
            src: this.src,
            loop: this.loop,
            volume: this.volume,
        });
        return this.music;
    }
}

export default HowlProduct;