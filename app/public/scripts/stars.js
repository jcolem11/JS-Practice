
// Rain Drop Object
function Star (x,y,z) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.originalX = this.x;
  this.originalY = this.y;
  this.angle = getRandomArbitrary(0,90);
}

Star.prototype.update = function(){
  fill(238, 68, 57);
  push();
  translate(this.x,this.y);
  rotate(this.angle);
  this.angle+=0.1;
  var size = 9/this.z;
  rect(0,0,size,size);
  pop();

  // parallax
  var midY = windowHeight/2;
  var midX = windowWidth/2;
  this.y = (this.originalY + (midY - mouseY) * 1/(this.z));
  this.x = (this.originalX + (midX - mouseX) * 1/(this.z));
}

var yPos = 0;
var angle = 0;
var stars = [];
var elapsedTime = 0;

// my functions
function makeStars(){
	var amount = Math.floor(Math.random() * (1000 - 1) + 100);
	for (i=0; i < amount; i++){

		var x = getRandomArbitrary(-(windowWidth * 1.5), windowWidth * 1.5);
		var y = getRandomArbitrary(-(windowHeight * 1.5), windowHeight * 1.5);
		var z = Math.floor(Math.random() * (4 - 1) + 1);
		let newStar = new Star(x,y,z)
		stars.push(newStar)
	}
}

function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	frameRate(60);
  rectMode(CENTER);

  makeStars();
}

function draw() {
  background(253, 255, 158);
	for (i =0; i < stars.length; i++){
      var s = stars[i];
      s.update();
	}
}
