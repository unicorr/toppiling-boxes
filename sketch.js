const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
  var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,400,20)
}

function draw(){
background(0);
Engine.update(engine);


ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y, 20, 20);
}