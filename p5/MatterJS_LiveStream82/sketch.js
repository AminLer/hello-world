
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
var engine;
var world;
var box1;

function setup() {
  createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;
  box1 = Bodies.rectangle(100, 200, 80, 80);
  Engine.run(engine);
}

function draw() {
  background(51);
  rect(box1.position.x, box1.position.y, 80, 80);

}
