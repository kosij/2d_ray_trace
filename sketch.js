const res = 10;
let rs = [];
let walls = [];

function setup() {
  stroke(255);
  createCanvas(600, 600);
  //createRays();
  createVecRays();
  walls.push(new Wall(450, 200, 450, 400, false));
}

function draw() {
  background(20);
  for (r of rs) {
    r.show();
  }

}

function createVecRays() {
  for (let i = 0; i < 360; i += 15) {
    rs.push(new VecRay(i));
  }
}

class VecRay {
  constructor(angle) {
    this.angle = angle;
    this.v = p5.Vector.fromAngle(radians(this.angle), sqrt(720000));
  }
  show() {
    let mX = constrain(mouseX, 0, width);
    let mY = constrain(mouseY, 0, height);
    stroke(255);
    for (let w of walls) {
      line(this.checkColl(w)[0], this.checkColl(w)[1], mX, mY);
    }

  }
  //check for a collision with a vertical wall using trig
  //returns new [x1,y1] of vecRay (doesnt change if no collision)
  checkColl(wall) {
    let a = wall.x1 - mouseX
    //check this.y increase when this.x increased by a
    let o = a * Math.tan(this.angle);

    let newX = mouseX + a;
    let newY = mouseY + o;
    if (newY === constrain(newY, wall.y1, wall.y2)) {
      return [newX, newY];
    } else {
      return [this.v.x + mouseX, this.v.y + mouseY];
    }
  }
}
class Wall {
  constructor(x1, y1, x2, y2, reflective) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.ref = reflective;
    stroke(255);
    line(x1, y1, x2, y2);
  }

  getX(y) {
    if (y === constrain(y, this.y1, this.y2)) {
      let m = (this.y2 - this.y1) / (this.x2 - this.x1);
      return ((y - this.y1) / m) + this.x1;
    }
    return null;
  }

  getY(x) {
    if (x === constrain(x, this.x1, this.x2)) {
      let m = (this.y2 - this.y1) / (this.x2 - this.x1);
      return m * (x - this.x1) + this.y1;
    }
    return null;
  }
}