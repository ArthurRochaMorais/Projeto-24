class Pedra {
    constructor(x, y) {
      var options = {
        'density':0.8,
        'friction': 5,
        
      };
      this.body = Bodies.rectangle(x, y, 100, 100, options);
      this.width = 100;
      this.height = 100;
      World.add(world, this.body);
    };
    display(){
      var Pedrapos = this.body.position;
      var Pedraangle = this.body.angle;
      push();
      translate(Pedrapos.x, Pedrapos.y);
      rotate(Pedraangle);
      strokeWeight(3);
      stroke('black')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  