function setup() {
    // Creates a canvas 600 pixels wide
    //and 400 pixels high.
  createCanvas(600, 400);
}
function draw() {
  background(135, 206, 235);

/// sun
fill("yellow");

stroke("orange");

strokeWeight(20);

circle(550, 50, 100);

///rectangle

stroke(0);

strokeWeight(1);

fill("green");

rect(0, 200, 600, 200);

/// emoji's
/// scooter moves by following the X and Y-axis of the mouse.
textSize(75)
text("🏢",400,230)
text("🏤",100,230)
text("🛴", mouseX, mouseY)
}