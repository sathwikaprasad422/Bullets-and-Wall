var wall, thickness;

var bullet, speed, weight;

var object1, object2;

function setup() {
background(105,105,105);
createCanvas(1600,400);

speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);

bullet = createSprite(50,200,50,50);

bullet.velocityX = speed;

bullet.shapeColor = color(0,0,255);

wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = color(80,80,80);

}

function draw() {
  background(255,255,255); 
  
  /*if(isTouching(bullet,wall)){
    if(wall.x - car.x < (car.width + wall.width)/2){
      car.velocityX=0;
      var deformation = 0.5 * weight* speed * speed/22500;
      if (deformation > 180){
        car.shapeColor = color(255,0,0);
      }
      if (deformation < 180 && deformation > 100){
        car.shapeColor = color(230,230,0);
      }
      if (deformation < 100){
        car.shapeColor = color(0,255,0);
      }
    }
  }*/

  if(hasCollied(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }

    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();

 
}
/*function isTouching(object1, object2){
  if (car.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
        return true;
    } 
    else{
      return false;
    }*/

    function hasCollied(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false;
  
}
