let peri = ["P- ","P- ","Periwinkle Purple"]
let i = 0
let xPos = 100
let yPos = 250
function setup() {
    createCanvas(400, 400);
  }

  function draw() {
    background(204, 204, 255);
    noStroke();
    fill(0);
    text("Whats your favorite color?", 50, 200);
    text(peri[i], xPos, yPos)
   
   

        
        }

function mousePressed (){
    i++
}