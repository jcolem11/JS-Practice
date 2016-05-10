 // $(function() {
	// var canvas = document.getElementById("canvas");
	// var ctx = canvas.getContext("2d");
	// console.log('canvas function');
	// ctx.fillStyle = "green";
	// ctx.fillRect(10, 10, 100, 100);
 //  });

var yPos = 0
var angle = 0

function setup() {
	createCanvas(500,500)
	background('#ffffff')
	angleMode(DEGREES)
	frameRate(30)
}

function draw() {
  background('#ffffff')
  var x = (cos(angle) * width/2) + width/2
  var y = (sin(angle) * height/2) + height/2
  var innerX = (x/2)+ width/4
  var innerY = (y/2)+ height/4 
  console.log({x,y})
  line (x,y,innerX,innerY)
  point(x,y)
  point(innerX,innerY)
  angle+=0.5

}