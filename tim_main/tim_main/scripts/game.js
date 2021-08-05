// 座標系管理
let cm;

// ゲーム
let gameManager;
let stageNum;

// ホーム画面
let home;

// クリア画面
let clear;

// ゲームオーバー
let gameover;

// モード
let mode;
const HOME = 0;
const GAME = 1;
const CLEAR = 2;
const GAMEOVER = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);

  cm = new CoordinatesManager();
  gameManager = new GameManager()
  home = new Home();
  clear = new Clear();
  gameover = new GameOver();
  mode = HOME;

  stageNum = 1;
}

function draw() {
  if(mode == HOME) {
    home.display();
  } else if(mode == GAME) {
    // データの処理
    gameManager.updateStatus();

    // 描画
    gameManager.display();
  } else if(mode == CLEAR) {
    clear.display();
  } else if(mode == GAMEOVER) {
    gameover.display();
  }
}

function keyPressed() {
  gameManager.keyPressed();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  if(mode == HOME) {
    home.mouseClicked();
  } else if(mode == CLEAR) {
    clear.mouseClicked();
  } else if(mode == GAMEOVER) {
    gameover.mouseClicked();
  }
}

function switchMode(toMode) {
}