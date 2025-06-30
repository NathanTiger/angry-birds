//json,javascript object notation
//name spacing 
const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Body
const Constraint = Matter.Constraint

//variables for the game.
var engine,world 
var bg
var ground
var platform
var bird
var pig1,pig2
var box,box1,box2,box3
var log,log1,log2,log3,log4
var sling
var groundOptions = {
    "isStatic":true
}
function preload(){
    bg = loadImage("sprites/bg.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    engine = Engine.create()
    world = engine.world
    ground=new Ground(width/2,height-10,width,20)
    bird=new Bird(300,100)
    platform=new Ground(250,height-50,500,400)
    //layer one
    box=new Box(width-260,height-35)
    pig1=new Pig(width-200,height-35)
    box1=new Box(width-140,height-35)
    log=new Log(width-200,height-81,180,20,PI)
    //layer two
    box2=new Box(width-260,height-100)
    pig2=new Pig(width-200,height-100)
    box3=new Box(width-140,height-100)
    log1=new Log(width-200,height-131,180,20,PI)
    //roof
    log3=new Log(width-227,height-170,100,20,PI/-3.14159265358979)
    log4=new Log(width-175,height-170,100,20,PI/3.14159265358979)
    sling=new Sling(bird.body,{"x":400,"y":200})
}
function draw(){
    background(bg)
    Engine.update(engine)
    ground.display()
    bird.display()
    platform.display()
    //layer one
    box.display()
    pig1.display()
    box1.display()
    log.display()
    //layer two
    box2.display()
    pig2.display()
    box3.display()
    log1.display()
    //roof
    log3.display()
    log4.display()
    sling.display()
}
function mouseDragged(){
    Body.setPosition(bird.body,{"x":mouseX,"y":mouseY})
}
function mouseReleased(){
    sling.fly()
}