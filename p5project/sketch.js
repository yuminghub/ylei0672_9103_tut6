let img;
let segments = [];
let numSegments = 50; //how many segments be creat
let drawSegments = true

function preload(){
  img = loadImage("/assets/Mona_Lisa.jpg");
}

function setup() {
  createCanvas(img.width, img.height);

  let segWidth = img.width/numSegments;
  let segHeight = img.height/numSegments;

  for (let yPos = 0; yPos < img.height; yPos += segHeight){
    for (let xPos = 0; xPos < img.width; xPos += segWidth){
      let fillColor = img.get(xPos + segWidth/2, yPos + segHeight/2);
      let segment = new ImageSegment(xPos, yPos, segWidth, segHeight, fillColor);
      segments.push(segment);
    }
  }
  pixelColour = color(0);
}

function draw() {
  background(220);
  //segment = new ImageSegment(200, 200, 100, 100);
  //segment.draw();
  if (drawSegments) {
    for(const segemnt of segments) {
      segemnt.draw();
    }
  } else {
    image(img, 0, 0);
  }
  

  stroke(255);
  fill(pixelColour);
  circle(mouseX, mouseY, 40);
}

function mouseMoved(){
  pixelColour = img.get(mouseX, mouseY);
}

function keyPressed(){
  if (key == " "){
    drawSegments = !drawSegments;
  }
}

class ImageSegment {

  constructor(xPos, yPos, wight, height, fillColor){
    this. xPos = xPos;
    this. yPos = yPos;
    this. wight = wight;
    this. height = height;
    this. fillColor = fillColor;
  }

  draw(){
    fill(this.fillColor);
    stroke(0);
    rect(this. xPos, this.yPos, this.wight, this.height);
  }
}