function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  
  rectMode(CENTER);
  fill(0,255,0);
  

  strokeWeight(105);
  rect(200,150,150,150);
  fill(255,0,0);
  noStroke();
  ellipse(150,250,100,75);
}