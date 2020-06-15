class DustbinImg {
    constructor(x, y){
        var options = {
            isStatic: true}
     
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = 100;
     this.height = 100;
     this.image = loadImage("dustbingreen.png");
     World.add(world, this.body);
   }
   display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height, this.options);
    pop();
  }
}
    
