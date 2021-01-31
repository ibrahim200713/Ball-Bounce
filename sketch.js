// namespacing 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, box;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var options ={
    isStatic : true,
    density : 0.005,
    friction : 1.0
  }

  ground = Bodies.rectangle(200,400,400,50,options);
  World.add(world,ground);

  // console.log(ground.density);
  var options ={
    restitution : 0.1,
    density : 0.005,
    friction : 1.0
  }

  ball = Bodies.circle(200,100,20,options);
  World.add(world,ball);
}


function draw() {
  background(0,0,0); 
  Engine.update(engine);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400,50); 

  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);

} 






