var sea,seaImg;
var ship, shipImg1;

function preload(){
  shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(90,170,150,50);
  ship.addAnimation("sailing", shipImg1);
  ship.scale = 0.2;

  
  sea= createSprite(150,160,150,50);
  sea.addImage("sea",seaImg);
  sea.scale = 0.3;
  sea.velocityX = -4;
  sea.x = sea.width /2;
  
}
function draw() {
  background("blue");
  
    
  if (sea.x < 0){
    sea.x = sea.width/2;
  }
  drawSprites();
 }
 