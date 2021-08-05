class GameObject {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.w = 0;
    this.h = 0;
  }

  // 左右の端のx座標，上下の端のy座標
  get leftX() { return this.x; }
  get rightX() { return this.x + this.w; }
  get topY() { return this.y + this.h; }
  get bottomY() { return this.y; }

  // objへの着地
  land(obj) {
    this.y = obj.topY;
    if(obj.constructor == MoveBlock) {
      this.dy = obj.step;
    } else {
      this.dy = 0;
    }
  }

  // objにぶつかっている(貫通しない)
  touchRight(obj) {
    if(this.rightX - obj.leftX <= 3) {
      this.x = obj.leftX - this.w;
    }
    this.dx = 0;
  }
  touchLeft(obj) {
    if(abs(this.leftX - obj.rightX) <= 2) {
      this.x = obj.rightX;
    }
  }

  static collision(obj, stage) {
    for (let i = 0; i < stage.objs.length; i++) {
      if (GameObject.isLanding(obj, stage.objs[i])) {
        obj.land(stage.objs[i]);
      }
      if(GameObject.isRighttouch(obj, stage.objs[i])) {
        obj.touchRight(stage.objs[i]);
      }
      if(GameObject.isLefttouch(obj, stage.objs[i])) {
        obj.touchLeft(stage.objs[i]);
      }
    }
  }

  // 着地判定
  // aがbに着地しているときtrue
  static isLanding(a, b) {
    return (
      (
        // x軸方向で重なっている
        (a.leftX >= b.leftX && a.leftX <= b.rightX)
        || (a.rightX >= b.leftX && a.rightX <= b.rightX)
      )
      // y軸方向
      && (
        a.bottomY - b.topY <= 0 &&
        a.bottomY - b.topY >= (a.dy != 0 ? a.dy : -1) &&
        a.dy <= 0)
    );
  }

  // 横の当たり判定
  // aがbに接触しているときtrue
  static isLefttouch(a, b) {
    return (
      (
        // y座標が被っているか
        (a.bottomY < b.topY && a.bottomY > b.bottomY)
        || (a.topY < b.topY && a.topY > b.bottomY)
      )
      && (
        (a.leftX < b.rightX && a.rightX > b.leftX)
      )
    );
  }
  static isRighttouch(a, b) {
    return (
      (
        // y座標が被っているか
        (a.bottomY < b.topY && a.bottomY > b.bottomY)
        || (a.topY < b.topY && a.topY > b.bottomY)
      )
      && (
        (a.rightX > b.leftX && a.leftX < b.rightX)
      )
    );
  }

  // オブジェクトの画像(p5.Element型)を読み込む
  // image(これの返り値, x座標, y座標)で表示できる
  loadImage2(path, w, h) {
    let ret = createGraphics(w, h);
    ret.loadImage(path, img => {
      ret.image(img, 0, 0, w, h);
    });
    ret.scale(1, -1);
    ret.translate(0, -h);
    return ret;
  }

  // 画面の外に出ないよう座標や速度を調整するメソッド
  adjustMove() {
    // x方向
    if(this.leftX < 0 || this.rightX > cm.stageWidth) {
      this.x = (this.leftX < 0 ? this.x = 0 : cm.stageWidth - this.w);
      this.dx = 0;
    }

    // y方向
    if(this.bottomY < 0 || this.topY > cm.stageHeight) {
      this.y = (this.bottomY < 0 ? this.y = 0 : cm.stageHeight - this.h);
      this.dy = 0;
    }
  }

  update() {
    // do nothing
  }
}