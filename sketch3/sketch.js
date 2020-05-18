function setup() {
	createCanvas(400, 400);
	background(120);
}

function draw() {
	noStroke();
	square(frameCount *80.1%400, frameCount  *5.1%400, frameCount%10);
}