var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var count=0; 
var gameState = "play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }
    
}

function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
 
  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
  
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

  text("500", 25, 600);
  text("500", 105, 600);
  text("500", 185, 600);
  text("500", 265, 600);
  text("200", 345, 600);
  text("200", 425, 600);
  text("200", 505, 600);
  text("100", 585, 600);
  text("100", 665, 600);
  text("100", 745, 600);
  ground.display();

  if(particle !=null){
    particle.display();
    if(particle.body.position.y>650){
      if(particle.body.position.x<300){
        score=score+500;
        particle=null;
        if(count>=5) gameState="end"
      }
       else if(particle.body.position.x>320 && particle.body.position.x<510){
          score=score+200;
          particle=null;
          if(count>=5) gameState="end"
      } 
      else if(particle.body.position.x>511 && particle.body.position.x<800){
          score=score+100;
          particle=null;
          if(count>=5) gameState="end"
      } 
  }
  } 
   if(count>=5){  
    textSize(50);
    text("GAME OVER",250,250);
  }
  textSize(20);
  text("Turn : "+count ,720,30);
}

function mousePressed(){
  if(gameState !== "end" && count<= 5 ){
     count++;
     particle=new Particle(mouseX,10,10);
  }
}