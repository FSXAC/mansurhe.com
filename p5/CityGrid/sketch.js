var p = new Array();
var side = 100;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.class("pcanvas");

    // setup drawing
    smooth();
    strokeWeight(1);
    background(0);
    stroke(255)

    // particle test
    for (var i = 0; i < 8; i++) {
        append(p, new Particle(
            createVector(width/2-side/2+i*side/8+side/16, height/2-side/2), PI
        ));
    }
    for (var i = 0; i < 8; i++) {
        append(p, new Particle(
            createVector(width/2-side/2, height/2-side/2+i*side/8+side/16), 3*PI/2
        ));
    }
    for (var i = 0; i < 8; i++) {
        append(p, new Particle(
            createVector(width/2-side/2+i*side/8+side/16, height/2+side/2-side/8), 0
        ));
    }
    for (var i = 0; i < 8; i++) {
        append(p, new Particle(
            createVector(width/2+side/2-side/8, height/2-side/2+i*side/8+side/16), PI/2
        ));
    }
}


function draw() {
    // one way of writing for loops in JS
    // for (part of p) {
    //     part.step();
    // }
    for (var i = 0; i < p.length; i++) {
        p[i].step();
        if (p[i].blocked) p.splice(i, 1);
    }
    rectMode(CENTER);
    fill(0);
    rect(width/2, height/2, side, side);
}

// particle class
function Particle(new_location, new_angle) {
    // motion attributes
    this.location = new_location;
    this.angle = new_angle;
    this.speed = 3;

    // status
    this.blocked = false;
    this.life = random(1000, 3000);

    // one step into future
    this.step = function() {
        // save previous location for drawing
        var old_x = this.location.x;
        var old_y = this.location.y;

        // move current particle
        this.location.x += this.speed * sin(this.angle);
        this.location.y += this.speed * cos(this.angle);

        // move current particle only on the 8 directions
        // var angle_prime = PI / 4 * ceil(4 * this.angle / PI);
        // this.location.x += this.speed * sin(angle_prime);
        // this.location.y += this.speed * cos(angle_prime);

        // change angle randomly
        // this.angle += random(-0.01, 0.01);
        var n = random(200);
        this.angle += (n > 198) ? PI/4 : (n < 1) ? -PI/4 : 0;

        // draw line
        line(old_x, old_y, this.location.x, this.location.y);

        // delete itself if it hits window border
        if (this.location.x < 1 ||
            this.location.x >= width - 1 ||
            this.location.y < 1 ||
            this.location.y >= height - 1) {
                this.blocked = true;
                return;
        }

        // counts down life
        if (this.life > 0) {
            this.life--;
        } else {
            this.blocked = true;
            return;
        }
    }
}

function mouseClicked() {
    // particle test
    for (var i = 0; i < 4; i++) {
        append(p, new Particle(createVector(mouseX, mouseY), i * 2*PI / 4));
    }
}
