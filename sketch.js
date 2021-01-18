var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car =createSprite(200,200,30,30);
  car.shapeColor="red";
  wall=createSprite(1000,200,30,100);
  wall.shapeColor="red";
  car.velocityX=5;


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car,movingRect)){
    text("you win",400,600);
  }
  bounceOff(car,wall);
  drawSprites();
}
 