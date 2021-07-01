class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(960,930,2000,20,options);
      World.add(world, this.ground);
    }
    display(){
      fill("white");
      rectMode(CENTER);
      rect(this.ground.position.x,this.ground.position.y,2000,20);
    }
  };
