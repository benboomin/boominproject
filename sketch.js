var bigword=0;//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,216,230); //an RGB color for the canvas' background
 
  stroke("#ffffcc");
  strokeWeight(16);
  fill("#0000ff");
  ellipse(mouseX,mouseY,100,100);
  textSize(bigword);
  bigword= bigword +1
  textFont("Arial");
  textAlign(CENTER);
  text("boomin",300,300);
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  // center of canvas, 20px dia
}
