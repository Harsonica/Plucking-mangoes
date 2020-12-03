
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boyImage;
var mango1, mango2, mango3, mango4, mango5;
var stoneObj;
var treeObj;
var groundObj;
function preload()
{
	boyImage = loadImage("Images/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  mango1 = new body(200, 340, 50, 60)
  mango2 = new body(230, 350, 50, 60)
  mango3 = new body(300, 360, 50, 60)
  mango4 = new body(250, 370, 50, 60)
  mango5 = new body(246, 380, 50, 60)
  stoneObj = new body(200,450,70)
  treeObj = new body(1200,650);
  groundObj = new body(width/2,670,width,20);
 
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectcollision(stoneObj, mango1);
  detectcollision(stoneObj, mango2);
  detectcollision(stoneObj, mango3);
  detectcollision(stoneObj, mango4);
  detectcollision(stoneObj, mango5);


}

function detectcollision(lstone, lmango){
   mangoBodyPosition = lmango.body.position
   stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBody.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r*lstone.r)
{
  Matter.Body.setStatic(lmango.body,false);
}
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}

function keyPressed(){

  if(keyCode==32){
  launcher.attach(stoneObj.body)
  }
}

