

let img;
let img1;
let img2;
let img3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('FLowers.jpg');
  img1 = loadImage('GEDC0072.JPG');
  img2 = loadImage('Foliage.jpg');
  img3 = loadImage('gift for mom.jpg');

}


function draw() {
  background(0, 255, 0);
  image(img, 0, 0);
}
function keyPressed(){
(img ++)

}
