class Block{
    constructor(x, y, width, height) {
      this.Visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, {restitution :0.5 });
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
      console.log(this.body.speed);
     if(this.body.speed < 3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
     }else{
       World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility -5;
        tint(255,this.Visibility);
      
       pop();
      }
    }
      score(){
        if(this.Visiblity < 0 && this.Visiblity > -105){
        score ++;
        }
      }

}