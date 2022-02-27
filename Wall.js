class Wall {
    constructor(x1, y1, x2, y2, reflective) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.ref = reflective;
        stroke(255);
        line(this.x1, this.y1, this.x2, this.y2);
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