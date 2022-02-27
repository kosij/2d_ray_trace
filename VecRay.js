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
