//custom variables for y-coordinate of sun & horizon
let sunHeight;
let horizon = 200;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(0);
 
  //sun follows y-coordinate of mouse
  sunHeight = mouseY;


   //light blue background if sun is above horizon
  if(sunHeight < horizon){ //check if it is daytime
     background("lightblue");
  }
  //sun
  fill("yellow");
  circle(200, sunHeight, 100);


  // draw line for horizon
  stroke('green');
  line(0,horizon,400,horizon);

//grass
fill("green"); 
rect(0, horizon, 400, 400);
}
