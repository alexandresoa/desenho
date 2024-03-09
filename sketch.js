let pencil, eraser, quadrado, scissors

function setup() {
    createCanvas(600, 400)
    strokeWeight(4)
    stroke(0)
  }
  
  function draw() {
    if(mouseIsPressed) {
        point(mouseX, mouseY)
    }
  }
