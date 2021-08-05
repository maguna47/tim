class Ground extends GameObject {
  constructor(x, y, w, h) {
    super(x, y);
    this.w = w;
    this.h = h;
  }

  display() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
}