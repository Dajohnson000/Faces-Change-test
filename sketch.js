let images = [];
let i = 0;
let shakes = 0;
let minimumShakes = 5;

function preload() {
  images[0] = loadImage("assets/Happi.png");
  images[1] = loadImage("assets/Sad.png");
  images[2] = loadImage("assets/Error.png");
  images[3] = loadImage("assets/Dizzy.png");
  images[4] = loadImage("assets/Ded.png")
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
    i = (i + 1) % 5;
    shakes = 0;
  }

  console.log(shakes);
}
