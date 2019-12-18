var gameOver = {
    key: 'gameOver',
    preload: function () {
        this.load.image('wall2', 'gameui/preview/game-ui-bg-wall2.png');
        this.load.image('play_ground2', 'gameui/preview/game-ui-bg-ground2.png')
        this.load.image('Hedgehog3', 'gameui/assets/小蝟成功過關狀態@3x.png')

        // 勝利圖
        this.load.image('try_again', 'gameui/assets/try again btn@3x.png')
        // 下排圖案 jump 計時器 help
        this.load.image('jump_btn', 'gameui/assets/JUMP btn@3x.png')
        this.load.image('help_icon', 'gameui/assets/Help icon@3x.png')
        this.load.image('timer', 'gameui/assets/timer@3x.png')
        // 時間
        this.timeset = 0;
        // 控制遊戲是否停止
        this.gameStop = true;
        // 帶入 Win 資訊
        this.Win;
        //music 
        
        this.load.audio('overmusic', 'gameui/assets/Carroll_Park_Sting.mp3');
        this.load.audio('run', 'gameui/assets/Running_Scared.mp3');

    },
    create: function () {

        // music
        var music = this.sound.add('run');
        var overmusic = this.sound.add('overmusic');
        music.stop();
        overmusic.play();
        // scene_start 比較圖
        this.scene_start = this.add.tileSprite(w / 2, h / 2, 2560, 1600, 'scene_start').setAlpha(0.4);
        this.scene_start.setScale(0.5);

        this.wall2 = this.add.tileSprite(w / 2, h / 2, 2560, 1600, 'wall2');
        this.wall2.setScale(0.5);
        // this.wall2.width = 1800;
        // 加入地板，把地板加入物理效果
        // play_ground3 是布景 play_ground2 是刺蝟踩的地板
        this.play_ground3 = this.add.tileSprite(w / 2, h / 2, 2560, 1600, 'play_ground2');
        this.play_ground3.setScale(0.5);
        this.play_ground2 = this.add.tileSprite(w / 2, 750, 2560, 300, 'play_ground2');
        this.play_ground2.setScale(0.5);
        this.physics.add.existing(this.play_ground2);
        this.play_ground2.body.immovable = true;
        this.play_ground2.body.moves = false;

        // 勝利圖
        // Win
        // 為了做過場所以 原本設定的510 需加上2560 = 3070
        this.Win = this.add.text(3070, 100, `YOU WIN`, {
            color: '#fff',
            fontFamily: '"Roboto Condensed"',
            fontSize: '60px'
        });

        // try again
        // 為了做過場所以 原本設定的640 需加上2560 = 3200
        this.try_again = this.add.image(3200, 250, 'try_again');
        this.try_again.setScale(0.5);
        this.try_again.setInteractive();
        this.try_again.on('pointerdown', () => this.scene.start('gamePlay'));

        // 小刺蝟
        //設定人物位置與加入物理效果
        this.Hedgehog3 = this.physics.add.sprite(w / 2, 550, 'Hedgehog3')
        this.Hedgehog3.setScale(0.5);
        //邊界限制
        // this.Hedgehog.setCollideWorldBounds(true);
        //設定角色碰撞邊界
        // this.Hedgehog.setSize(700, 500, 0);
        // this.Hedgehog.setScale(0.5);
        //可以獲取遊戲物件的座標資訊
        //設定角色彈跳值
        this.Hedgehog3.setBounce(0);

        // 將需要碰撞的物件綁在一起
        this.physics.add.collider(this.Hedgehog3, this.play_ground2);

        // 下排圖案 jump 計時器 help
        // this.jump_btn = this.add.tileSprite(w/2, 750, 2560 , 300, 'play_ground');
        this.jump_btn = this.add.image(450, 750, 'jump_btn');
        this.jump_btn.setScale(0.35);
        this.timer = this.add.image(600, 750, 'timer');
        this.timer.setScale(0.35);
        this.help_icon = this.add.image(1150, 750, 'help_icon');
        this.help_icon.setScale(0.35);

        // Time
        this.TimeText = this.add.text(650, 720, `${this.timeset}`, {
            color: '#fff',
            fontFamily: '"Roboto Condensed"',
            fontSize: '60px'
        });

    },
    update: function () {
        // ********************************* 
        //  play_ground2 , wall2 , try_again , Win 過場
        // ********************************* 
        if (this.play_ground3.tilePositionX <= 2560) {
            this.play_ground3.tilePositionX += 10;
        }

        if (this.wall2.tilePositionX <= 2560) {
            this.wall2.tilePositionX += 10;
        }

        if (this.try_again.x >= 640) {
            this.try_again.x -= 10;
        }

        if (this.Win.x >= 510) {
            this.Win.x -= 10;
        }

    }
}