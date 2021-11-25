export default class Snake {
    constructor(scene) {
        this.scene = scene;
        this.height = this.scene.game.config.height;
        this.width = this.scene.game.config.width;
        this.sizeOfBox = 16
        this.lastMoveTime = 0;
        this.moveTimeInterval = 300;
        this.direction = Phaser.Math.Vector2.RIGHT;
        this.body = [];
        this.body.push(this.scene.add.rectangle(this.width / 2, this.height / 2, this.sizeOfBox, this.sizeOfBox, 0x0000ff).setOrigin(0));
        scene.input.keyboard.on("keydown",  e => {
            this.keydown(e);
        })
        this.apple = this.scene.add.rectangle(0, 0, this.sizeOfBox, this.sizeOfBox, 0xff0000).setOrigin(0);
        this.createApple();
    }   

    createApple() {
        this.apple.x = Math.floor(Math.random() * this.width / this.sizeOfBox) * this.sizeOfBox;
        this.apple.y = Math.floor(Math.random() * this.height / this.sizeOfBox) * this.sizeOfBox;
    }

    snakeGrow() {
        this.body.push(this.scene.add.rectangle(-this.sizeOfBox, -this.sizeOfBox, this.sizeOfBox, this.sizeOfBox, 0x00ff00).setOrigin(0));
        this.moveTimeInterval -= 5;
    }

    keydown(event) {
        console.log(event);
        switch(event.keyCode) {
            case 39: // right
                this.direction = Phaser.Math.Vector2.RIGHT;
                break;
            case 37: // left
                this.direction = Phaser.Math.Vector2.LEFT;
                break;
            case 38: // up
                this.direction = Phaser.Math.Vector2.UP;
                break;
            case 40: // down
                this.direction = Phaser.Math.Vector2.DOWN;
                break;
        }
    }

    update(time) {
        if (time >= this.lastMoveTime + this.moveTimeInterval ) {
            this.lastMoveTime = time;
            this.move();
        }
    }

    move() {
        for (var i = this.body.length-1; i > 0; i--) {
            this.body[i].y = this.body[i-1].y    
            this.body[i].x = this.body[i-1].x
        }
        this.body[0].x += this.direction.x * 16;
        this.body[0].y += this.direction.y * 16;

        if (this.body[0].x == this.apple.x && this.body[0].y == this.apple.y) {
            this.createApple();
            this.snakeGrow();
        }
    }
}