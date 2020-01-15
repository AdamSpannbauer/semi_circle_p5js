let w = 640;
let h = 480;
let angle = 0
let delta_angle = 0.5

function setup () {
	angleMode(DEGREES);
	createCanvas(w, h);
}

function draw() {
	clear();
	background(150);
	translate(w / 2, h / 2);
	
	let d = 25;
	let delta_d = 25;

	fill(200, 200, 200);
	strokeWeight(0);

	noFill();
	for (i = 0; i < 15; i++) {
		rotate(angle + i);

		strokeWeight(10);
		arc(0, 0, d, d, 180, 0);
		d += delta_d;
	}

	angle += delta_angle;
}
