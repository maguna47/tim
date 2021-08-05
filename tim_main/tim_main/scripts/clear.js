class Clear {
    constructor() {
      push();
      rectMode(CENTER);
      textAlign(CENTER, CENTER);
  
      this.titleText = new TextBox(
        "CLEAR!",
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
      background(255);
      this.titleText.display();
      this.subText.display();
    }
  
    mouseClicked() {
      mode = HOME;
    }
  }