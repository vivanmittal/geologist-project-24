
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  hammer1=new Hammer(100,200)
  ground = new Ground(600,height,1200,30)
  stone1=new Stone(550,20,80,90)
  rubber1=new Rubber(200,200)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 hammer1.display()
 ground.display()
 stone1.display()
 rubber1.display()
 
}



