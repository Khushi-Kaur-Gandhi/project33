var snowfall ,snowfallImage,bgImage
function preload(){
  snowfallImage=loadImage("snow4.webp")
  bgImage=loadImage("snow1.jpg")
}
function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(bgImage);  
  createSnowfall()
  drawSprites();
}
function createSnowfall(){
  if(frameCount%10===0){
    snowfall=createSprite(random(0,800),0,5,5)
    snowfall.velocityX=-2
    snowfall.velocityY=4
    snowfall.addImage(snowfallImage)
    snowfall.scale=0.1
  }
}