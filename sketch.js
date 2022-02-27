const res = 10;
let rays = [];
let walls = [];

function setup() {
  stroke(255);
  createCanvas(600, 600);
  createVecRays();
  walls.push(new Wall(450, 200, 450, 400, false));
}

function draw() {
  background(20);
  for (let r of rays) {
    r.show();
  }
}

function createVecRays() {
  for (let i = 0; i < 360; i += 45) {
    rays.push(new VecRay(i));
  }
}
