var x = 300;

function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(250, 170, 239);

	let red = color(191,51,50); 
	fill(red);
	noStroke();
	ellipse(x, 100, 80, 80); 
	
	let violet = color(141,30,181	); 
	fill(violet);
	noStroke();
	ellipse(x, 200, 80, 80); 

	let green = color(94,215,56); 
		
	fill(green);
	noStroke();
	ellipse(x, 300, 80, 80); 

	let blue = color(48,138,168	); 
	fill(blue);
	noStroke();
	ellipse(x, 400, 80, 80); 

	let yellow = color(173,156,50); 
	fill(yellow);
	noStroke();
	ellipse(x, 500, 80, 80); 
	//x++;
}

function draw_ellipse(color, x, y) {
	fill(color);
	noStroke();
	ellipse(x, y, 80, 80); 
}
