const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var canvas,engine,world;
var object;
var ground;
var ball;

function setup() {
  canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var object_options =
  {
    isStatic:true
  } 
var ground_options = 
{
  isStatic:true
}

var ball_option=
{
  restitution:2.0
}


ground=Bodies.rectangle(200,390,200,20,ground_options);
  object=Bodies.rectangle(200,100,50,50,object_options);
  World.add(world,object);
World.add(world,ground);
ball=Bodies.circle(200,100,20,ball_option);
World.add(world,ball);
  //createSprite(400, 200, 50, 50);

  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20);

  rect(object.position.x,object.position.y,50,50);

  rect(ground.position.x,ground.position.y,400,20);

  rect(200,200,50,50);
    //drawSprites();
}