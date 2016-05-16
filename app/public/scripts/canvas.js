
// Rain Drop Object
function RainDrop (x,y) {
	this.x = x;
	this.y = y;
}

var yPos = 0;
var angle = 0;
var drop = new RainDrop(0,0);
var drops = [];
var elapsedTime = 0;

// my functions
function makeRain(){
	var amount = Math.floor(Math.random() * (50 - 1) + 1);
	console.log("amount added")
	console.log(amount);
	for (i=0; i < amount; i++){
		var x = Math.floor(Math.random() * (2000 - 1) + 1);
		var y = Math.floor(Math.random() * (200 - 1) + 1) * -1;
		let newDrop = new RainDrop(x,y)
		drops.push(newDrop)
	}
}
//

function setup() {
	createCanvas(windowWidth,windowHeight);
	background('#0D1257');
	angleMode(DEGREES);
	frameRate(60);
	drops.push(drop);
}

function draw() {
	background('#0D1257');
	var resetTime = 0.2;
	elapsedTime++;
	if ((elapsedTime/60) > resetTime){
		makeRain()
		elapsedTime = 0
	}
	for (i =0; i < drops.length; i++){
		var d = drops[i];
		d.y+= 10;
		fill("#FE4F6E");
		noStroke();
		rect(d.x,d.y,5,5);
	}
}
