var getRandom = (max, min) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

class gamePlay extends Phaser.Scene {
    constructor() {
        super({
            key: 'gamePlay'
        });
    }
    preload() {
        // this.load.setBaseURL('https://raw.githubusercontent.com/aad61404/Hyperbolic_TIME_DNF/master/week5-90sgame/');
        this.load.image('bg1', 'gameui/preview/game-ui-bg-wall1.png');
        this.load.image('play_ground', 'gameui/preview/game-ui-bg-ground1.png')
        this.load.image('game_home','gameui/preview/game-ui-game-home.png')
        this.load.image('Hedgehog', 'gameui/assets/小蝟行走狀態@3x.png')
        this.load.image('dead', 'gameui/assets/小蝟死亡未過關狀態@3x.png')

        this.load.image('scene_start', 'gameui/preview/game-ui-scene-1-開始.png')
        
        // 下排圖案 jump 計時器 help
        this.load.image('jump_btn', 'gameui/assets/JUMP btn@3x.png')
        this.load.image('help_icon', 'gameui/assets/Help icon@3x.png')
        this.load.image('timer', 'gameui/assets/timer@3x.png')

        // 障礙物
        this.load.image('flower_pot1', 'gameui/assets/障礙物1花盆@1.png')
        this.load.image('flower_pot2', 'gameui/assets/障礙物1花盆@2.png')
        this.load.image('flower_pot3', 'gameui/assets/障礙物1花盆@3.png')
        this.load.image('book1', 'gameui/assets/障礙物2書籍@1.png')
        this.load.image('book2', 'gameui/assets/障礙物2書籍@2.png')
        this.load.image('book3', 'gameui/assets/障礙物2書籍@3.png')
        this.load.image('word1', 'gameui/assets/障礙物3流言蜚語@1.png')
        this.load.image('word2', 'gameui/assets/障礙物3流言蜚語@2.png')
        this.load.image('word3', 'gameui/assets/障礙物3流言蜚語@3.png')

        this.load.image('love1', 'gameui/assets/愛心養分1.png')
        this.load.image('love2', 'gameui/assets/愛心養分2.png')
        this.load.image('love3', 'gameui/assets/愛心養分3.png')
        this.load.image('smile1', 'gameui/assets/笑容養分1.png')
        this.load.image('smile2', 'gameui/assets/笑容養分2.png')
        this.load.image('smile3', 'gameui/assets/笑容養分3.png')

        this.flower_potArr = [];
        this.bookArr = [];
        this.flower_potIdx =0;
        this.bookIdx =0;
        this.wordArr = [];
        this.wordIdx = 0;

        // 重來
        this.load.image('try_again', 'gameui/assets/try again btn@3x.png')
        this.Lose;
        // 時間
        this.timeset = 90;
        // 控制遊戲是否停止
        this.gameStop = false;
        this.speed=1.5;

            //  Firefox doesn't support mp3 files, so use ogg
        this.load.audio('run', 'gameui/assets/Running_Scared.mp3');
        this.load.audio('ambulance', 'gameui/assets/Ambulance_Siren_Distant.mp3');
        this.load.audio('crash', 'gameui/assets/Crash.mp3');


    }
    create() {
        // scene_start 比較圖
        this.scene_start = this.add.tileSprite(w/2 , h/2, 2560 , 1600, 'scene_start').setAlpha(0.4);
        this.scene_start.setScale(0.5);

        // music
        var music = this.sound.add('run');
        var music_hit1 = this.sound.add('ambulance');
        var music_hit2 = this.sound.add('crash');
        music_hit1.stop();
        music_hit2.stop();
        music.play();
        // music.stop();
        // 藍色背景
        this.bg1 = this.add.tileSprite(w/2,h/2, 2560 , 1600, 'bg1');
        this.bg1.setScale(0.5);

        //加入地板，把地板加入物理效果
        this.play_ground = this.add.tileSprite(w/2, h/2, 2560 , 1600, 'play_ground');
        this.play_ground.setScale(0.5);
        this.play_ground = this.add.tileSprite(w/2, 750, 2560 , 300, 'play_ground');
        this.play_ground.setScale(0.5);
        this.physics.add.existing(this.play_ground);
        this.play_ground.body.immovable = true;
        this.play_ground.body.moves = false;

        //設定小刺蝟與加入物理效果
        this.Hedgehog = this.physics.add.sprite(250, 220, 'Hedgehog')
        this.Hedgehog.setScale(0.35);
        this.Hedgehog.setSize(500,480,0);
        //邊界限制
        this.Hedgehog.setCollideWorldBounds(true);

        //設定角色彈跳值
        this.Hedgehog.setBounce(0);
        // 障礙物
        // this.flower_pot1 = this.add.tileSprite(w/2, 750, 2560 , 300, 'play_ground');
        // this.flower_pot1 = this.add.image(500, 180 ,'flower_pot1');
        // this.flower_pot1.setScale(0.4);
        // this.flower_pot1.setSize(160, 160);

        // this.book1 = this.add.image(1000 ,610,'book1');
        // this.book1.setScale(0.4);
        // this.book1.setSize(130, 130);

        // this.book2 = this.add.image(1300 ,610,'book2');
        // this.book2.setScale(0.4);
        // this.book2.setSize(130, 130);

        // this.physics.add.existing(this.flower_pot1);
        // this.flower_pot1.body.immovable = true;
        // this.flower_pot1.body.moves = false;
        // this.physics.add.existing(this.book1);
        // this.book1.body.immovable = true;
        // this.book1.body.moves = false;

        // this.physics.add.existing(this.book2);
        // this.book2.body.immovable = true;
        // this.book2.body.moves = false;

        // 下排圖案 jump 計時器 help
        this.jump_btn = this.add.image(450 , 750, 'jump_btn');
        this.jump_btn.setScale(0.35);
        this.timer = this.add.image(600 , 750, 'timer');
        this.timer.setScale(0.35);
        this.help_icon = this.add.image(1150 , 750, 'help_icon');
        this.help_icon.setScale(0.35);

        // Time
        this.TimeText = this.add.text(650, 720, `${this.timeset}`, {
            color: '#fff',
            fontFamily: '"Roboto Condensed"',
            fontSize: '60px'
        });
        // 倒數
        var timer = setInterval(() => {
            this.timeset--;
            this.TimeText.setText(`${this.timeset}`);
            if(this.timeset <=0) {
                this.gameStop = true;
                clearInterval(timer);
            }
        }, 1000);

        // 碰撞事件
        var hittest = () => {
            this.gameStop = true;
            clearInterval(timer);

            // 輸了畫圖 Lose
            this.Win = this.add.text(480, 170, `YOU LOSE !`, {
                color: '#fff',
                fontFamily: '"Roboto Condensed"',
                fontSize: '60px'
            });

            // Music
            music.stop();
            music_hit1.play();
            music_hit2.play();

            // try again
            this.try_again = this.add.image(640, 320, 'try_again');
            this.try_again.setScale(0.5);
            this.try_again.setInteractive();
            this.try_again.on('pointerdown', () => {
                this.scene.start('gamePlay');
                music_hit1.stop();
                music_hit2.stop();
            });
            
            this.Hedgehog.destroy()
            this.Hedgehog = this.physics.add.sprite(this.Hedgehog.x, this.Hedgehog.y, 'dead');
            this.Hedgehog.setScale(0.35);
            this.Hedgehog.angle = 180;
            this.physics.add.collider(this.Hedgehog, this.play_ground);
            this.Hedgehog.body.moves = false;

        }

        // 將需要碰撞的物件綁在一起 觸發事件
        this.physics.add.collider(this.Hedgehog, this.play_ground);
        // this.physics.add.collider(this.Hedgehog, this.flower_pot1, hittest);
        // this.physics.add.collider(this.Hedgehog, this.book1, hittest);
    
        //障礙物配置 參考別人的
        const flower_pot = [
            { name: 'flower_pot1', x: 2000, y: 180, w: 160, h: 160 },
            { name: 'flower_pot2', x: 3000, y: 180, w: 160, h: 160 },
            { name: 'flower_pot3', x: 4000, y: 180, w: 160, h: 160 },
        ]
        const book = [
            { name: 'book1', x: 1500, y: 610, w: 130, h: 130 },
            { name: 'book2', x: 2500, y: 610, w: 130, h: 130 },
            { name: 'book3', x: 3500, y: 610, w: 130, h: 130 },
        ]
        const word = [
            { name: 'word1', x: 4000, y: 400, w: 130, h: 130 },

        ]

        //生成障礙物
        for (let i = 0; i < 10; i++) {
            let BoolIdx = getRandom(2, 0);
            let BoolIdx2 = getRandom(2, 0);
            let BoolIdx3 = getRandom(0, 0);

            //flower_pot , book 障礙物
            this['flower_pot' + i] = this.physics.add.sprite(flower_pot[BoolIdx].x, flower_pot[BoolIdx].y, flower_pot[BoolIdx].name);
            this['book' + i] = this.physics.add.sprite(book[BoolIdx2].x, book[BoolIdx2].y, book[BoolIdx2].name);
    
            this['flower_pot' + i].setScale(0.35);
            this['flower_pot' + i].body.immovable = true;
            this['flower_pot' + i].body.moves = false;
            this['book' + i].setScale(0.35);
            this['book' + i].setSize(200, 230, 0);
            this['book' + i].body.immovable = true;
            this['book' + i].body.moves = false;
            this.flower_potArr.push(this['flower_pot' + i]);
            this.bookArr.push(this['book' + i]);
            this.physics.add.collider(this.Hedgehog, this['flower_pot' + i], hittest)
            this.physics.add.collider(this.Hedgehog, this['book' + i], hittest)
 

            //word 障礙物
            this['word' + i] = this.physics.add.sprite(word[BoolIdx3].x, word[BoolIdx3].y, word[BoolIdx3].name);
            this['word' + i].setScale(0.35);
            this['word' + i].body.immovable = true;
            this['word' + i].body.moves = false;
            this.wordArr.push(this['word' + i]);
            this.physics.add.collider(this.Hedgehog, this['word' + i], hittest)

        }

    }

