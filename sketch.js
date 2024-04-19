function setup() {
    createCanvas(1800, 3000);
    background("white");
  }
  
  function draw() {
    
    stroke("blue");
    fill("red");
    
    // console.log(mouseIsPressed)
    
    if (mouseIsPressed) {
     rect(mouseX, mouseY, 20, 35);
    }   
  }