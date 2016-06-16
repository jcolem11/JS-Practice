

function PressPoint (x,y) {
	this.x = x;
	this.y = y;
}

var pressPoints = [];

// my functions

function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

//

function setup() {
	createCanvas(windowWidth,windowHeight);
	angleMode(DEGREES);
	frameRate(60);

  for (i =0; i < 50; i++){
		for(j=0; j < 50; j ++){
    var newPoint = new PressPoint(i * 10,j * 10);
    pressPoints.push(newPoint);
	}
}
}

function draw() {
	background(254, 79, 110);
  for (i =0; i < pressPoints.length; i++){
    var p = pressPoints[i];
		var d = dist(mouseX, mouseY, p.x, p.y);

		var size = 5;
		noStroke();
    fill(246, 246, 246);
		push();
		rectMode(CENTER);
		if (d <= 50){
			size = (d/50) * size ;
			fill(180, 150, 246);
			var degreeDelta = atan2(mouseY - p.y, mouseX - p.x);
			translate(p.x, p.y);
			rotate(45);
			// shearX(PI/4.0);
			// shearY(PI/4.0);
			rect(p.x,p.y,size,size);
		}else{

			rect(p.x,p.y,size,size);
		}
		pop();
   }
}
