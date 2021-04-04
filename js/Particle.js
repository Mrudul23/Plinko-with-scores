class Particle {

    constructor(x, y, r) {
        this.hue = random(360)
        var options = {
            restitution: 0.4
        }
        this.r = r;

        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.hue, 255, 255);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }

};