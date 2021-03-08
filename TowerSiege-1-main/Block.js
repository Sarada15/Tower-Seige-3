class Block {
  constructor(x, y, width, height) {
      var options = {
          isStatic : true,
          "restitution" : 0.8,
          "friction" : 2,
          "density" : 1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var speed = this.body.speed;

        if(speed < 3) {
          push();
          rectMode(CENTER);
          rect(pos.x, pos.y, this.width, this.height);
          pop();
        }

        else {
          push();
          World.remove(world, this.body);
          this.Visibility = this.Visibility - 5;
          tint(255,this.Visibility);
          pop();
        }
    }
  }