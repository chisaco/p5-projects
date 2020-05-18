function setup() {
  createCanvas(400, 400);
  background(220);
  
}

function draw() {
  fill(100, frameCount*100%360,300);
  noStroke();
  circle(frameCount *6.6%400, frameCount *5.9 %400, frameCount%30);
}