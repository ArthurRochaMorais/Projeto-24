class Ferro {
    constructor(x, y) {
      var options = {
        'density':10,
        'friction': 3,
        'restitution' : 0.8
        
      };
      this.body = Bodies.rectangle(x, y, 40, 80, options);
      this.width = 40;
      this.height = 80;
      World.add(world, this.body);
    };
    display(){
      var Ironpos = this.body.position;
      var Ironangle = this.body.angle;
      push();
      translate(Ironpos.x, Ironpos.y);
      rotate(Ironangle);
      strokeWeight(3);
      stroke('black')
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };