var playgroundImage,playground,bowImage,bow,redBallonImage;
var arrowImage,arrow;
var score=0;
var blueBalloon,greenBalloon,pinkBalloon,redBalloon;
var arrowGroup,BlueB,GreenB,RedB,PinkB;
function preload(){
 //load your images here 
  playgroundImage=loadImage("background0.png")
  bowImage=loadImage("bow0.png")
  redBallonImage=loadImage("red_balloon0.png")
  greenBalloonImage=loadImage("green_balloon0.png")
  blueBalloonImage=loadImage("blue_balloon0.png")
  pinkBalloonImage=loadImage("pink_balloon0.png")
  arrowImage=loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 600);
  playground=createSprite(300,100,100,100)
  playground.scale=3
  playground.addImage("ground",playgroundImage)
  bow=createSprite(500,300,20,20)
  bow.addImage("bow",bowImage)
  arrowGroup=new Group();
  BlueB=new Group();
  GreenB=new Group();
  RedB=new Group();
  PinkB=new Group();
  RedB.Debug=true;
    
}

function draw() {
 
   bow.y=mouseY
   playground.velocityX=-2
 
   if(playground.x<0){
    playground.x=playground.width/2;
  }
   
 if(keyDown("space")){
   createArrow();
 }

  
  if(arrowGroup.isTouching(BlueB)){
    
    BlueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
    
  }
    
  if(arrowGroup.isTouching(GreenB)){
    
    GreenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
    
  }
    
  if(arrowGroup.isTouching(PinkB)){
    
    PinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+4;
    
  }
    
  if(arrowGroup.isTouching(RedB)){
    
    RedB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
    
  }
  
  
 // console.log(frameCount);
  
  
  
  spawnBlueBalloons();   
  spawnGreenBalloons();
  spawnRedBalloons();
  spawnPinkBalloons();
    
  drawSprites();
  text("score "+score,530,50)
}

function createArrow(){
  arrow=createSprite(360,100,5,10);
  arrow.addImage(arrowImage);
  arrow.velocityX=-6;
  arrow.scale=0.3;
  arrow.y=bow.y;
  arrow.lifetime=140;
  arrowGroup.add(arrow)
  //arrow.debug=true;
  arrowGroup.setColliderEach("rectangle",0,0,80,10);
  
}
function spawnBlueBalloons(){
  if(frameCount%135===0){
  blueBalloon=createSprite();
  blueBalloon.addImage(blueBalloonImage)
  blueBalloon.scale=0.1;
  blueBalloon.velocityY=4;
  blueBalloon.x=random(0,100)
  blueBalloon.lifetime=155;
  BlueB.add(blueBalloon) 
  //blueBalloon.debug=true;  
}
}
function spawnGreenBalloons(){
  if(frameCount%125===0){
    greenBalloon=createSprite();
    greenBalloon.addImage(greenBalloonImage)
    greenBalloon.scale=0.1;
    greenBalloon.velocityY=5;
    greenBalloon.x=random(101,200)
    greenBalloon.lifetime=160;
    GreenB.add(greenBalloon)
  }
}
function spawnRedBalloons(){
  if(frameCount%110===0){
    redBalloon=createSprite();
    redBalloon.addImage(redBallonImage)
    redBalloon.scale=0.1; 
    redBalloon.velocityY=7;
    redBalloon.x=random(200,300)
    redBalloon.lifetime=130;
    RedB.add(redBalloon)
   // RedB.debug=true;
  }
}
function spawnPinkBalloons(){
  if(frameCount%120===0){
    pinkBalloon=createSprite();
    pinkBalloon.addImage(pinkBalloonImage)
    pinkBalloon.scale=1.2;
    pinkBalloon.velocityY=6;
    pinkBalloon.x=random(300,400)
    pinkBalloon.lifetime=160;
    PinkB.add(pinkBalloon)
  }
  
}