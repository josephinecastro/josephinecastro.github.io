function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(238, 130, 238);
  
  //hair
  fill('rgb(86,43,28)');
  arc(275, 700, 550, 1350, radians(180), radians(0));

  
  //neck
  fill(244,213,195);
  // Draw a rectangle with rounded corners, each having a radius of 20.
  rect(195, 200, 150, 550, 20);
  
  //shoulders
  fill(244,213,195);
  arc(408, 600, 390, 500, PI, PI + PI, OPEN);
  arc(138, 600, 390, 500, 0, PI + PI, OPEN);
  
  //body
  fill(0,0,255);
  // Draw a square at location (100, 200) with a side size of 200.
  square(130, 350, 275);

  //head
  fill(244,213,195);
  ellipse(269, 200, 300, 300);
  
  //hair 
  fill('rgb(86,43,28)');
arc(270, 180, 300, 360, radians(180),radians(0));

//left eye
c = color(174, 114, 80);
fill(c);
strokeWeight(1);
stroke(51);
ellipse(185, 225, 50, 55);

//left eye
c = color(174, 114, 80);
fill(c);
strokeWeight(1);
stroke(51);
ellipse(330, 225, 50, 55);

//mouth
c = color (251, 255, 255);
fill(c);
strokeWeight(2);
stroke(51);
ellipse(270, 300, 60, 45);

//eyebrows
 fill('rgb(105,105,105)');
 rect(150, 150, 50, 10);
 rect(300, 150, 50, 10);

}
