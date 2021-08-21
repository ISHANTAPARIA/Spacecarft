var bg ;
var iss , iss_image;
var spacecraft , spacecraft_image , spacecraft_animation;

function preload(){
  bg = loadImage("Docking-undocking/spacebg.jpg");
  iss_image = loadImage("Docking-undocking/iss.png");
  spacecraft_image = loadAnimation("Docking-undocking/spacecraft1.png");
  spacecraft_animation = loadAnimation("Docking-undocking/spacecraft2.png",
  "Docking-undocking/spacecraft3.png","Docking-undocking/spacecraft4.png")
}
function setup() {
  createCanvas(1400,700);

  iss=createSprite(600, 250, 50, 50);
  iss.addImage(iss_image);

  spacecraft=createSprite(400,450,50,50);
  spacecraft.addAnimation("spacecraft",spacecraft_image);
  spacecraft.scale=0.30;

  spacecraft.x = spacecraft.x + random(-1,1);
//525,380      -75,130
}

function draw() {
  background(bg);  

  spacecraft.depth = iss.depth - 1;
  console.log(spacecraft.x,spacecraft.y);
if ( keyDown("UP_ARROW")) {
  spacecraft.addAnimation("spacecraft",spacecraft_animation);
  spacecraft.y=spacecraft.y-2;
}
if ( keyDown("DOWN_ARROW")) {
  spacecraft.addAnimation("spacecraft",spacecraft_animation);
  spacecraft.y=spacecraft.y+2;
}
if ( keyDown("LEFT_ARROW")) {
  spacecraft.addAnimation("spacecraft",spacecraft_animation);
  spacecraft.x=spacecraft.x-2;
}
if ( keyDown("RIGHT_ARROW")) {
  spacecraft.addAnimation("spacecraft",spacecraft_animation);
  spacecraft.x=spacecraft.x+2;
}

if (spacecraft.y <= (iss.y+100) && spacecraft.x <= (iss.x -10)) {
  textSize(25);
  fill("white");
  text("Docking Sucessful!",200,300);
  spacecraft.addAnimation("spacecraft",spacecraft_image);
}

drawSprites();
}