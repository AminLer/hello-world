
var xoff = 0;
var yoff = 1000;
var x = 300;
var y = 200;
function setup() {
  createCanvas(600, 400);
}

function draw() {
background(51, 130);
  //x = random(width);
  x = map(noise(xoff), 0, 1, 0, width);
  y = map(noise(yoff), 0, 1, 0, width);

  xoff += 0.01;
  yoff += 0.01;
  noStroke();

  ellipse(x, y, 24, 24);
}
