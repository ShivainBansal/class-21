const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState="onSling"

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    // string data type
    var name= "shivain"  
     console.log(name);
    
     var num = "9"
     console.log(num);

     // number 
     var score = 0;
     console.log(score);
     
     var numAfterAddition = num+1;
     console.log(numAfterAddition);

     var score2= score+1
      console.log(score2);

      // boolean 
      var bool= true;
      console.log(bool);
      
      // undefined
      var obj;
      console.log(obj);

      // null
       var obj2 = null;
        console.log(obj2);

        // array data type
        // array is created inside a square bracket and can strore same or different types of data separated by coma
         var arr1 = [1,2,3,4,5];
         console.log(arr1);

         var arr2 = ["xyz",2,true]
         console.log(arr2);


 
         var arr3  = [[1,2],[3,4],[5,6],[6,7]]
         console.log(arr3);


console.log(arr3[1]);

console.log(arr3[0][0])

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
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
    if(gameState!== "launched"){
 Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode === 32){
      //  slingshot.attach(bird.body);
    }
}