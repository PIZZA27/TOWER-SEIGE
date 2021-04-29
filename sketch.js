const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  stand3= new Stand(590,235,250,10);
  //level one
  block1 = new Block(300,275,30,40);

  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  ball=Bodies.circle(50,200,20)
  World.add(world,ball)
  slingshot1=new Slingshot(this.ball,{x:100,y:200})
   //level one
   box1= new Block(500,375,30,40)
   box2= new Block(530,375,30,40 )
   box3=new Block(560,375,30,40)
   box4= new Block(590,375,30,40)
   box5=new Block(620,375,30,40)
   box6= new Block(650,375,30,40)
   box7= new Block(680,375,30,40)
   //level two
   box8= new Block(530,335,30,40)
   box9= new Block(560,335,30,40)
   box10= new Block(590,335,30,40)
   box11= new Block(620,335,30,40)
   box12= new Block(650,335,30,40)
   //level three
   box13= new Block(560,375,30,40)
   box14= new Block(590,375,30,40)
   box15= new Block(620,375,30,40)
   //top
   box16= new Block(590,295,30,40)


}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand3.display()
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("pink");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("turquoise");
  box13.display();
  box14.display();
  box15.display();
  fill("grey");
  box16.display();
  imageMode(CENTER)
  image (polygon_img,ball.position.x,ball.position.y,40,40)
  slingshot1.display()
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot1.fly()
}





