class GameOver {
    constructor() {
      this.titleText = new TextBox(
        "GAME OVER...",
        windowWidth/2,
        windowHeight/2,
        50
      );
  
      this.subText = new TextBox(
        "click to home",
        windowWidth/2,
        windowHeight/2 + 80,
        25
      );
    }
  
    display() {
      push();
      background(255);
      fill(0);
      this.titleText.display();
      this.subText.display();
      pop();
    }
  
    mouseClicked() {
      mode = HOME;
      timer = 50;
    }
}