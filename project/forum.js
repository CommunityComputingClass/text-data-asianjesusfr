let myQuestion = "What's your favorite holiday?"
 
let contents = "";
let all_the_answers = []

let saveAnswer_button; 
let showAnswers_button;
let textBox; 

let i = 0

let myFont;

function preload(){
  myFont = loadFont("go3v2.ttf")
}

function setup() {
  createCanvas(500, 400);
  textFont(myFont);
  saveAnswer_button = createButton("save your answer");
  saveAnswer_button.position(220,150)
  saveAnswer_button.mousePressed(saveText)
  
  showAnswer_button= createButton("see the answers");
  showAnswer_button.position(220,300)
  showAnswer_button.mousePressed(showAnswers);
  
  
  textBox = createInput("type your answer here")
  textBox.size(200,40)
  textBox.position(50,100)
  textBox.input(storeText)
  
  background(50);
  fill(255);
  textSize(14);
  text(myQuestion,50,50) 
}

function draw() {

}

function saveText(){
   all_the_answers.push(contents);
   contents = "" ;
   textBox.value("type your answer here")
   print(all_the_answers)   
}

function storeText(){
  contents = this.value(); 
}

function showAnswers(){
  
  textBox.hide();
  saveAnswer_button.hide();
  showAnswer_button.hide();
  
  textSize(14);
  fill("pink");   
  for (let i = 0; i < all_the_answers.length; i++) {
    text(all_the_answers[i], 50, (i*20+150));
  }
}