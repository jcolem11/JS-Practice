
var angleG = 0.0;

function thing (x,y) {
  this.x = x;
  this.y = y;
  this.angle = angleG;
}

var data = [];

// my functions

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//

function setup() {
  createCanvas(400,400);
  background(246, 246, 246);
  angleMode(DEGREES);
  frameRate(60);
  var numX = 400/10;
  var numY = 400/10;

  for (x =0; x < numX; x++){
    for (y =0; y < numY; y++){
      var newX = x * 10;
      var newY = y * 10;
      var d = new thing(newX,newY);
      // This gives cool effect angleG+ = 1;
      //       d.angle = newX * newX + newY * newY;

      d.angle = newX + newY * 1.5;
      data.push(d);
    }
  }
}

function draw() {
  background(246, 246, 246);
  for (i=0; i < data.length;i++){
    var p = data[i];
    noStroke();

    //color
    var brightColor = color(204, 87, 107);
    var deepColor =  color(165, 70, 86);

    var finalColor = lerpColor(brightColor,deepColor,sin(p.angle));
    fill(finalColor);

    var newy = (20 * sin(p.angle)) + p.y ;
    p.angle++;
    ellipse(p.x,newy,10,10);
  }
}
