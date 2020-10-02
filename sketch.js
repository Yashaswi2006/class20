var fixedRect,movingRect


function setup() {
  createCanvas(1200,800);

  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  //fixedRect.velocityX=3;

  movingRect=createSprite(800,200,50,50);
  movingRect.shapeColor="green";
  //movingRect.velocityX=-3;
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if (movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y-fixedRect.y < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y-movingRect.y < movingRect.width/2 + fixedRect.width/2) {
    
      fixedRect.shapeColor="red";
      movingRect.shapeColor="red";
  }
  else {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }

  drawSprites();
}