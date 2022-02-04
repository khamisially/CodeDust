function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255,255,100,2);
  stroke(255);
  strokeWeight(30);
  noFill();
  
  if (mouseX > 300) {
    fill(255,0,200);
  }
  ellipse(300,200,100,100);
}