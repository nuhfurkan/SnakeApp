import MainScene from "./MainScene.js";

const myConfig = {
    // set initial width
    width: 640,
    // set initial height
    height: 640,
    type: Phaser.AUTO,
    parent: "my-snake-app",
    scene: [MainScene]
};

var game = new Phaser.Game(myConfig);