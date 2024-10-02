
let images = []
let i = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
  images[0] = loadImage('FLowers.jpg');
  images[1] = loadImage('GEDC0072.JPG');
  images[2] = loadImage('Foliage.jpg');
  images[3] = loadImage('gift for mom.jpg');

}


function draw() {
  background(0, 255, 0);
  image(images[i], 0, 0);
}
function keyPressed(){
i = (i + 1) % 4
console.log(i);
}
