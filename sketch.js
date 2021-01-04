
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeImage, skyImage, boyImage, score;

function preload()
{
	
}

function setup() {
	createCanvas(3000, 800);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1 = new mango(900,650,50,50);
	box2 = new mango(950,650,50,50);
	box3 = new mango(1000,650,50,50);
	box4 = new mango(1050,650,50,50);
	box5 = new mango(900,600,50,50);
	box6 = new mango(950,600,50,50);
	box7 = new mango(1000,600,50,50);
	box8 = new mango(1050,600,50,50);
	box9 = new mango(900,550,50,50);
	box10 = new mango(950,550,50,50);
	box11 = new mango(1000,550,50,50);
	box12 = new mango(1050,550,50,50);
	box13 = new mango(900,500,50,50);
	box14 = new mango(950,500,50,50);
	box15 = new mango(1000,500,50,50);
	box16 = new mango(1050,500,50,50);
	box17 = new mango(900,450,50,50);
	box18 = new mango(950,450,50,50);
	box19 = new mango(1000,450,50,50);
	box20= new mango(1050,450,50,50);
	box21= new mango(900,400,50,50);
	box22= new mango(950,400,50,50);
	box23= new mango(1000,400,50,50);
	box24= new mango(1050,400,50,50);
	box25= new mango(900,350,50,50);
	box26 = new mango(950,350,50,50);
	box27 = new mango(1000,350,50,50);
	box28 = new mango(1050,350,50,50);
	box29 = new mango(900,300,50,50);
	box30 = new mango(950,300,50,50);
	box31 = new mango(1000,300,50,50);
	box32 = new mango(1050,300,50,50);


	

	
	ground3 = new Ground(670,670,1500,20);

	stone = new Stone(200,200,60);

	sling = new Launcher(stone.body,{x:700,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();
box31.display();
box32.display();



ground3.display();


sling.display();
stone.display();

fill ("red");

}


function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y: mouseY});
}




