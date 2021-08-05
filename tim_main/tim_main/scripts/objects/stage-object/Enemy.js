class Enemy extends GameObject{
    constructor(x, y) {
        super(x, y);
        this.size = 50;

        this.isAlive = true;
        Enemys_cnt++;
    }
    display() { //表示と判定
        if(this.isAlive) {
            fill(0, 200, 200);
            ellipse(this.x, this.y, this.size, this.size);
        }
        this.judge();
    }
    move() {
        //do nothing
    }
    judge() {
        for(let i = 0; i < 10;i++) {
            if(this.isAlive && dist(shot_x[i], shot_y[i], this.x, this.y) < 60) {
                this.isAlive = false;
                shot_alive_flag[i] = false;
                Enemys_cnt--;
            }
        }
    }
    attack() {
        
    }
}

class JumppingEnemy extends Enemy {
    constructor(x0, y0) {
        super(x0, y0);
        this.h = 5;
        this.t = 0;
    }
    
    move() {
        this.y += abs(h*sin(PI/6 * this.t)); //hの高さで跳ねる
        this.t++;
    }
}

