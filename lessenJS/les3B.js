//variable for initial sun position

let sunHeight = 600; //point below horizon

//variables for color change

let redVal = 0;

let greenVal = 0;


function setup() {
  createCanvas(600, 400);
}
function draw() {

  //fill background with color based on custom variables
  background(redVal, greenVal, 50);

  //sun
  fill(255, 135, 5, 60);
  circle(300, sunHeight, 180);
  fill(255, 100, 0, 100);
  circle(300, sunHeight, 140);

//water
fill(0, 184, 204);
rect(0, 250, 600, 300);

  //mountain

  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(100, 50, 12);
  triangle(-100, 400, 150, 200, 0, 400); 
  

if (sunHeight > 130) {
    sunHeight -=2;
    }

if (sunHeight < 480)  {
  redVal +=4;
  greenVal += 1;
}  
if (mouseIsPressed == true && sunHeight === 130)
{
    background(0);
}    
}
