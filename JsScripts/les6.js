function setup() {
  createCanvas(800, 600);
}

function draw() {
// frameRate
frameRate(3);

// background
background(200);

  // circle
 for (let i = 0; i < 10000; i++) {
    fill(
        random(0,255,
        0,
        random(0,255)
      ))
      circle(
      random(0,800),
      random(0,600),
      random(5,100));
    }
}


