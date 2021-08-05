var shot_x = new Array(10);
var shot_y = new Array(10);
var shot_alive_flag = new Array(10);
var shot_size = 10;

var in_Lava = false;

class Player extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.w = 50; // 幅
    this.h = this.w/3*4; // 高さ
    this.dx = 0; // x方向の速さ
    this.dy = 0; // y方向の速さ
    this.g = 1; // 重力加速度

    this.count = 0;

    this.next_alive_shot_num = 0;　//次に打つ弾の番号
    //this.shot_x=new Array(10);  //打つ弾のx座標
    //this.shot_y=new Array(10);  //打つ弾のy座標
    this.shot_speed_x = new Array(10);  //打つ弾の速度
    //this.shot_alive_flag=new Array(10);  //打つ弾が存在してるか
    for(let i = 0; i < 10; i++) {
      //this.shot_x[i] = 0;
      //this.shot_y[i] = 0;
      //this.shot_alive_flag[i] = false;
      shot_x[i] = 0;
      shot_y[i] = 0;
      shot_alive_flag[i] = false;
    }
    this.shot_size = 10;  //弾の大きさ

    this.rightward = true;  //右に向いているか(falseだと左向き)

    // 画像
    this.leftwardImg = this.loadImage2("assets/gunjin_leftward_stop.png", this.w, this.h);
    this.rightwardImg = this.loadImage2("assets/gunjin_rightward_stop.png", this.w, this.h);
  }

  // 描画
  display() {
    if(this.rightward) {
      image(this.rightwardImg, this.x, this.y, this.w, this.h);
    } else {
      image(this.leftwardImg, this.x, this.y, this.w, this.h);
    }
    
    //弾描画
    for(let i = 0; i < 10; i++) {
      if(shot_alive_flag[i]==true) {
        fill(255);
        ellipse(shot_x[i], shot_y[i], this.shot_size, this.shot_size);
      }
    }

  }

  // 移動
  move() {
    // aと左矢印で左に移動
    if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
      this.moveLeft();
    }
    // dと右矢印で右に移動
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
      this.moveRight();
    }

    // y座標
    this.dy -= this.g;
    this.y += this.dy;

    this.adjustMove();
  }

  // 右移動
  moveRight() {
    this.x += 2;
    this.rightward = true;
  }

  // 左移動
  moveLeft() {
    this.x -= 2;
    this.rightward = false;
  }

  // ジャンプ
  jump() {
    this.dy += 17;
  }

  // p5jsに認識させるkeyPressedメソッド
  keyPressed() {
    // wでジャンプ
    if (keyCode === 87 || keyCode == UP_ARROW) {
      this.jump();  
    }
    //スペースで射撃
    if(keyCode == 32) {
      this.shoot();
    }

  }

  //弾の生成
  shoot() {
    //this.shot_alive_flag[this.next_alive_shot_num] = true;
    //this.shot_x[this.next_alive_shot_num] = this.x;
    //this.shot_y[this.next_alive_shot_num] = this.y+this.h/2;
    shot_alive_flag[this.next_alive_shot_num] = true;
    shot_x[this.next_alive_shot_num] = this.x;
    shot_y[this.next_alive_shot_num] = this.y+this.h/2;

    if(this.rightward == false) {
      this.shot_speed_x[this.next_alive_shot_num] = -10;
    } else {
      this.shot_speed_x[this.next_alive_shot_num] = 10;
    }
    this.next_alive_shot_num = this.next_alive_shot_num+1;
    if(this.next_alive_shot_num>=10) {
      this.next_alive_shot_num = 0;
    }
    
  }


  //打った弾の状態更新
  shooting() {
    for(let i = 0; i < 10; i++) {
      if(shot_alive_flag[i]==true) {
        //this.shot_x[i] = this.shot_x[i]+this.shot_speed_x[i];
        shot_x[i] = shot_x[i]+this.shot_speed_x[i];
      }
    }

    for(let i = 0; i < 10;i++) {
      if(shot_x[i] > cm.stageWidth || shot_x[i] < this.shot_size/2) {
        shot_alive_flag[i] = false;
      }
    }
  }

}