var rectWidth = 80;
var rectHeight = 40;
var x;
var y;
var vx;
var vy;


function setup() {
  createCanvas(600,600);
  background(0);
  x = random(width-rectWidth);
  y = random(height-rectHeight);
  vx = random(-15, 15);
  vy = random(-15, 15);
}

function draw() {
  background(0);
  if (vx==0 ||vy==0) {
  vx= random(-15, 15);
  vy= random(-15, 15);
}
  movingRectangle ();
}

function movingRectangle () {
  rect(x, y, rectWidth, rectHeight);
  x=vx+x;
  y=vy+y;
  if (x>=width-rectWidth || x<=0) {
    vx=vx*-1;
  }
  if (y>=height-rectHeight || y<=0) {
    vy=vy*-1;
  }
}
