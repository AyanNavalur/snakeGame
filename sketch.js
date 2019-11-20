var s;
var scl = 20;

var food;

function setup() {
	createCanvas(600, 600);
	s = new Snake();
	frameRate(5);
	pickLocation();
}

function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);

	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}


function draw() {
	background(51);
	//scale(scl);
	if(s.eat(food)) {
		pickLocation();
		s.grow();
	}
	//s.death();
	s.update();

	s.show();
	s.death();



	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl)
}

function keyPressed() {
	if (keyCode === UP_ARROW && s.yspeed !== 1) {
		s.dir(0, -1);
	}
	else if (keyCode === DOWN_ARROW && s.yspeed !== -1) {
		s.dir(0 ,1);
	}
	else if (keyCode === RIGHT_ARROW && s.xspeed !== -1) {
		s.dir(1, 0);
	}
	else if (keyCode === LEFT_ARROW && s.xspeed !== 1) {
		s.dir(-1 ,0);
	}
}
