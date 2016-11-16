
var globalAngle = 0.0;
var canvasSize = 400;
var startXL = 0;
var startXR = 0;

function thing (x,y) {
  this.x = x;
  this.y = y;
  this.column = (1 * -1);
  this.angle = this.y * 5;
}

var data = [];

// my functions

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getScreenMidPointX(){
  return windowWidth/2;
}

//

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(246, 246, 246);
  angleMode(DEGREES);
  frameRate(60);

  var startX = windowWidth/2 - (canvasSize/2) + 50;
  var startY = windowHeight/2 - (canvasSize/2);

  for (x =0; x < 2; x++){
    for (y =0; y < 10; y++){
      var newY = (y * 30) + startY;
      var d = new thing(startX,newY);
      if (x === 1){
        d.column = 1;

        console.log("column right " + x);
      }
      console.log("column left " + x);
      data.push(d);
    }
  }
}

function draw() {
  background(254, 79, 110);
  for (i=0; i < data.length;i++){
    var p = data[i];
    noStroke();
    //left or right column
    var LR = p.angle;
    var lightColor = color(255, 255, 255);
    var deepColor = color(255, 255, 255);
    if (p.column == -1){
      LR = 360 - p.angle;
      lightColor = color(0, .20*255, .31 * 255);
      deepColor = color(.08* 255, .33*255, .45*255);
    }
    var finalColor = lerpColor(lightColor,deepColor,sin(LR));
    fill(finalColor);

    var newX = (60 * sin(LR) + p.x);
    p.angle += 3;
    p.z += 5;
    ellipse(newX,p.y,20,20);
  }
}
