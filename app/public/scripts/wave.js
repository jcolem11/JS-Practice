
var globalAngle = 0.0;
var canvasSize = 400;

function thing (x,y) {
  this.x = x;
  this.y = y;
  this.angle = globalAngle;
}

var data = [];

// my functions

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(237, 81, 104);
  angleMode(DEGREES);
  frameRate(60);

  var startX = windowWidth/2 - (canvasSize/2);
  var startY = windowHeight/2 - (canvasSize/2);
  var numX = canvasSize/10;
  var numY = canvasSize/10;

  for (x =0; x < numX; x++){
    for (y =0; y < numY; y++){
      var newX = (x * 10) + startX;
      var newY = (y * 10) + startY;
      var d = new thing(newX,newY);
      // This gives a cool effect globalAngle+ = 1;
      //       d.angle = newX * newX + newY * newY;

      d.angle = newX *1.9 - newY* 1.2 ;
      data.push(d);
    }
  }
}

function draw() {
  background(237, 81, 104);
  for (i=0; i < data.length;i++){
    var p = data[i];
    noStroke();

    //color
    var brightColor = color(255, 255, 255);
    var deepColor = color(240, 240, 240);

    var finalColor = lerpColor(brightColor,deepColor,sin(p.angle));
    fill(finalColor);

    var newy = (20 * sin(p.angle * 0.7) + p.y);
    p.angle+=5;
    ellipse(p.x,newy,10,10);
  }
}
