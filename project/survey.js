let myFont;

function preload(){
  myFont = loadFont("go3v2.ttf")
}

let myMessage = "press left arrow if you would be a terrible boyfriend and right arrow if you would be a great boyfriend"

let terrible = 0; 
let great = 0; 

function setup() {
  createCanvas(400, 400);
  background(50);
  noStroke();
  fill(255);
  textFont(myFont);
  text(myMessage, 50, 50, 300);
  textAlign(CENTER, CENTER);
  text("terrible boyfriend", 95, 220);
  text("great boyfriend", width-95, 220);
}

function draw() {
  fill(196, 41, 44)
  angleMode(DEGREES);
  arc(70, 150, 50, 50, 180, 0);
  arc(120, 150, 50, 50, 180, 0);
  triangle(45, 150, 145, 150, 95, 200)
  fill("pink");
  arc(width-70, 150, 50, 50, 180, 0);
  arc(width-120, 150, 50, 50, 180, 0);
  triangle(width-45, 150, width-145, 150, width-95, 200)

  fill("black")
  textAlign(CENTER, CENTER);
  text(terrible, 95, 170);
  text(great, width-95, 170)
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    terrible = terrible +1;
  }  
  if(keyCode === RIGHT_ARROW){
    great = great +1;
  }    
}
