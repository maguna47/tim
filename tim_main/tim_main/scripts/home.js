class Home {
    constructor() {
      this.buttonToStart = new Button(
        "START", 
        windowWidth / 2,
        windowHeight / 2 + 80, 
        25);
  
      this.titleText = new TextBox(
        "ティムくん",
        windowWidth/2,
        windowHeight/2,
        50
      );
    }
  
    display() {
      push();
      rectMode(CENTER);
      textAlign(CENTER, CENTER);
      background(255);
      this.titleText.display();
      this.buttonToStart.display();
      pop();
    }
  
    mouseClicked() {
      print(mouseX);
      print(mouseY);
      print("");
      if(this.buttonToStart.isClicked) {
        // ゲーム画面に遷移
        mode = GAME;
        stageNum = 1;
      }
    }
  }
  
  class TextBox {
    constructor(message, x, y, size) {
      this.message = message;
      this.x = x;
      this.y = y;
      this.size = size;
      this.padding = 30;
      this.font = loadFont("assets/PixelMplus-20130602/PixelMplus12-Regular.ttf");
    }
  
    get w() {
      textSize(this.size);
      return textWidth(this.message) + this.padding;
    }
  
    get h() {
      return this.size + this.padding;
    }
  
    display() {
      push();
      rectMode(CENTER);
      textAlign(CENTER, CENTER);
      this.displayMessage();
      pop();
    }
    
    displayMessage() {
      fill(0);
      textSize(this.size);
      textFont(this.font);
      text(this.message, this.x, this.y - textDescent()/2);
    }
  }
  
  class Button extends TextBox {
    get isClicked() {
      if(mouseX >= this.x - this.w/2 && mouseX <= this.x + this.w/2 && mouseY >= this.y - this.h/2 && mouseY <= this.y + this.h/2) {
        return true;
      }
      return false;
    }
  
    display() {
      this.displayBox();
      this.displayMessage();
    }
  
    displayBox() {
      fill(255);
      stroke(0);
      rect(this.x, this.y, this.w, this.h);
    }
  }