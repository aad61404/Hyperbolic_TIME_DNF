class gameStart extends Phaser.Scene {
    constructor() {
        super({
            key: 'gameStart'
        });
    }

    preload() {
        this.load.setBaseURL('https://raw.githubusercontent.com/aad61404/Hyperbolic_TIME_DNF/master/week5-90sgame/');
        this.load.image('bg1', 'gameui/preview/game-ui-bg-wall1.png');
        this.load.image('start', 'gameui/assets/Start btn@3x.png');
        this.load.image('game_home', 'gameui/preview/game-ui-game-home.png')
    }
    create() {
        // this.bg1 = this.add.image(120,120,'bg1');
        // 設定主頁面
        this.game_home = this.add.tileSprite(w / 2, h / 2, 2560, 1600, 'game_home');
        this.game_home.setScale(0.5);
        this.start = this.add.image(w / 2, h / 2 + 170, 'start');
        this.start.setScale(0.5);
        this.start.setInteractive();
        this.start.on('pointerdown', () => this.scene.start('gamePlay'));
        // //text
        // this.text2 = this.add.text(500, 250 , `房門之夜`, {
        //     color: '#45ccdc',
        //     fontSize: '100px'
        // });
        // this.text3 = this.add.text(300, 400, `PLEASE DO NOT DISTURB`, {
        //     color: '#feed55',
        //     fontSize: '60px'
        // });

        // this.text = this.add.text(w/4, 530, `能幫助小刺蝟在90秒之內走出房門嗎?`, {
        //     color: '#fff',
        //     fontSize: '40px',
        //     stroke: '#45ccdc',
        // });

    }
    update() {

    }

}