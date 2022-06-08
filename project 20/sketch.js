var bgImg;
var cat;
var mouse;
var catImg1, catImg2, catImg3;
var mouseImg1, mouseImg2, mouseImg3;


function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870,600);
    cat.addAnimation("catSitting", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("mouseSitting", mouseImg1);
    mouse.scale = 0.2;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = o;
        cat.addAnimation("catLastImage", catImg3);
        cat.changeAnimation("catLaastImage");
        cat.x=300;
        cat.scale=0.2;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing", mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;

      cat.velocityX = -5;
      cat.addAnimation("catRunning", catImg2);
      cat.changeAnimation("catRUnning");

  }


}
