class Stage2 extends Stage {
    constructor() {
      super();
      this.ground = this.createObj(Ground, 0, -cm.groundHeight, cm.gameWidth, cm.groundHeight);
  
      this.block1 = this.createObj(Block, 200, 0, 100, 450);
      this.block2 = this.createObj(Block, 900, 0, 100, 100);
      this.block3 = this.createObj(Block, 700, 0, 100, 400)
  
      this.moveBlock1 = this.createObj(MoveBlock, 150, 250, 50, 10, /*limit =*/200, 0);
      this.moveBlock2 = this.createObj(MoveBlock, 350, 250, 50, 10, /*limit =*/150, 0);
      this.moveBlock3 = this.createObj(MoveBlock, 550, 300, 50, 10, /*limit =*/100, 1);
  
      this.enemy1 = this.createObj(Enemy, 650, random(100,200));
      this.enemy2 = this.createObj(Enemy, random(50, 130), random(400, 500));
      this.enemy3 = this.createObj(Enemy, 950, random(150, 300));

    }
  }