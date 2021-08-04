class PlayerArcher {
  constructor(x, y, width, height) {
    const options = {
      isStatic: true
    };

    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.collapse = false;
    this.image = loadImage("./assets/playerArcher.png");

    World.add(world, this.body);
    Matter.Body.setAngle(this.body, -PI / 2);
  }
  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    if(keyIsDown(UP_ARROW)&&angle>-2.7){
      angle=angle -0.1;
      Matter.Body.setAngle(this.body,angle)
    }else{
      angle=angle+0.1;
    }

  if(keyIsDown(DOWN_ARROW)&&angle<-1){
  angle=angle+0.1;
  Matter.Body.setAngle(this.body,angle)
  
}else{
  angle=angle-0.1;
}
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();


  }
}