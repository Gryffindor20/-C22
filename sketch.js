const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var object;
var ground;
function setup() 
{
  createCanvas(800,400);

  engine = Engine.create(); 
  world = engine.world;

  var options={
    isStatic : false, 
    restitution : 1.5
  }
  var groundProperty={
    isStatic : true
  }

  object = Bodies.rectangle(400,200,100,100,options);
  World.add(world, object);

  ground = Bodies.rectangle(400, 380, 800, 40, groundProperty)
  World.add(world, ground);

  


  console.log(object);

  
}

function draw()
{
  Engine.update(engine);

  background("lightgreen");  

  rectMode(CENTER);
  
  fill("pink")
  rect(object.position.x, object.position.y,100,100 );

  fill("magenta")
  rect(ground.position.x, ground.position.y, 800, 40);
  
}