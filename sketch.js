
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    paper = new Paper(200,100,30,30);
    ground = new Ground(400,700,800,50);
    D1 = new Ground(600,675,150,20);
    D2 = new Ground(525,650,20,75);
    D3 = new Ground(675,650,20,75);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(keyCode === UP_ARROW){
    Mater.Body.applyFource(paperObject.body,paperObject.body.position,{x:85 , y: -85});
  }

  paper.display();
  ground.display();
  D1.display();
  D2.display();
  D3.display();
  drawSprites();
  arrowKey();
 
}

function arrowKey(){

    if(keyCode === UP_ARROW){
    Mater.Body.applyFource(paperObject.body,paperObject.body.position,{x:85 , y: -85});
    }

  }    
