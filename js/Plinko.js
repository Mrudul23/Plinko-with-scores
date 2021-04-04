class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic: true
        }
        this.r = 10;
        this.image = loadImage("plinko.png")
        this.body = Bodies.circle(x, y, this.r, options);

        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        imageMode(CENTER);
        image(this.image,0,0,40,30)
        pop();
    }

};