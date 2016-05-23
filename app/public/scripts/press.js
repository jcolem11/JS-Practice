

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
  background(254, 79, 110);
	angleMode(DEGREES);
	frameRate(60);

  for (i =0; i < 1000; i++){
    var x = getRandomArbitrary(0,windowWidth);
    var y = getRandomArbitrary(0,windowHeight);
    var newPoint = new PressPoint(x,y);
    console.log(newPoint);

    pressPoints.push(newPoint);
   }
}

function draw() {
  for (i =0; i < pressPoints.length; i++){
    var p = pressPoints[i];
    fill(246, 246, 246);
    noStroke();
    ellipse(p.x,p.y,10,10);
   }
}
