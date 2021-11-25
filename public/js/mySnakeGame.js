import MainScene from "./MainScene.js";

const myConfig = {
    width: 640,
    height: 640,
    type: Phaser.AUTO,
    parent: "my-snake-app",
    scene: [MainScene]
};

var game = new Phaser.Game(myConfig);