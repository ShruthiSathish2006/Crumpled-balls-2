const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var paper,ground;
var dustbin1, dustbin2, dustbin3;
var engine, world;


function setup() {
  createCanvas(1000,1000);
  engine = Engine.create();
	world = engine.world;
	paper = new Paper(100,100);
	ground = new Ground(500, 700, 1000, 10);
	dustbin1 = new Dustbin(750,690,100,10);
	dustbin2 = new Dustbin(800,655,10,50);
  dustbin3 = new Dustbin(700,655,10,50);
  dustbinImg = new DustbinImg(750,650);
}

function draw() {
  background(255);
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  dustbinImg.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:700, y:100});
	}
}
