class Stage5 extends Stage {
    constructor() {
      super();
      this.ground = this.createObj(Ground, 0, -cm.groundHeight, cm.gameWidth, cm.groundHeight);
  
      this.block1 = this.createObj(Block, 900, 75, 100, 20);
      this.block2 = this.createObj(Block, 900, 115, 20, 50);
      this.block1 = this.createObj(Block, 900, 165, 100, 20);

      this.block1 = this.createObj(Block, 0, 555, 100, 20);
      this.block2 = this.createObj(Block, 80, 595, 20, 50);
      this.block1 = this.createObj(Block, 0, 625, 100, 20);
  
      this.moveBlock1 = this.createObj(MoveBlock, 200, 150, 50, 10, /*limit =*/100, 0);
      this.moveBlock2 = this.createObj(MoveBlock, 600, 400, 50, 10, /*limit =*/50, 0);
      this.moveBlock3 = this.createObj(MoveBlock, 300, 300, 50, 10, /*limit =*/50, 1.5);
      this.moveBlock3 = this.createObj(MoveBlock, 500, 300, 50, 10, /*limit =*/125, 1);
      this.moveBlock3 = this.createObj(MoveBlock, 700, 350, 50, 10, /*limit =*/50, 1.5);
  
      this.enemy1 = this.createObj(Enemy, 975, 125);
      this.enemy2 = this.createObj(Enemy, 30, 600);
      this.enemy3 = this.createObj(Enemy, random(200, 250), random(400, 500));
      this.enemy4 = this.createObj(Enemy, random(50, 100), random(300, 400));
      this.enemy5 = this.createObj(Enemy, random(850,900), random(50,100));
      this.enemy6 = this.createObj(Enemy, random(25,900), random(50,500));

      this.Lava1 = this.createObj(Lava, 300, 0, 500);

    }
  }