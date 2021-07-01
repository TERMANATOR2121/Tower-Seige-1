class Ball extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.trajectory = [];//empty array
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
      if (this.body.position.x > 220 && this.body.velocity.x > 10) {
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
    }
  }