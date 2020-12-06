var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1, rect2, rect3
var rectA, rectB, rectC
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.5
	rectA=createSprite(350,650,20,100)
	rectB=createSprite(550,650,20,100)
	rectC=createSprite(450,680,200,30)
	rectA.shapeColor="red"
	rectB.shapeColor="red"
	rectC.shapeColor="red"
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
rect1=Bodies.rectangle(350,650,20,100,{isStatic:true})
World.add(world, rect1);
rect2=Bodies.rectangle(550,650,20,100,{isStatic:true})
World.add(world, rect2);
rect3=Bodies.rectangle(450,680,200,30,{isStatic:true})
World.add(world, rect3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 rectMode(CENTER)
 fill("red")
  rect(rect1.position.x,rect1.position.y,20,100)
  rect(rect2.position.x,rect2.position.y,20,100)
  rect(rect3.position.x,rect3.position.y,200,30)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false);
    
  }
}



