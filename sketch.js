var sleep, brush, gym, eat, drink, move, bgImg, bath
var astro
var g1,g2,g3,g4

function preload(){
  sleep=loadImage("sleep.png")
  brush=loadImage("brush.png")
  gym=loadAnimation("gym11.png", "gym12.png",)
  eat=loadAnimation("eat1.png", "eat2.png")
  drink=loadAnimation("drink1.png", "drink2.png")
  move=loadAnimation("move.png", "move.png", "move1.png", "move1.png")
  bath=loadAnimation("bath1.png", "bath2.png")
  bgImg=loadImage("iss.png")
}
function setup() {
  createCanvas(1800,900);
  
  bg=createSprite(900,450,10,10)
  bg.addImage(bgImg)
  bg.scale=0.4

  astro=createSprite(950,650)
  astro.addImage(sleep)
  astro.scale=0.15


  g1=createSprite(900,900,1800,10)
  g1.visible=false

  g2=createSprite(900,0,1800,10)
  g2.visible=false
}

function draw() {
  background(225);  

  if (keyDown("up")){
    astro.addImage("s",brush)
    astro.changeAnimation("s")
    astro.y=880
    astro.x=500
    astro.velocityX=0
    astro.velocityY=0
  }
  
  if (keyDown("down")){
    astro.addAnimation("g",gym)
    astro.changeAnimation("g")
    astro.y=880
    astro.x=500
    astro.velocityX = 0;
    astro.velocityY = 0;
  }

  if (keyDown("left")){
    astro.addAnimation("e",eat)
    astro.changeAnimation("e")
    astro.x = 150;
    astro.y = 350;
    astro.velocityX = 1;
    astro.velocityY = 1;
  }

  if (keyDown("right")){
    astro.addAnimation("b",bath)
    astro.changeAnimation("b")    
    astro.y = 880
    astro.x = 800
    astro.velocityX=0
    astro.velocityY=0

  }

  if (keyDown("m")){
    astro.addAnimation("mov", move)
    astro.changeAnimation("mov")
    astro.velocityX=1
    astro.velocityY=1
    }
  
  edges=createEdgeSprites();
  astro.bounceOff(edges);
  drawSprites();

  textSize(28)
  fill ("white")
  text ("Instructions", 10,50)
  textSize(18)
  text ("Up Arrow = Brushing",10,80)
  text ("Down Arrow = Gymming",10,100)
  text ("Left Arrow = Eating",10,120)
  text ("Right Arrow = Bathing",10,140)
  text ("m Key = Moving",10,160)
}