    update() {
        this.bg1.tilePositionX += 5;
        this.flower_potArr[this.flower_potIdx].x -= 4*this.speed;
        this.bookArr[this.bookIdx].x -= 4*this.speed;
        this.wordArr[this.wordIdx].x -= 4*this.speed;
        if( this.timeset < 70) {
            this.bg1.tilePositionX += 6;
            this.speed = 1.5;
        }
        if( this.timeset < 50) {
            this.bg1.tilePositionX += 7;
            this.speed = 2;
        }
        if(this.timeset < 35) {
            this.bg1.tilePositionX += 8;
            this.speed = 2.5;
        }
        if(this.timeset < 15) {
            this.bg1.tilePositionX += 10;
            this.speed = 3.5;
        }
        if(this.timeset <= 0) {
            this.scene.start('gameOver');
            // clearInterval(timer);
        }

        for (let i = 0; i < this.bookArr.length; i++) {
            if (this.bookArr[i].x <= -100) {
                this.bookArr[i].x = 5000  + getRandom(1200, 800);
                this.bookIdx = getRandom(2, 0);
            }
        }

        for (let i = 0; i < this.flower_potArr.length; i++) {
            if (this.flower_potArr[i].x <= -100) {
                this.flower_potArr[i].x = 4000;
                this.flower_potIdx = getRandom(2, 0);
            }
        }

        for (let i = 0; i < this.wordArr.length; i++) {
            if (this.wordArr[i].x <= -100) {
                this.wordArr[i].x = 8000;
                this.wordIdx = getRandom(2, 0);
            }
        }

        // 啟動鍵盤事件
        var keyboard = this.input.keyboard.createCursorKeys();
        if (keyboard.right.isDown) {
            this.Hedgehog.setVelocityX(400);
        } else if (keyboard.left.isDown) {
            this.Hedgehog.setVelocityX(-400);
        } else {
            this.Hedgehog.setVelocityX(0);
        }
        if (keyboard.up.isDown) {
            this.Hedgehog.setVelocityY(-700);
        }
        if(keyboard.down.isDown) {
            this.Hedgehog.setVelocityY(1000);
        }
    }
}