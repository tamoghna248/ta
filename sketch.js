var car,wall;
var Speed,Weight;
var thickness;




function setup() {
  createCanvas(1600,400);
  Speed=random(55,90);
  car=createSprite(100, 200, 50, 50);
  car.shapeColor="black"
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
 
  Weight=random(400,1500);
}

function draw() {
  background(255,255,255);  
  car.velocityX=Speed;
 // if(Collided(bullet,wall))
 if(wall.x-car.x<=(car.width+wall.width)/2){
  car.velocityX=0;
    var deformation=0.5*Weight*Speed*Speed/(thickness*thickness*thickness)
    if(deformation>180  ){
    //wall.shapeColor="white";
    car.shapeColor="red"
    text("high risk",200,200)
  }
  if(deformation<180&&deformation>100){
  // wall.shapeColor="white" 
   car.shapeColor="yellow";
   text("medium risk",200,200)
  }
  if(deformation<100){
  //  wall.shapeColor="white" 
    car.shapeColor="green";
    text("low risk",200,200)
   }
  
  
  }

  
  drawSprites();
}
 
 
 
  
