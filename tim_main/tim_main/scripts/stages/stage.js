class Stage {
  constructor() {
    this.objs = new Array();
  }

  display() {
    // 背景・外枠
    background(255);
    fill(255);
    rect(0, -cm.groundHeight, cm.gameWidth, cm.gameHeight);

    for(let i = 0; i < this.objs.length; i++) {
      this.objs[i].display();
    }
  }

  update() {
    for(let i = 0; i < this.objs.length; i++) {
      this.objs[i].update();
    }
  }

  // オブジェクトを作ってobjsにpushするメソッド
  // createObj(クラス, 引数1, 引数2, ...)
  createObj(Class, ...theArgs) {
    let rtn = Object.create(new Class(...theArgs));
    
    this.objs.push(rtn);

    return rtn;
  }
}