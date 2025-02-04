let sourceText = "I don't care connect boys connect";
let words = sourceText.split(" ");
function setup() {
  createCanvas(400, 400);
  noLoop();
}
function draw() {
  background(50);
  textSize(72);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < words.length; i++) {
    fill(random(0, 150));
    text(words[i], random(width), random(height));
  }
}