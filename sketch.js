let x

function setup() {
    createCanvas(600, 400)
    strokeWeight(4)
    stroke(5)
  }
  
  function draw() {
    if(mouseIsPressed) {
        stroke(255, 0, 255)
        fill(0, 255, 0)
        ellipse(mouseX, mouseY, 30, 30)
    }
  }
