class Stage4 extends Stage {
    constructor() {
      super();
      this.ground = this.createObj(Ground, 0, -cm.groundHeight, cm.gameWidth, cm.groundHeight);
  
      this.block1 = this.createObj(Block, 100, 300, 100, 30);
      this.block2 = this.createObj(Block, 200, 250, 100, 30);
      this.block3 = this.createObj(Block, 800, 400, 100, 30);
      this.block4 = this.createObj(Block, 0, 525, 110, 20);
      this.block5 = this.createObj(Block, 90, 545, 20, 40);
      this.block6 = this.createObj(Block, 90, 600, 20, 50);
  
      this.moveBlock1 = this.createObj(MoveBlock, 700, 500, 50, 10, /*limit =*/50, 0);
      this.moveBlock2 = this.createObj(MoveBlock, 320, 170, 50, 10, /*limit =*/75, 0);
      this.moveBlock3 = this.createObj(MoveBlock, 550, 350, 50, 10, /*limit =*/170, 1);
  
      this.enemy1 = this.createObj(Enemy, 750, random(50,200));
      this.enemy2 = this.createObj(Enemy, 25, 600);
      this.enemy3 = this.createObj(Enemy, 950, random(450, 500));
      this.enemy4 = this.createObj(Enemy, random(25,50), random(100, 150));
      this.enemy5 = this.createObj(Enemy, random(400, 600), random(200, 250));

    }
  }