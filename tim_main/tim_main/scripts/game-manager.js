let Enemys_cnt = 0;
let timerStart = 50;
let time2 = 40;
let time3 = 50;
let time4 = 30;
let time5 = 60;
let timer = timerStart;
let timer2 = time2;
let timer3 = time3;
let timer4 = time4;
let timer5 = time5;

class GameManager {
  // ゲッター
  // 例えば get a() {return b} と設定すると this.a で b が帰ってくるようになる

  constructor() {
    this.initGame();
  }

  // 初期化
  initGame() {
    this.player = new Player(0, 0);

    this.stage = new Stage();
    if(stageNum == 2) {
      this.stage = new Stage1();
      timer = timerStart;
    } else if(stageNum == 3) {
      this.stage = new Stage2();
      timer = time2;
    } else if(stageNum == 4) {
      this.stage = new Stage3();
      timer = time3;
    } else if(stageNum == 5) {
      this.stage = new Stage4();
      timer = time4;
    } else if(stageNum == 6) {
      this.stage = new Stage5();
      timer = time5;
    }
    this.status = new Status();
  }

  // 描画
  display() {
    // 座標系の変換
    cm.transformCanvas();
    
    // ステージ
    this.stage.display();

    // プレイヤー
    this.player.display();

    // タイマー、残り敵数
    this.status.display();

    // 座標系をリセット
    resetMatrix();
  }

  // 状態を更新
  updateStatus() {
    // プレイヤー
    this.player.move();
    GameObject.collision(this.player, this.stage);
    this.player.shooting();

    // ステージ
    this.stage.update();

    // タイマー、残り敵数
    this.status.update();

    if(this.status.isStageClear) {
      if(stageNum < 6) {
        stageNum++;
        this.initGame();
      } else {
        mode = CLEAR;
        stageNum = 1;
      }
    } else if(this.status.isGameOver) {
      mode = GAMEOVER;
      timer = timerStart;
    }
  }

  // p5jsに認識させるkeyPressedメソッド
  keyPressed() {
    this.player.keyPressed();
  }
}

// 座標系等を担当するManager
class CoordinatesManager {
  // ゲーム画面
  get gameWidth() { return 1000; }
  get gameHeight() { return 700; }

  get groundHeight() { return 50; }
  get stageWidth() { return this.gameWidth; }
  get stageHeight() { return this.gameHeight - this.groundHeight; }

  get screenScale() {
    let p = 0.9;
    if(windowWidth/windowHeight > this.gameWidth/this.gameHeight) {
      return p*windowHeight/this.gameHeight;
    } else {
      return p*windowWidth/this.gameWidth;
    }
  }

  get screenWidth() { return this.gameWidth*this.screenScale; }
  get screenHeight() { return this.gameHeight*this.screenScale; }
  
  get screenMarginX() { 
    return (windowWidth - this.screenWidth)/2;  
  }

  get screenMarginY() {
    return (windowHeight - this.screenHeight)/2;  
  }
  
  get screenOx() { return this.screenMarginX; }
  get screenOy() { return windowHeight - this.groundHeight*this.screenScale - this.screenMarginY; }

  // 座標系の変換
  transformCanvas() {
    resetMatrix();

    rectMode(CORNER);
    textAlign(LEFT);

    // キャンバスの原点
    translate(this.screenOx, this.screenOy);
    scale(this.screenScale);
    
    // y軸の正の方向が上方向となるようにする
    scale(1, -1);
  }
}

// タイマー
class Status {
  constructor() {
    // 残り時間
    this.timer = timer;
    this.timerSize = 40;

    // 残り敵数
    this.enemyCntSize = 25;
    
    // フォント
    this.font = loadFont("assets/PixelMplus-20130602/PixelMplus12-Regular.ttf");
  }

  get isGameOver() {
    return this.timer <= 0;
  }

  get isStageClear() {
    if(this.timer > 0 && Enemys_cnt == 0) {
      return true;
    }
    return false;
  }

  get minStr() {
    return "0" + str(int(this.timer / 60));
  }

  get secStr() {
    return (this.timer % 60 < 10 ? "0" : "") + str(this.timer % 60);
  }

  get timeStr() {
    return this.minStr + ":" + this.secStr;
  }

  update() {
    if(frameCount % 60 == 0 && this.timer > 0) {
      this.timer--;
    }
  }

  display() {
    scale(1, -1);

    // マージン
    let margin = 10;

    // タイマー
    let timerSize = 50;
    textSize(timerSize);
    textFont(this.font);
    let timerStr = this.minStr + ":" + this.secStr;
    let timerX = cm.gameWidth - textWidth(timerStr) - margin;
    let timerY = -(cm.stageHeight - timerSize - margin);
    fill(0);
    text(timerStr, timerX, timerY);

    // 残り敵数
    let enemyCntSize = 35;
    textSize(enemyCntSize);
    textFont(this.font);
    let enemyCntStr =  "残り敵数：" + Enemys_cnt;
    let enemyCntX = cm.gameWidth - textWidth(enemyCntStr) - margin;
    let enemyCntY = timerY + enemyCntSize + margin;
    text(enemyCntStr, enemyCntX, enemyCntY);

    scale(1, -1);
  }
}