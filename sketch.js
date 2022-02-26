const res = 10;
let rs = [];

function setup() {
  createCanvas(600, 600);
  createRays();
}

function draw() {
  background(20);
  for (r of rs) {
      r.show();
      text(`${r.x},${r.y}`, 20, 20);
  }
}

function createRays() {
  for (let i = 0; i < (width); i += res) {
    rs.push(new Ray(i, 0));
    rs.push(new Ray(width - 1, i));
    rs.push(new Ray(i + res, height - 1));
    rs.push(new Ray(0, i + res));
  }
}

class Ray {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    let mX = constrain(mouseX, 0, width);
    let mY = constrain(mouseY, 0, height);
    stroke(255);
    line(this.x, this.y, mX, mY);
  }/*
  checkColl(walls) {
    for (w of walls) {
      //check collision
    }
  }*/
}

class Wall {

}