

let img = []
let x;
function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('FLowers.jpg');
  img[1] = loadImage('GEDC0072.JPG');
  img[2] = loadImage('Foliage.jpg');
  img[3] = loadImage('gift for mom.jpg');

}


function draw() {
  background(0, 255, 0);
  image(img, 0, 0);
}
function keyPressed(){
(img ++)

}
