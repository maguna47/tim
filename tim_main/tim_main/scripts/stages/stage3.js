class Stage3 extends Stage {
    constructor() {
      super();
      this.ground = this.createObj(Ground, 0, -cm.groundHeight, cm.gameWidth, cm.groundHeight);
  
      this.block1 = this.createObj(Block, 300, 450, 100, 30);
      this.block2 = this.createObj(Block, 100, 0, 100, 100);
      this.block3 = this.createObj(Block, 600, 200, 100, 30);
      this.block4 = this.createObj(Block, 880, 0, 30, 70);
      this.block5 = this.createObj(Block, 880, 100, 120, 30);
  
      this.moveBlock1 = this.createObj(MoveBlock, 200, 300, 50, 10, /*limit =*/100, 0);
      this.moveBlock2 = this.createObj(MoveBlock, 400, 150, 50, 10, /*limit =*/150, 1);
      this.moveBlock3 = this.createObj(MoveBlock, 400, 200, 50, 10, /*limit =*/150, 1.5);
  
      this.enemy1 = this.createObj(Enemy, 750, random(400,500));
      this.enemy2 = this.createObj(Enemy, 50, random(300, 550));
      this.enemy3 = this.createObj(Enemy, 950, 50);
      this.enemy4 = this.createObj(Enemy, 970, random(300, 500));

      this.Lava1 = this.createObj(Lava, 300, 0, 400);

    }
  }