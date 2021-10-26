
function preload(){
  runner_running=loadAnimation("Runner-1.png","Runner-2.png")
  pathImage=loadImage("path.png");
 
  //pre-load images


}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.scale=1.2
  boy=createSprite(180,340,30,30);
  boy.addAnimation("running",runner_running)
  boy.scale=0.08
  invisibleBoundary=createSprite(0,0,100,800)
  invisible2=createSprite(410,0,100,800)
  invisibleBoundary.visible=false
  invisible2.visible=false
}



function draw() {
  background(0);
  path.velocityY = 4;
  boy.x=World.mouseX
  Edges=createEdgeSprites()
  boy.collide(Edges[3])
  boy.collide(invisibleBoundary)
  boy.collide(invisible2)
if (path.y > 400) {
path.y = height/2
}


drawSprites();
}
