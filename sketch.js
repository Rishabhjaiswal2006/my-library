var movobj,fixobj;

function setup() {
  createCanvas(800,800);
  movobj= createSprite(200, 300, 50, 50);
  fixobj=createSprite(600,300,50,100);
  movobj.debug=true;
  fixobj.debug=true;
  fixobj.shapeColor="yellow";
  movobj.shapeColor="yellow";
  //fixobj.velocityX= -4;
   //movobj.velocityX= 4;
   //fixobj.velocityY= -4;
   //movobj.velocityY= 5;
}
function draw(){
  background("blue");
   
  movobj.x=World.mouseX;
  movobj.y=World.mouseY;
  Touching(movobj,fixobj);
 // bouncing(movobj,fixobj);
  drawSprites();

}
