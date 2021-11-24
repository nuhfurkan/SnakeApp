import MainScene from "./MainScene";

const config = {
    width: 440,
    heigtt: 440,
    type: Phaser.AUTO,
    parent: "my-snake-app",
    scene: [MainScene]
};

new Phaser.Game(config);