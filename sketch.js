function setup() {
    createCanvas(10000, 10000);
    background("black");
  }
  
  function draw() {
    
    stroke("blue");
    fill("red");
    
    // console.log(mouseIsPressed)
    
    if (mouseIsPressed) {
     rect(mouseX, mouseY, 20, 35);
    }   
  }