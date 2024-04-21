var gameState ="play"
var score=0
var bomb,bombImage,bombGroup
var life=3

function setup() {
  createCanvas(1000,600);
  snowbroad=createSprite(500, 500, 50, 50);
  snowbroad.addImage("snowbroad",snowbroadimage)
  snowbroad.scale= 1.3
  coinGroup= new Group()
  bombGroup= new Group()
  
}

function coins(){
  if (frameCount % 60===0){
    var coin =createSprite(600,0,40,10);
    coin.x= Math.round(random(80,900));
    coin.addImage(coinImage);
    coin.scale= 0.5;
    coin.velocityY= 3;

    coin.lifetime=200;

    coinGroup.add(coin)
  }
}
function bombs(){
  if (frameCount % 80===0){
  var bomb=createSprite(500,0,40,10);
  bomb.x= Math.round(random(80,900));
  bomb.addImage("bombImage",bombImage);
  bomb.scale= 0.2;
  bomb.velocityY= 3;

  bomb.lifetime=200;
  bombGroup.add(bomb)
}
}
function draw() {
  
  if (gameState==="play"){
    
  
  background(backgroundimage); 
  coins() 
  bombs()
  if(keyDown("left")){
    snowbroad.x-= 5
  }
  if(keyDown("right")){
    snowbroad.x+=5
  }
  drawSprites();
  textSize(25)
  fill("Black")
  text("Score:"+score, 90,50)
  text("Life:"+life,90,80)
}
}

function preload(){
  backgroundimage= loadImage("Background.avif")
  snowbroadimage= loadImage("Starting.png")
  coinImage= loadImage("Coins.png")
  bombImage= loadImage("bomb_imag.png")
}
