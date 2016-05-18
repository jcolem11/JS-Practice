
// Rain Drop Object
function RainDrop (x,y,z) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.height = getRandomArbitrary(25,80);
	this.originalX = this.x;
}

var yPos = 0;
var angle = 0;
var drop = new RainDrop(0,0);
var drops = [];
var elapsedTime = 0;

// my functions
function makeRain(){
	var amount = Math.floor(Math.random() * (20 - 1) + 1);
	for (i=0; i < amount; i++){
		var x = Math.floor(Math.random() * (2000 - 1) + 1);
		var y = Math.floor(Math.random() * (200 - 1) + 1) * -1;
		var z = Math.floor(Math.random() * (4 - 1) + 1);
		let newDrop = new RainDrop(x,y,z)
		drops.push(newDrop)
	}
}

function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

//

function setup() {
	createCanvas(windowWidth,windowHeight);
	angleMode(DEGREES);
	frameRate(60);
	drops.push(drop);
}

function draw() {
	background(15, 19, 62);
	var resetTime = 0.1;
	elapsedTime++;
	if ((elapsedTime/60) > resetTime){
		makeRain()
		elapsedTime = 0
	}

	for (i =0; i < drops.length; i++){
		var d = drops[i];
		//	remove RainDrop
		if (d.y+50 > windowHeight + 100){
		var index = drops.indexOf(d);
		if (index > -1) {
			drops.splice(index, 1);
			console.log("Removing drop");
		 }
	 }
		d.y+= 40;
		var midX = windowWidth/2;
		d.x = (d.originalX + (midX - mouseX) * 1/(d.z));

		fill(246, 246, 246,100/d.z);
		noStroke();
		var size = 5;
		rect(d.x,d.y,size,80*(1/d.z));
	}
}
