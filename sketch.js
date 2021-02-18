
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,forlolsMango;
var world,boy,lineSlig
var bg

function preload(){
	boy=loadImage("images/boy.png");
  bg = loadImage("images/download.jpg")
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1005,145,30);
	mango3=new mango(975,278,30);
	mango4=new mango(1115,215,30);
	mango5=new mango(1225,235,30);
  forlolsMango = new mango(1055,175,30);

	stoneObj=new Stone(265,370,40)

	treeObj=new tree(1050,610);
	groundObject=new ground(width/2,600,width,20);
	lineSlig = new SlingLine(stoneObj.body,{x:240,y:450})
	
	Engine.run(engine);

}

function draw() {

	

  background(bg);
  //Add code for displaying text here!
  
  
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  forlolsMango.display();
  lineSlig.display();
  image(boy ,200,370,200,300);
  stoneObj.display();
  groundObject.display();
  

  detectCollision(stoneObj,mango1)
  detectCollision(stoneObj,mango2)
  detectCollision(stoneObj,mango3)
  detectCollision(stoneObj,mango4)
  detectCollision(stoneObj,mango5)
  detectCollision(stoneObj,forlolsMango)

  text(mouseX+","+mouseY,mouseX,mouseY)

  text(mouseX+","+mouseY,mouseX,mouseY)
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    lineSlig.fly()
}

function detectCollision (lstone,lmango){
 stonebodypos = lstone.body.position;
 mangobodypos = lmango.body.position;

 var distance = dist(stonebodypos.x,stonebodypos.y,mangobodypos.x,mangobodypos.y);
 if(distance <= lmango.r+lstone.r){
	 Matter.Body.setStatic(lmango.body,false)
 }
}