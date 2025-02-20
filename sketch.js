var jump,jumpimg
var fondoimg,mar,sump
var marine,marineimage,barcoGroup
var dead
var score
var sad,sadImage
var PLAY=1 
var END= 0
var gameState=PLAY
function preload(){
jumpimg=loadAnimation("luffy 2.jpg")
fondoimg=loadImage("fondo.jpg")
marineimage=loadImage("marine.png")
sump=loadSound("music.mp3")
dead=loadSound("dead.mp3")
sadImage=loadImage("sad.png")
}
function setup(){
createCanvas(windowWidth,windowHeight)
mar=createSprite(width/2,250,width,120)
mar.addImage(fondoimg)
jump=createSprite(499,height-200,20,20)
jump.addAnimation("jump",jumpimg)
jump.scale=0.20
score=0
invisuelo=createSprite(width/2,height-80,width,125)
invisuelo.visible=false
 barcoGroup=createGroup()
 sad=createSprite(width/2,height/2- 50);
 sad.addImage(sadImage);
 sad.scale = 0.90
}
function draw(){
  background(fondoimg)

  if(gameState===PLAY){
  sad.visible=false
  
  sump.setVolume(0.1)
if(keyDown("space")&&jump.y>=350){
 jump.velocityY=-16

score=score+1





}
jump.velocityY=jump.velocityY+0.8

jump.collide(invisuelo)

if(barcoGroup.isTouching(jump)){
gameState=END

}


barcos()
  } else if(gameState=== END){
    jump.destroy()
sump.pause()
sad.visible=true
  }
drawSprites()
textSize(30)
fill("black")
  text("score: "+score,20,50)
}
function barcos()
{
if(frameCount % 60 ===0){
  marine = createSprite(1200, height - 200, 20, 20)

  marine.addImage(marineimage)
  marine.scale = 0.40


marine.velocityX=-6
barcoGroup.add(marine)
}
}




































