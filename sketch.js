let images = [];
let i = 0;
let shakes = 0;
let minimumShakes = 5;
let recentlyShaken = false;

function preload() {
  images[0] = loadImage("FLowers.jpg");
  images[1] = loadImage("GEDC0072.JPG");
  images[2] = loadImage("Foliage.jpg");
  images[3] = loadImage("gift for mom.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setShakeThreshold(50);
}

function draw() {
  background(0, 255, 0);
  image(images[i], 0, 0);
}
function keyPressed() {
  shakes++;
  if (shakes < minimumShakes) return;

  if (shakes >= minimumShakes) {
    i = (i + 1) % 4;
    shakes = 0;
  }

  console.log(shakes);
}
