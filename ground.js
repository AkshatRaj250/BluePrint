class ground{
    constructor(){
       var option2 = {
           isStatic:true
       } 
      this.body = Bodies.rectangle(200,380,400,50,option2);
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position
      fill("green");
      rectMode(CENTER);
      rect(pos.x,pos.y,400,50);
    }
}