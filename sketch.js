var canvas;
var music;
var box;
var rect1,rect2,rect3,rect4;
var edge1,edge2,edge3
function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    box = createSprite(random(20,750),300,40,40);
    box.velocityX = 2;
    box.velocityY = 2;
    edge1 = createSprite(800,300,1,600);
    edge2 = createSprite(400,0,800,1);
    edge3 = createSprite(0,300,8,600);
    edge3.shapeColor = "black";
    rect1 = createSprite(95,590,185,20);
    rect1.shapeColor="blue";
    rect2 = createSprite(295,590,185,20);
    rect2.shapeColor="orange";
    rect3 = createSprite(495,590,185,20);
    rect3.shapeColor="purple";
    rect4 = createSprite(695,590,185,20);
    rect4.shapeColor="green";
}

function draw() {
    background("black");
    if(box.bounceOff(rect1)){
       box.shapeColor = "blue";
       music.play();
   }
    if(box.bounceOff(rect2)){
        box.shapeColor = "orange";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(box.bounceOff(rect3)){
        box.shapeColor = "purple";
    }
    if(box.bounceOff(rect4)){
        box.shapeColor = "green";
    }
    box.bounceOff(edge1);
    box.bounceOff(edge2);
    box.bounceOff(edge3);
    //create edgeSprite
 
drawSprites();
    //add condition to check if box touching surface and make it box
}
