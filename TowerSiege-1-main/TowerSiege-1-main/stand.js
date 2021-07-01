class Stand{
    constructor() {
        var options = {
            isStatic: true
        }
        this.ground = Bodies.rectangle(395, 695, 300, 10, options);
        World.add(world, this.ground);
      }
      display(){
        fill("white");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,300, 10);
      }
    };