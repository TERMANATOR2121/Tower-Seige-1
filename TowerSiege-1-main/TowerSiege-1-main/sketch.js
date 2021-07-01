const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder, ball, ground;
var stand1, stand2
var slingshot;
var polygon_img;
var gameState;

function setup(){

    engine = Engine.create();
    world = engine.world;

    createCanvas(1910,935);
    ground = new Ground(460, 830, 2000, 50);
    stand1 = new Stand(395, 695, 300, 10);
    stand2 = new Stand2(700, 300, 300, 10);

    //level 1 one
    block1 = new Block(290,675,30,40);
    block2 = new Block(320,675,30,40);
    block3 = new Block(350,675,30,40);
    block4 = new Block(380,675,30,40);
    block5 = new Block(410,675,30,40);
    block6 = new Block(440,675,30,40);
    block7 = new Block(470,675,30,40);
    block8 = new Block(500,675,30,40);
    //level 1 two
    block9 = new Block(320,635,30,40);
    block10= new Block(350,635,30,40);
    block11= new Block(380,635,30,40);
    block12= new Block(410,635,30,40);
    block13= new Block(440,635,30,40);
    block14= new Block(470,635,30,40);
    //level 1 three
    block15= new Block(350,595,30,40);
    block16= new Block(380,595,30,40);
    block17= new Block(410,595,30,40);
    block18= new Block(440,595,30,40);
    //level 1 four
    block19= new Block(380,555,30,40);
    block20= new Block(410,555,30,40);

    //level 2 one
    block21 = new Block(680,275,30,40);
    block22 = new Block(710,275,30,40);
    block23 = new Block(740,275,30,40);
    block24 = new Block(770,275,30,40);
    block25 = new Block(800,275,30,40);
    block26 = new Block(830,275,30,40);
    block27 = new Block(860,275,30,40);
    block28 = new Block(890,275,30,40);
    //level 2 two
    block29= new Block(710,235,30,40);
    block30= new Block(740,235,30,40);
    block31= new Block(770,235,30,40);
    block32= new Block(800,235,30,40);
    block33= new Block(830,235,30,40);
    block34= new Block(860,235,30,40);
    //level 2 three
    block35= new Block(740,195,30,40);
    block36= new Block(770,195,30,40);
    block37= new Block(800,195,30,40);
    block38= new Block(830,195,30,40);
    //level 2 four
    block39= new Block(770,155,30,40);
    block40= new Block(800,155,30,40);

    //ball with sling
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingshot = new SlingShot(this.ball,{x:200,y:200});
    gameState="onSling";

}

function draw(){
    //Background
    background("black");
    Engine.update(engine);

    strokeWeight(2);
    stroke(15);
    stand1.display();
    stand2.display();

    fill("red");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    fill("green");
    block9 .display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    fill("blue");
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    fill("red");
    block19.display();
    block20.display();
    fill("red");
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    fill("green");
    block29 .display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
    fill("blue");
    block35.display();
    block36.display();
    block37.display();
    block38.display();
    fill("red");
    block39.display();
    block40.display();





    textSize(35);
    fill("white");
    text("Drag the ball and release to knock over the boxes", 600, 50);
    text("Then Press the Spacebar to attack the ball to the launcher", 569, 100);
    ellipse(ball.position.x,ball.position.y,30);
    slingshot.display();
    drawSprites();
}

function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(ball);
        gameState= "onSling";
        ball.trajectory=[];
        slingshot.attach(ball);
    }
}

function mouseDragged(){
    if (gameState !== "launched") {
        Matter.Body.setPosition(ball , { x: mouseX, y: mouseY });
    }
}


function mouseReleased() {
    gameState = "launched";
    slingshot.fly();
}

