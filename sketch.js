const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  box1 = new box(200,300,50,50);
  box2 = new box(240,100,50,100);
  box3 = new ground();

 
}

function draw() {
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  //drawSprites();
}