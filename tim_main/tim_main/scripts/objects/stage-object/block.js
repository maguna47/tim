class Block extends GameObject {
  constructor(x, y, w, h) {
    super(x, y);
    this.w = w;
    this.h = h;
  }

  display() {
    fill(200);
    rect(this.x, this.y, this.w, this.h);
    for(let i = 0; i < 10; i++) {
      if((shot_x[i] >= this.x && shot_x[i] <= this.x + this.w) && (shot_y[i] >= this.y && shot_y[i] <= this.y + this.h)) {
        shot_alive_flag[i] = false;
      }
    }
  }
}

class MoveBlock extends Block {
  constructor(x, y, moveW, moveH, limit, judge) {
    super(x, y);
    this.w = moveW;
    this.h = moveH;

    this.mx = x;
    this.my = y;

    //動く範囲
    this.limit = limit;

    //動く速さ
    this.step = 1;

    //x,yどちらに動くかの判定
    this.judge = judge;
  }

  display() {
    fill(100);
    rect(this.x, this.y, this.w, this.h);
  }

  update() {
    if(this.judge == 1) {
      this.moveX();
    } else {
      this.moveY();
    }
  }

  moveX() {
    if(this.x >= this.mx + this.limit || this.x <= this.mx - this.limit) {
      this.step = this.step * -1;
    }
    this.x += this.step;
  }

  moveY() {
    if(this.y >= this.my + this.limit || this.y <= this.my - this.limit) {
      this.step *= -1;
    }
    this.y += this.step;
  }
}

class Spike extends GameObject {
  constructor(x, y) {
    super();
    //とげの座標
    this.x = x;
    this.y = y;
    this.h = 50;
    this.w = 50;
  }

  display() {
    fill(0);
    triangle(this.x, this.y, this.x+this.w, this.y, this.x+this.w/2, this.y+this.h);
  }
}

class Lava extends GameObject {
  constructor(x, y, w) {
    super();
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = 10;
  }

  display() {
    fill(200, 0, 0);
    rect(this.x, this.y, this.w, this.h);
  }

  /*inLava() {
    if((this.lava.x <= this.player.x && this.lava.x + this.lava.w >= this.player.x) && (this.lava.y <= this.player.y && this.lava.y + this.lava.h <= this.player.y)) {
      return true;
    }
  }
  */
}