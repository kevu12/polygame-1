const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var platform1, platform2;
var polygon, slingShot;

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    platform1 = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
 
    box5 = new Box(810,160,70,70);
 
    polygon = new Polygon(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Sling(polygon.body,{x:200, y:500});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    platform1.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
