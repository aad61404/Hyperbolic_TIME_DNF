const w = 1280;
const h = 800;
var config = {
    type: Phaser.AUTO,
    width: w,
    height: h,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 2000
            },
            // debug: true,
        }
    },
    scene: [
        gameStart,
        gamePlay,
        gameOver,
    ],
    audio: {
        disableWebAudio: true
    }
};

var game = new Phaser.Game(config);
