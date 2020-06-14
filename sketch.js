var bullet1, bullet2;

var wall1, wall2;

var damage1, damage2;

var thickness1, thickness2;

var speed1, speed2;

var weight1, weight2;

var divider;

var game = "serve";

var game2 = "serve";

function setup(){
createCanvas(1600,600);

divider = createSprite(800,300,1600,10);
divider.shapeColor = "yellow";

thickness1 = random(22,83);
thickness2 = random(22,83);

speed1 = random(100,223);
speed2 = random(100,223);

weight1 = random(30,52);
weight2 = random(30,52);

bullet1 = createSprite(100,150,50,10);
bullet2 = createSprite(100,450,50,10);

wall1 = createSprite(1450,150,thickness2,thickness1);
wall2 = createSprite(1450,450,thickness2,thickness2);

damage1 = (0.5*weight1*speed1*speed1)/(thickness1*thickness1*thickness1);
damage2 = (0.5*weight2*speed2*speed2)/(thickness2*thickness2*thickness2);

}

function draw(){
    background("black");
    if(game === "serve"){
      textSize(25);
      fill("white");
      text("Press Space To Test",750,150);

      if(keyDown("space") && bullet1.x === 100){
        game = "play";
      }        
    }

    if(game2 === "serve"){
      textSize(25);
      fill("white");
      text("Press Space To Test",750,450);

      if(keyDown("space") && bullet2.x === 100){
        game2 = "play";
      }        
    }

    if(game === "play"){
      bullet1.velocityX = speed1;

      if(collide(bullet1, wall1)){
        game = "end";
      }
    }

    if(game2 === "play"){
      bullet2.velocityX = speed2;

      if(collide(bullet2, wall2)){
        game2 = "end";
      }
    }

    if(game === "end"){
      bullet1.velocityX = 0;

      if(damage1 > 10){
        wall1.shapeColor = "red";
        
        fill("white");
        textSize(15);
        text("Wall : SturdyStandStrong - BulletSpeed : " + Math.round(speed1) + " - BulletWeight : " + Math.round(weight1) + " - Status : Lesser than Expectations.",200,150)
      }

      if(damage1 < 10){
        fill("white");
        textSize(15);
        text("Wall : SturdyStandStrong - BulletSpeed : " + Math.round(speed1) + " - BulletWeight : " + Math.round(weight1) + " - Status : Well Done",200,150)

        wall1.shapeColor = "green";
      }
    }

    if(game2 === "end"){
      bullet2.velocityX = 0;

      if(damage2 > 10){
        wall2.shapeColor = "red";

        fill("white");
        textSize(15);
        text("Wall : SturdyStandStrong - BulletSpeed : " + Math.round(speed2) + " - BulletWeight : " + Math.round(weight2) + " - Status : Lesser than Expectations.",200,450)
      }

      if(damage2 < 10){
        wall2.shapeColor = "green";

        fill("white");
        textSize(15);
        text("Wall : SturdyStandStrong - BulletSpeed : " + Math.round(speed2) + " - BulletWeight : " + Math.round(weight2) + " - Status : Well Done",200,450)
      }
    }

    drawSprites();
}