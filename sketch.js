console.log('ml5 version:', ml5.version);

let classifier;
let resultsP;

var button;

var s;
var scl = 20;

var food;

function preload() {
	const options = {probabilityThreshold: 0.95};
	classifier = ml5.soundClassifier('SpeechCommands18w', options);

}

function setup() {
	createCanvas(600, 600);
	classifier.classify(gotResults);
	resultsP = createP('waiting...')
	resultsP.style('font-size', '32pt')
	s = new Snake();
	frameRate(5);
	pickLocation();
}

function gotResults(error, results) {
	if (error) {
		console.log('Error occured');
		console.error('error');
	}
	console.log(results[0].label, results[0].confidence);
	resultsP.html(`${results[0].label}`);
	button = results[0].label;

	if (button === 'up' && s.yspeed !== 1) {
		s.dir(0, -1);
	}
	else if (button === 'down' && s.yspeed !== -1) {
		s.dir(0 ,1);
	}
	else if (button === 'right' && s.xspeed !== -1) {
		s.dir(1, 0);
	}
	else if (button === 'left' && s.xspeed !== 1) {
		s.dir(-1 ,0);
	}
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

// function keyPressed() {
// 	if (keyCode === UP_ARROW && s.yspeed !== 1) {
// 		s.dir(0, -1);
// 	}
// 	else if (keyCode === DOWN_ARROW && s.yspeed !== -1) {
// 		s.dir(0 ,1);
// 	}
// 	else if (keyCode === RIGHT_ARROW && s.xspeed !== -1) {
// 		s.dir(1, 0);
// 	}
// 	else if (keyCode === LEFT_ARROW && s.xspeed !== 1) {
// 		s.dir(-1 ,0);
// 	}
// }
