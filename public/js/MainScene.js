import Snake from "./Snake";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    create() {
        this.Snake = new Snake(this);
    }

    update(time) {
        this.Snake.update(time);
    }

}