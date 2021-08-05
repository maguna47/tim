class Stage1 extends Stage {
  constructor() {
    super();
    this.var1 = random();
    this.var2 = random();
    this.var3 = random();
    this.ground = this.createObj(Ground, 0, -cm.groundHeight, cm.gameWidth, cm.groundHeight);

    this.block1 = this.createObj(Block, 200, 0, 100, 100);
    this.block2 = this.createObj(Block, 300, 0, 100, 200);
    this.block3 = this.createObj(Block, 400, 0, 100, 300);
    this.block4 = this.createObj(Block, 500, 150, 100, 50);
    this.block5 = this.createObj(Block, 600, 50, 100, 50);

    this.moveBlock1 = this.createObj(MoveBlock, 300, 400, 50, 10, /*limit =*/300, 1);
    this.moveBlock2 = this.createObj(MoveBlock, 600, 400, 50, 10, /*limit =*/100, 0);

    //this.Spike1 = this.createObj(Spike, 225, 100);
    this.Spike2 = this.createObj(Spike, 150, 0);

    this.Lava1 = this.createObj(Lava, 600, 0, 200);

    if(this.var1 >= 0 && this.var1 < 0.34) {
      this.enemy1 = this.createObj(Enemy, 950, 25);
    } else if(this.var1 < 0.67){
      this.enemy2 = this.createObj(Enemy, 950, 375);
    } else {
      this.enemy3 = this.createObj(Enemy, 950, 500);
    }

    if(this.var2 >= 0 && this.var2 < 0.34) {
      this.enemy4 = this.createObj(Enemy, 250, 125);
    } else if(this.var2 < 0.67){
      this.enemy5 = this.createObj(Enemy, 350, 225);
    } else {
      this.enemy6 = this.createObj(Enemy, 450, 325);
    }

    if(this.var3 >= 0 && this.var3 < 0.34) {
      this.enemy7 = this.createObj(Enemy, 25, 625);
    } else if(this.var3 < 0.67){
      this.enemy8 = this.createObj(Enemy, 25, 575);
    } else {
      this.enemy9 = this.createObj(Enemy, 25, 525);
    }

    //this.drawGameoverScreen();
  }
}