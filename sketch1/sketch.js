var x = 300;

function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(250, 170, 239);

	const items = [
		{
			color: color(191, 51, 50),
			x: x,
			y: 100
		},
		{
			color: color(141, 30, 181),
			x: x,
			y: 200
		},
		{
			color: color(94, 215, 56),
			x: x,
			y: 300
		},
		{
			color: color(48, 138, 168),
			x: x,
			y: 400
		},
		{
			color: color(173, 156, 50),
			x: x,
			y: 500
		},
	];

	items.forEach(function (item) {
		fill(item.color);
		noStroke();
		ellipse(item.x, item.y, 80, 80);
	});
}
