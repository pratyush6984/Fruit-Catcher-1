class Group{
    constructor(){
        var options = {
            isStatic : false,
            density : 0.3
        }
        this.visibility = 255
        this.body = Bodies.rectangle(options);
        World.add(world, this.body);
    }


  display(){
    if (player.index !== null) {
        //fill code here, to destroy the objects.
          // push();
          // translate(this.body.position.x, this.body.position.y);
         //  rotate(angle)
         //  pop();
        
          // else
           //{
             push();
             this.visibility = this.visibility -5;
             tint(255,this.visibility)
             World.remove(world,this.body)
             pop();
           }
  }
}
