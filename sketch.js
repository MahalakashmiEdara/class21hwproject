const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var roof;


rope1=new rope(bob1,roof,-80,0);
rope2=new rope(bob2,roof,-80,0);
rope3=new rope(bob3,roof,-80,0);
rope4=new rope(bob4,roof,-80,0);
rope5=new rope(bob5,roof,-80,0);


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  
  var rope_options={
	isStatic:true		
  }
  bob1=Bodies.circle(200,50,10,rope_options)
  World.add(world,bob1);

  bob2=Bodies.circle(350,60,20,rope_options)
  World.add(world,bob2);

  bob3=Bodies.circle(400,70,20,rope_options)
  World.add(world,bob3);

  bob4=Bodies.circle(450,80,20,rope_options)
  World.add(world,bob4);

  bob5=Bodies.circle(500,90,20,rope_options)
  World.add(world,bob5);

  



  con1=Constraint.create({
    pointA:{x:200,y:20},
    bodyB:bob1,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  });
  World.add(world,con1);
  
  con2=Constraint.create({
    bodyA:bob2,
    pointA:{x:0,y:0},
    bodyB:bob4,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  })
  World.add(world,con2);


  
  con3=Constraint.create({
    bodyA:bob3,
    pointA:{x:0,y:0},
    bodyB:bob3,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  });
  World.add(world,con3);

  
  
  con4=Constraint.create({
    bodyA:bob4,
    pointA:{x:0,y:0},
    bodyB:bob4,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  });
  World.add(world,con4);

  
  
  con5=Constraint.create({
    bodyA:bob1,
    pointA:{x:0,y:0},
    bodyB:bob5,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  });
  World.add(world,con5);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,20);
  push();
  strokeWeight(3);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
  pop();

}
function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});

  }
}


  
		


	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  


function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(rope.position.x,rope.position.y,230,20);

  display()
  {
	  var pointA=this.rope.bodyA.position;
	  var pointB=this.rope.bodyB.position;

	  stokeWeight(2);
  }

  
  //create ellipse shape for multiple bobs here

 
}

applyforce()
Matter.Body.applyForce(bodyA,)
