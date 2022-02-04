function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220,100,200);
  
}
let x = 320;
let y = 180;
let xspeed = 15;
let yspeed = 23;

let r = 25;

function setup() {
  createCanvas(640, 640);
}

function draw() {
  background(200,400,100,500);
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }


}