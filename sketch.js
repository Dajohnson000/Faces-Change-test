let images = [];
let i = 0;
let shakes = 0;
let minimumShakes = 5;

function preload() {
  images[0] = loadImage("assets/test 1.jpg");
  images[1] = loadImage("assets/test 2.JPG");
  images[2] = loadImage("assets/test 3.png");
  images[3] = loadImage("assets/test 4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setShakeThreshold(50);
}

function draw() {
  background(0, 255, 0);
  image(images[i], 0, 0);
}
function deviceShaken(){
  shakes++;
  if (shakes < minimumShakes) return;

  if (shakes >= minimumShakes) {
    i = (i + 1) % 4;
    shakes = 0;
  }

  console.log(shakes);
}
